import React from "react";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import { Box } from "lucide-react";

function HomePage() {
  return (
    <main className="flex flex-col py-8">
      <div className="space-y-4">
        <Hero />
        {/* <Experience /> */}
      </div>
    </main>
  );
}

export default HomePage;
