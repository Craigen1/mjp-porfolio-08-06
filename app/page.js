import MotionPage from "./MotionPage";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import React from "react";

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
        <About />
      </MotionPage>
      <Footer />
    </main>
  );
}
