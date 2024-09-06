import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


const Home = () => {
  return (
    <section className = "h-full">
      <div className = "container mx-auto h-full">
        <div className = "flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
          {/* text */}
          <div className = "text-center xl:text-left order-2 xl:order-none">
            <h1 className = "h1 mb-3">
              Hello I'm
              <br />
              <span className = "text-accent">
                Rishab.H
              </span>
            </h1>

            <span className = "text-xl">
              Software Developer
            </span>

            <p className = "max-w-[500px] mt-6 mb-9 text-white/80">
              I'm interested in Java and MERN. I worked on lots of projects.
            </p>

            {/* btn and socials */}
            <div className = "flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant = "outline"
                size = "lg"
                className = "flex items-center gap-2"
              >
                <span>
                  Download Resume
                </span>
                <FiDownload className = "text-xl" />
              </Button>
              
              <div className = "mb-8 xl:mb-0">
                <Socials
                  containerStyles = "flex gap-6"
                  iconStyles = "w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className = "order-1 xl:order-none mb-6 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};


export default Home;
