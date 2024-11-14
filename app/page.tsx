"use client";

import { navItems } from "@/data";
import {
  Approach,
  Clients,
  Experience,
  Footer,
  Grid,
  Hero,
  RecentProjects,
} from "@/components/index";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
const Home = () => {
  return (
    <main className="relative overflow-clip bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
