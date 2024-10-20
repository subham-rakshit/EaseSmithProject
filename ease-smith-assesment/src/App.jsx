import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Blog, FAQs, Home, PlantsPots, Services, Story, Tools } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="w-full min-h-full flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<PlantsPots />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/story" element={<Story />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
