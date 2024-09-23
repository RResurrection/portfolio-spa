import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import MyProjects from "@/components/My-Projects/MyProjects";
import Navbar from "@/components/Navbar/Navbar";
import Testimonials from "@/components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="w-full ">
      <div className="max-w-screen-2xl pt-12 mx-auto ">
        <div className="px-4 flex flex-col justify-center items-center gap-6">
          <Navbar />
          <Hero />
          <About />
          <Benefits />
          <MyProjects />
          <Testimonials />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
