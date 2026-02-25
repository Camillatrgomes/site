import lanche from './assets/Burgers.png'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

function Home() {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const navRef = useRef(null);

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
      duration: 2.2,
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

  return () => ctx.revert(); // 
}, []);  
  return (
<>
              <div ref={navRef} className="flex left-12 pt-4 bowlby-one-regular">
                 <p className=' top-6 text-2xl'>BURGER HEAVEN</p>
                    <div className="bowlby-one-regular ml-auto">
                        <a href='#' className="text-white hover:text-[#B3A0CD] p-24">ABOUT</a>
                        <a href='#' className="text-white hover:text-[#B3A0CD] p-24">MENU</a>
                        <button className="bg-[#B3A0CD] hover:bg-[#D1EF53] text-black text-md p-4 duration-300 cursor-pointer bowlby-one-regular"> ORDER ONLINE
                        </button>
                    </div>
                </div> 
                 
<div className='mx-auto flex-col justify-center'>
  <h1 ref={titleRef} className=" text-9xl text-center bowlby-one-regular m-35">NEW YORK’S <br /> FAVORITE ORGANIC HAMBURGER JOINT</h1>
      <img ref={imgRef} src={lanche} alt="Burgers" className='w-full -mt-62 p-20 opacity-100'/>
</div>
</>
        );
}

export default Home;