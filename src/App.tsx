import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ScrollToTop from "./components/Common/ScrollToTop";
import PageTransition from "./components/Common/PageTransition";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import MissionVision from "./components/Pages/MissionVision";
import Services from "./components/Pages/Services";
import PreviousWorks from "./components/Pages/PreviousWorks";
import Contact from "./components/Pages/Contact";
import Products from "./components/Pages/Products";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/mission-vision"
              element={
                <PageTransition>
                  <MissionVision />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/previous-works"
              element={
                <PageTransition>
                  <PreviousWorks />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/products"
              element={
                <PageTransition>
                  <Products />
                </PageTransition>
              }
            ></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
