"use client"
import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Featured";
import { How } from "@/components/How";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function checkFlexGap() {
      var flex = document.createElement("div");
      flex.style.display = "flex";
      flex.style.flexDirection = "column";
      flex.style.rowGap = "1px";

      flex.appendChild(document.createElement("div"));
      flex.appendChild(document.createElement("div"));

      document.body.appendChild(flex);
      var isSupported = flex.scrollHeight === 1;
      flex.parentNode.removeChild(flex);
      console.log(isSupported);

      if (!isSupported) document.body.classList.add("no-flexbox-gap");
    }

    checkFlexGap();
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Featured />
      <How />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
