import { useState } from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

function Cards(){
    const menu = [
      {
        img: img1,
        label: "salt & Vinegar french fries",
        label2: "order online",
      },

      {
        img: img2,
        label: "crispy chicken sandwich",
        label2: "order online",
      }];

return (
    
<>
<section className="flex items-center justify-center">
    <div className="bg-[#D1EF53] h-66 w-350 rounded flex items-center justify-center">
        <h1 className="text-6xl bowlby-one-regular text-[#1E1E1E]">THE BURGER <br /> ABOVE ALL <br /> BURGERS</h1>
        <div className="flex flex-col items-center justify-start ">
        <p className="text-[#1E1E1E] p-12 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare neque.</p>
        <button className="bg-white text-black border-4 text-md p-4 shadow- duration-300 cursor-pointer bowlby-one-regular"> ABOUT US
        </button>
    </div>
    </div>
</section>

<section className="px-6 py-24">
  <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-20 max-w-7xl mx-auto">
    {menu.map((menu, index) => (
        <div key={index} className="relative shadow-lg">
            <img src={menu.img} alt="" className="w-full object-cover" />
             <div className="bg-[#1E1E1E] h-50 w-130 p-10 bottom-6 left-6 rounded-2xl flex-col items-center absolute">
                <h2 className="text-4xl bowlby-one-regular text-white">{menu.label}</h2>
                <p className="text-[#B3A0CD] text-2xl bowlby-one-regular pt-3">{menu.label2}</p>
            </div>
        </div>
        
    ))}
     </div>
</section>
</>
        );
}

export default Cards;