
import img from '../assets/img3.png';
import img2 from '../assets/img4.png'; 
import ScrollVelocity from "../Components/ScrollVelocity.jsx";

function SectionFinal() {
    return (
        <>
        <section>
        <h1 className=" mb-12  text-[#D1EF53]"><ScrollVelocity
  texts={['the best burger i’ve ever had', 'the best burger i’ve ever had']} 
  velocity={100}
  className="custom-scroll-text"
/></h1>
<img src={img} alt="" className="flex mx-auto relative" />
<div className="flex flex-col items-center justify-center mx-auto text-center">
    <img src={img2} alt="" className='w-full absolute -mt-96' />
  <h1 className="text-7xl mt-12 bowlby-one-regular text-white">
    order online or <br /> come visit us today
  </h1>
  <button className="cursor-pointer mt-8 bg-[#D1EF53] hover:bg-[#B3A0CD] text-black text-md px-8 py-4 bowlby-one-regular">
    GET STARTED
  </button>
</div>
</section>
        </>
        );
}

export default SectionFinal;