
import img from '../assets/img3.png';
import img2 from '../assets/img4.png'; 
import { ScrollVelocity } from "../Components/ScrollVelocity.jsx";

function SectionFinal() {
    return (
        <>
        {/* Texto com scroll */}
        <section className="overflow-hidden">
          <h1 className="mb-8 sm:mb-12 text-[#D1EF53]">
            <ScrollVelocity
              texts={["the best burger i've ever had", "the best burger i've ever had"]} 
              velocity={100}
              className="custom-scroll-text"
            />
          </h1>
          {/* imagem banner */}
          <img src={img} alt="" className="flex sm:mt-20 md:mt-60 mx-auto relative w-4/5 sm:w-3/4 md:w-auto max-w-5xl" />

          <div className="relative flex flex-col items-center justify-center mx-auto text-center px-4 pb-16 sm:pb-24">
          {/* imagem de fundo */}
            <img src={img2} alt="" className="hidden sm:block w-full absolute -mt-40 sm:-mt-64 md:-mt-96 select-none opacity-80"/>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-8 sm:mt-12 bowlby-one-regular text-white relative z-10">
              order online or <br /> come visit us today
            </h1>
            <button className="cursor-pointer mt-6 sm:mt-8 bg-[#D1EF53] hover:bg-[#B3A0CD] text-black text-sm sm:text-md px-8 py-4 bowlby-one-regular relative z-10">
              GET STARTED
            </button>
          </div>
        </section>
        </>
        );
}

export default SectionFinal;