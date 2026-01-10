'use client'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Recommendations from "@/components/Recommendations";
import Certifications from "@/components/Certifications";
import Gallery from "@/components/Gallery";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set Theme on system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)) {
        setIsDarkMode(true)
      } else {
        setIsDarkMode(false)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Achievements isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Certifications isDarkMode={isDarkMode} />
      <Recommendations isDarkMode={isDarkMode} />
      <Gallery isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
