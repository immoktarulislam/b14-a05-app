import Nav from "./components/Nav";
import './App.css'
import Banner from "./components/Banner";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TechCard from "./components/TechCard";
import StackPanel from "./components/StackPanel";

import technologiesData from "./data/technologies.json";

import type { Technology } from "./types/technology";

import {
  addTechnology,
  removeTechnology,
  removeAllTechnologies,
} from "./utils/stackHandlers";


const technologies: Technology[] = technologiesData;

import Footer from "./components/Footer";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);


  const handleAdd = (technology: Technology) => {

    if (
      stack.some(
        (item) => item.id === technology.id
      )
    ) {
      toast.info(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setStack(
      addTechnology(stack, technology)
    );

    toast.success(
      `${technology.name} added to your stack!`
    );
  };


  const handleRemove = (id: number) => {

    const technology = stack.find(
      (item) => item.id === id
    );

    setStack(
      removeTechnology(stack, id)
    );

    if (technology) {
      toast.error(
        `${technology.name} removed from your stack.`
      );
    }
  };


  const handleRemoveAll = () => {

    setStack(
      removeAllTechnologies()
    );

    toast.warn(
      "All technologies removed."
    );
  };


  return (
    <>
      <Nav />
      <Banner />
      <main className="min-h-screen bg-base-200">

        <div className="max-w-7xl mx-auto px-5 py-12">

          {/* Heading */}
          <header className="mb-10 text-left">

            <h1 className="text-4xl md:text-5xl font-bold">
              Explore the{" "}
              <span className="text-primary">
                Technologies
              </span>
            </h1>

            <p className="text-base-content/60 mt-3">
              Pick one technology per category to build
              your ideal stack.
            </p>

          </header>


          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

            {/* Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

              {technologies.map((technology) => (

                <TechCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAdd}
                  isSelected={stack.some(
                    (item) => item.id === technology.id
                  )}
                />

              ))}

            </section>


            {/* Stack */}
            <aside>

              <StackPanel
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />

            </aside>

          </div>

        </div>


        {/* Toast */}
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="light"
        />

      </main>
      <Footer />
    </>
  )
}

export default App
