function Footer() {
  return (
    <footer className="mt-48 px-6">
      <div className="bg-[#B3A0CD] rounded-3xl max-w-7xl mx-auto px-12 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          {/* Logo / Nome */}
          <h1 className="text-3xl bowlby-one-regular text-[#1E1E1E]">
            Burger Heaven
          </h1>

          {/* Links */}
          <div className="flex gap-16">

            <div className="flex flex-col gap-2 text-[#1E1E1E]">
              <p className="font-bold ">More</p>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Menu</a>
              <a href="#" className="hover:underline">Locations</a>
              <a href="#" className="hover:underline">Privacy</a>
            </div>

            <div className="flex flex-col gap-2 text-[#1E1E1E]">
              <p className="font-bold">Hours</p>
              <span>Open from</span>
              <span>11AM to 11PM</span>
              <span>Every day</span>
            </div>

          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-12 border-t border-[#1E1E1E]/20 pt-6 text-center text-sm text-[#1E1E1E]">
          © {new Date().getFullYear()} Burger Heaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;