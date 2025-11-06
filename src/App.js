import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/PageNotFound";
import SearchBox from "./Components/SearchBox";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout>
                <SearchBox />
                <HomePage />
              </Layout>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/help"
          element={
            <Layout>
              <Help />
            </Layout>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
