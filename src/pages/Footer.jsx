function Footer() {
    return(
        <>
        <section className="flex items-center justify-center mt-48">
        <div className="bg-[#B3A0CD] h-90 w-450 rounded flex items-center justify-center">
        <h1 className="text-2xl bowlby-one-regular text-[#1E1E1E]">Burger Heaven</h1>
        <div className="flex-col items-center justify-start ml-12">
        <p className="text-bold">More</p>
        <a href="">About
</a>
        <a href="">Menu
</a>
        <a href="">Locations
</a>
        <a href="">Privacy</a>
</div>
  <div className="flex-col items-center justify-start ml-12">
        <p className="text-bold">HOURS</p>
        <a href="">Open from</a>
 <a href="">11AM to 11PM</a>
       <a href="">Every days</a>   
    </div> 
    </div>
            </section>
        </>
    );
}
export default Footer;