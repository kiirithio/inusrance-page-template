import Contact from "./Components/Contact/Contact";
import Homefooter from "./Components/Footer/HomeFooter";
import Home from "./Components/Home/Home";
import Pricing from "./Components/Pricing/Pricing";
import Product from "./Components/Product/Product";


function App() {
  return (
    <div className="App">
      <Home/>
      <Homefooter/>
      <Product/>
      <Pricing/>
      <Contact/>
    </div>
  );
}

export default App;
