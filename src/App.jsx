import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";
import Expertise from "./pages/Expertise";
import FAQAccordion from "./pages/FAQAccordion";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import ReviewSlider from "./pages/ReviewSlider";
import ScrollingIcons from "./pages/ScrollingIcons";
import Works from "./pages/works";

function App() {
  return (
    <>
      <Header />
      <About />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <ReviewSlider />
      <FAQAccordion />
      <ScrollingIcons />
      <Footer />
    </>
  );
}

export default App;
