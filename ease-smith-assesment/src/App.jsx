import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Blog,
  FAQs,
  Home,
  PlantsPots,
  Services,
  Story,
  Tools,
  ThankYouPage,
} from "./pages";
import { Header, Footer, ScrollToTop } from "./components";

function App() {
  return (
    <div className="w-full min-h-full flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<PlantsPots />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/story" element={<Story />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/thank-you/:productName" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
