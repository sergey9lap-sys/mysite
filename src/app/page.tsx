import {Atmosphere} from "@/components/Atmosphere";
import {ClientMotion} from "@/components/ClientMotion";
import {About} from "@/components/sections/About";
import {Approach} from "@/components/sections/Approach";
import {FinalCta} from "@/components/sections/FinalCta";
import {Footer} from "@/components/sections/Footer";
import {Header} from "@/components/sections/Header";
import {Hero} from "@/components/sections/Hero";
import {Intro} from "@/components/sections/Intro";
import {Projects} from "@/components/sections/Projects";
import {Services} from "@/components/sections/Services";
import {WowMoment} from "@/components/sections/WowMoment";

export default function Home() {
  return (
    <>
      <Atmosphere />
      <ClientMotion />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Intro />
        <WowMoment />
        <Projects />
        <Services />
        <Approach />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
