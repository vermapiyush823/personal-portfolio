import { Poppins } from "next/font/google";
import { ThemeProvider } from "./context/themeContext";
import { SmoothScrollProvider } from "./context/smoothScrollContext";
import { AnimationProvider } from "./context/animationContext";
import "./globals.css";

export const metadata = {
  title: "Piyush Verma",
  description: "Piyush Verma's Portfolio",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        className={`
        ${poppins.variable}
        `}
      >
        <body>
          <SmoothScrollProvider>
            <AnimationProvider>
              {children}
            </AnimationProvider>
          </SmoothScrollProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
