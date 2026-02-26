import lanche from "../assets/Burgers.png";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import BlurText from "../Components/BlurText";

function Home() {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 2,
        delay: 0.2,
        ease: "power4.out",
      });

      gsap.from(imgRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.4,
        delay: 0.4,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className="flex items-center pt-4 px-4 bowlby-one-regular relative z-20"
      >
        <p className="text-xl sm:text-2xl">BURGER HEAVEN</p>

        {/* Desktop menu */}
        <nav className="hidden sm:flex ml-auto items-center">
          <a href="#" className="px-6 hover:text-[#B3A0CD]">
            ABOUT
          </a>
          <a href="#" className="px-6 hover:text-[#B3A0CD]">
            MENU
          </a>
          <button className="bg-[#B3A0CD] hover:bg-[#D1EF53] text-black text-sm px-5 py-3 duration-300">
            ORDER ONLINE
          </button>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="sm:hidden ml-auto flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-0.5 bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </header>

      {/* MENU MOBILE OVERLAY */}
      {menuOpen && (
        <div className="
          fixed inset-0
          z-[1000]
          bg-[#1E1E1E]/80
          backdrop-blur-md
          flex flex-col
          items-center
          justify-center
          gap-12
          bowlby-one-regular
        ">
          <p className="text-2xl mb-6">BURGER HEAVEN</p>

          <a
            href="#"
            className="text-xl hover:text-[#B3A0CD]"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </a>

          <a
            href="#"
            className="text-xl hover:text-[#B3A0CD]"
            onClick={() => setMenuOpen(false)}
          >
            MENU
          </a>

          <button
            className="bg-[#B3A0CD] hover:bg-[#D1EF53] text-black text-sm px-8 py-4 duration-300"
            onClick={() => setMenuOpen(false)}
          >
            ORDER ONLINE
          </button>
        </div>
      )}

      {/* Banner */}
      <main className="mx-auto flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-center mt-10 sm:mt-16 md:mt-20 px-4"
        >
          <BlurText
            text="NEW YORK'S FAVORITE ORGANIC HAMBURGER JOINT"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-white bowlby-one-regular"
            delay={120}
            animateBy="words"
            direction="top"
          />
        </h1>

        <img
          ref={imgRef}
          src={lanche}
          alt="Burgers"
          className="w-full mt-6 sm:-mt-20 md:-mt-40 px-4 sm:px-10 md:px-16 lg:px-20"
        />
      </main>
    </>
  );
}

export default Home;