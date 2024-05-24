import "./style/App.css";
import { Header } from './Components/Header';
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { LookbookPage } from "./pages/LookbookPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { PagesPage } from "./pages/PagesPage";
import { BlogPage } from "./pages/BlogPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/lookbook" element={<LookbookPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pages" element={<PagesPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  )
}

