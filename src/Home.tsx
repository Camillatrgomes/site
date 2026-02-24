import lanche from './assets/Burgers.png'
import './App.css'
import './main.tsx'
function Home(){
return (
    <> 

              <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="absolute left-6 top-6">
                 <p>Burger Heaven</p>
                </div>
                <div className="flex items-center justify-center gap-8 pt-4">
                              <p>About</p>
            </div>
            <div className="flex items-center justify-center gap-8 pt-4">
                              <p>Menu</p>
            </div>  
                        <button className="bg-[#B3A0CD] text-black text-md rounded shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"> ORDER ONLINE
            </button>
     
    </nav>

    <div className="home-container">
      <img src={lanche} alt="Burgers" className="burger-image" />
    </div>
    </>
  );
}

export default Home()