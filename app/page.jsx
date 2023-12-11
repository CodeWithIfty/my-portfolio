import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <Portfolio />
      <section></section>
    </main>
  );
}
