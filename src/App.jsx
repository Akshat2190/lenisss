import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();

      let xTransform = gsap.utils.random(-100, 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )
        .to(elem, {
          xPercent: xTransform,
          ease: "Power4easeInOut",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    });
  });

  return (
    <div className="w-screen bg-slate-900">
      <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 14, "--c": 6 }}
        >
          <img src="https://picsum.photos/400/600?random=1" alt="Image 1" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 3, "--c": 2 }}
        >
          <img src="https://picsum.photos/400/600?random=2" alt="Image 2" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 18, "--c": 7 }}
        >
          <img src="https://picsum.photos/400/600?random=3" alt="Image 3" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 7, "--c": 1 }}
        >
          <img src="https://picsum.photos/400/600?random=4" alt="Image 4" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 11, "--c": 4 }}
        >
          <img src="https://picsum.photos/400/600?random=5" alt="Image 5" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 2, "--c": 8 }}
        >
          <img src="https://picsum.photos/400/600?random=6" alt="Image 6" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 16, "--c": 3 }}
        >
          <img src="https://picsum.photos/400/600?random=7" alt="Image 7" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 9, "--c": 5 }}
        >
          <img src="https://picsum.photos/400/600?random=8" alt="Image 8" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 5, "--c": 7 }}
        >
          <img src="https://picsum.photos/400/600?random=9" alt="Image 9" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 20, "--c": 2 }}
        >
          <img src="https://picsum.photos/400/600?random=10" alt="Image 10" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 12, "--c": 6 }}
        >
          <img src="https://picsum.photos/400/600?random=11" alt="Image 11" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 4, "--c": 1 }}
        >
          <img src="https://picsum.photos/400/600?random=12" alt="Image 12" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 15, "--c": 8 }}
        >
          <img src="https://picsum.photos/400/600?random=13" alt="Image 13" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 8, "--c": 4 }}
        >
          <img src="https://picsum.photos/400/600?random=14" alt="Image 14" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 19, "--c": 3 }}
        >
          <img src="https://picsum.photos/400/600?random=15" alt="Image 15" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 6, "--c": 5 }}
        >
          <img src="https://picsum.photos/400/600?random=16" alt="Image 16" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 1, "--c": 7 }}
        >
          <img src="https://picsum.photos/400/600?random=17" alt="Image 17" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 13, "--c": 2 }}
        >
          <img src="https://picsum.photos/400/600?random=18" alt="Image 18" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 10, "--c": 6 }}
        >
          <img src="https://picsum.photos/400/600?random=19" alt="Image 19" />
        </div>
        <div
          className="elem col-span-1 row-span-1"
          style={{ "--r": 17, "--c": 1 }}
        >
          <img src="https://picsum.photos/400/600?random=20" alt="Image 20" />
        </div>
      </div>

      <div className="fixed top-0 text-white left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-8xl uppercase mb-4">
          Thomas Vance
          <sup>®</sup>
        </h1>
        <p className="text-4xl">なぜそんなに真剣なのですか？</p>
      </div>

      <div className="w-full h-screen bg-[#D1D1D1] flex justify-center items-center text-center relative mx-auto py-32 z-[999]">
        <p className="text-3xl w-4/5 text-black leading-[3.2rem] font-medium text-left">
          Thomas Vance is a contemporary clothing brand that blends timeless
          elegance with modern streetwear aesthetics. Each piece is carefully
          curated to reflect individuality and sophistication. From premium
          fabrics to meticulous attention to detail, Thomas Vance creates
          garments that transcend trends and become wardrobe staples for the
          discerning fashion enthusiast®
        </p>
      </div>
    </div>
  );
};

export default App;
