import "./App.scss";
import Navigation from "./Components/Navigation";
import Onboarding from "./Components/Onboarding";
import Hero from "./Components/Hero";
import Market from "./Components/Market";
import Message from "./Components/Message";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Onboarding />
      <Hero />
      <Market />
      <Message />
      <Footer />
    </div>
  );
};

export default App;
