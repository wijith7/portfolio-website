'use client'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Achievments from "@/components/Achievments";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

const [isDarkMode, setIsDarkMode] = useState(false);

// Set Theme on system preference
useEffect (()=>{
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-schem:dark)').matches)) {
  setIsDarkMode(true)
}else{
  setIsDarkMode(false)
}

},[])

useEffect (()=>{
  if(isDarkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = '';
  }

},[isDarkMode])

  return (
    <>  
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Achievments isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
