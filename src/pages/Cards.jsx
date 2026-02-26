
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

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
        {/* Card único */}
<section className="flex items-center justify-center px-4 py-6">
    <div className="bg-[#D1EF53] w-full max-w-6xl rounded flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 py-10 px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl bowlby-one-regular text-[#1E1E1E] text-center sm:text-left">
          THE BURGER <br /> ABOVE ALL <br /> BURGERS
        </h1>
        <div className="flex flex-col items-center sm:items-start justify-start sm:pl-12">
          <p className="text-[#1E1E1E] text-lg sm:text-2xl text-center sm:text-left max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare neque.
          </p>
          <button className="mt-4 bg-white hover:bg-[#e1e0e4] text-black border-4 text-md px-6 py-3 duration-300 cursor-pointer bowlby-one-regular">
            ABOUT US
          </button>
        </div>
    </div>
</section>
        {/* Cards de Produtos */}
<section className="px-4 sm:px-6 py-12 sm:py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20 max-w-7xl mx-auto">
    {menu.map((item, index) => (
        <div key={index} className="relative shadow-lg">
            <img src={item.img} alt="" className="w-full object-cover rounded-lg" />
            <div className="bg-[#1E1E1E] sm:p-8 mt-6 sm:mt-0 sm:absolute sm:right-6 sm:left-1 sm:bottom-4 sm:rounded-2xl rounded-xl sm:w-auto w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl bowlby-one-regular text-white">{item.label}</h2>
                <a href="#" className="text-[#B3A0CD] text-xl sm:text-2xl bowlby-one-regular pt-3 block">{item.label2}</a>
            </div>
        </div>
        
    ))}
     </div>
</section>
</>
        );
}

export default Cards;