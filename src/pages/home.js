import React, { useEffect } from "react";
import JokerAbout from "../components/home/jokerAbout";
import Topics from "../components/home/topics";
import Projects from "../components/home/projects";

function Home() {
  useEffect(() => {
    document.title = "Home - The Joker Company";
  }, []);
  return (
    <div className="App-home flex justify-between items-center ">
      <main className="w-full text-center">
        <JokerAbout />
          <Projects />
          <Topics />
      </main>
    </div>
  );
}

export default Home;
