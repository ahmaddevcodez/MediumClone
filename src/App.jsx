import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import HomeHeader from "./Components/HomePages/HomeHeader";

function App() {
  return (
    <>
      <div className="mb-[100px]">
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div className="lg:mt-[0px] mt-[20x]">
        <Footer />
      </div>
    </>
  );
}

export default App;
