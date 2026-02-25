import Home from "./pages/Home";
import Cards from "./pages/Cards";
import SectionFinal from "./pages/SectionFinal";
import Footer from "./pages/Footer";
import ClickSpark from './Components/ClickSpark';

function App() {
  return (
    <div>
<ClickSpark
  sparkColor='#D1EF53'
  sparkSize={12}
  sparkRadius={15}
  sparkCount={6}
  duration={600}
>
   <Home/>
      <Cards/>
      <SectionFinal/>
      <Footer/>
</ClickSpark>

    
     </div>  
     )
}

export default App
