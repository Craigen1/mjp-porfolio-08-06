import MotionPage from "./MotionPage";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import React from "react";
import Skills from "./components/Skills";

export default function RootPage() {
  return (
    <main className="overflow-hidden">
      <MotionPage>
        <Home />
      </MotionPage>
      <MotionPage>
        <About />
      </MotionPage>
      <MotionPage>
        <Skills />
      </MotionPage>
      <Footer />
    </main>
  );
}
