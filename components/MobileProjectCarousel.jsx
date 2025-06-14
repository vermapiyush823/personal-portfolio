"use client";
import { useTheme } from "@/app/context/themeContext";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const MobileProjectCarousel = ({ children }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);

  // Set up the carousel when children change
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (!carouselRef.current) return;
    
    // Set total number of items
    const items = Array.from(carouselRef.current.children);
    setTotalItems(items.length);
    
    // Reset item refs
    itemsRef.current = items;
    
    // Initialize with optimized settings
    gsap.set(items, { 
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
      scale: 0.95,
      width: "100%",
      pointerEvents: "none",
      willChange: "transform, opacity", // Performance optimization
    });
    
    // Make first item visible with a nice fade in
    gsap.to(items[0], { 
      opacity: 1,
      scale: 1,
      duration: 0.5,
      pointerEvents: "auto",
      ease: "power2.out"
    });
    
    // Show swipe indicator on first load if there's more than one item
    if (items.length > 1) {
      // Delay showing the indicator slightly
      const showTimer = setTimeout(() => {
        setShowSwipeIndicator(true);
      }, 1000);
      
      // Hide after 3 seconds
      const hideTimer = setTimeout(() => {
        setShowSwipeIndicator(false);
      }, 4000);
      
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        if (carouselRef.current) {
          gsap.set(items, { clearProps: "all" });
        }
      };
    }
    
    return () => {
      if (carouselRef.current) {
        gsap.killTweensOf(items);
        gsap.set(items, { clearProps: "all" });
      }
    };
  }, [children]);

  // Navigate to specific slide
  const goToSlide = (index) => {
    if (!carouselRef.current || itemsRef.current.length === 0 || isAnimating) return;

    // Ensure index is within bounds
    const newIndex = (index + totalItems) % totalItems;
    
    // Skip if we're already at this index
    if (newIndex === currentIndex) return;
    
    setIsAnimating(true);
    
    // Determine direction for animation
    const isNext = newIndex > currentIndex || (newIndex === 0 && currentIndex === totalItems - 1);
    
    // Animate out current
    gsap.to(itemsRef.current[currentIndex], {
      opacity: 0,
      scale: 0.9,
      x: isNext ? -30 : 30,
      duration: 0.4,
      ease: "power2.out",
      pointerEvents: "none",
    });
    
    // Animate in new
    gsap.fromTo(
      itemsRef.current[newIndex],
      { 
        opacity: 0, 
        scale: 0.9,
        x: isNext ? 30 : -30,
      },
      { 
        opacity: 1, 
        scale: 1,
        x: 0,
        duration: 0.4,
        delay: 0.05, // Small delay for better transition
        ease: "power2.out",
        pointerEvents: "auto",
        onComplete: () => {
          setIsAnimating(false);
        }
      }
    );
    
    setCurrentIndex(newIndex);
  };

  // Go to next slide
  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };
  
  // Go to previous slide
  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };
  
  // Enhanced touch controls for smooth swiping
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const touchStartTime = useRef(0);
  const activeTouchId = useRef(null);
  const isDragging = useRef(false);
  
  const handleTouchStart = (e) => {
    if (isAnimating || activeTouchId.current !== null) return;
    
    // Store the primary touch point
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    activeTouchId.current = e.touches[0].identifier;
    isDragging.current = true;
    
    // Reset end position
    touchEndX.current = touchStartX.current;
    touchEndY.current = touchStartY.current;
    
    // Hide swipe indicator when user starts interacting
    setShowSwipeIndicator(false);
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    
    // Find our touch point
    let touchPoint = null;
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === activeTouchId.current) {
        touchPoint = e.changedTouches[i];
        break;
      }
    }
    
    if (!touchPoint) return;
    
    touchEndX.current = touchPoint.clientX;
    touchEndY.current = touchPoint.clientY;
    
    // Calculate horizontal and vertical movement
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = touchEndY.current - touchStartY.current;
    
    // If vertical scrolling is more dominant, exit to allow page scrolling
    if (Math.abs(deltaY) > Math.abs(deltaX) * 1.5) {
      isDragging.current = false;
      return;
    }
    
    // If horizontal movement, prevent default to avoid page scrolling
    if (Math.abs(deltaX) > 10) {
      e.preventDefault();
    }
  };
  
  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    
    // Find our touch point
    let touchFound = false;
    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === activeTouchId.current) {
        touchFound = true;
        break;
      }
    }
    
    if (!touchFound) return;
    
    // Reset active touch
    activeTouchId.current = null;
    isDragging.current = false;
    
    // Calculate swipe speed and distance
    const swipeDistance = touchStartX.current - touchEndX.current;
    const swipeTime = Date.now() - touchStartTime.current;
    const swipeSpeed = Math.abs(swipeDistance) / swipeTime;
    
    // Detect swipe with distance or speed threshold
    const minSwipeDistance = 50;
    const minSwipeSpeed = 0.5; // pixels per millisecond
    
    if (Math.abs(swipeDistance) > minSwipeDistance || swipeSpeed > minSwipeSpeed) {
      if (swipeDistance > 0) {
        // Swipe left - go next
        nextSlide();
      } else {
        // Swipe right - go prev
        prevSlide();
      }
    }
  };

  return (
    <div className="relative w-full">
      <div 
        ref={carouselRef}
        className="relative w-full overflow-hidden min-h-[420px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {children}
        
        {/* Enhanced swipe indicator with animation */}
        {showSwipeIndicator && totalItems > 1 && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full z-10 animate-fadeInOut flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 8l4 4-4 4"/>
              <path d="M3 12h18"/>
            </svg>
            <span className="text-white text-sm">Swipe to view more</span>
          </div>
        )}
      </div>
      
      {/* Enhanced carousel controls with better UI */}
      {totalItems > 1 && (
        <div className="flex flex-col gap-3 mt-4">
          {/* Navigation buttons and counter */}
          <div className="flex justify-between items-center px-1">
            <button 
              onClick={prevSlide}
              disabled={isAnimating}
              className={`w-10 h-10 flex items-center justify-center rounded-full
                ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
                ${theme === "dark" 
                  ? "bg-white/10 text-white hover:bg-white/20 active:bg-white/30" 
                  : "bg-black/5 text-black hover:bg-black/10 active:bg-black/15"
                }
                transition-all duration-200 transform active:scale-95
              `}
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div className={`flex items-center gap-1 ${theme === "dark" ? "text-white/80" : "text-black/80"}`}>
              <span className="font-medium text-sm">{currentIndex + 1}</span>
              <span className="text-xs opacity-60">of</span>
              <span className="text-sm">{totalItems}</span>
            </div>
            
            <button 
              onClick={nextSlide}
              disabled={isAnimating}
              className={`w-10 h-10 flex items-center justify-center rounded-full
                ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}
                ${theme === "dark" 
                  ? "bg-white/10 text-white hover:bg-white/20 active:bg-white/30" 
                  : "bg-black/5 text-black hover:bg-black/10 active:bg-black/15"
                }
                transition-all duration-200 transform active:scale-95
              `}
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          
          {/* Pagination dots - enhanced */}
          <div className={`flex justify-center gap-2 mt-2 ${theme === "dark" ? "bg-dark-primary/50" : "bg-white/50"} py-2 rounded-full backdrop-blur-sm`}>
            {Array.from({ length: totalItems }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                aria-label={`Go to project ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                  ${isAnimating ? 'opacity-50' : 'opacity-100'}
                  ${index === currentIndex
                    ? theme === "dark" 
                      ? "bg-white scale-125 shadow-[0_0_5px_rgba(255,255,255,0.7)]"
                      : "bg-dark-primary scale-125 shadow-[0_0_5px_rgba(0,0,0,0.3)]"
                    : theme === "dark"
                      ? "bg-white/40 hover:bg-white/60"
                      : "bg-dark-primary/40 hover:bg-dark-primary/60"
                  }
                `}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileProjectCarousel;
