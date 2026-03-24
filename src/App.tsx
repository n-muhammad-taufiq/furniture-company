import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Journal from './components/Journal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <ProductGrid />
        <AboutSection />
        <Testimonials />
        <Journal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
