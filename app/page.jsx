import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/contact/Contact";
import Cursor from "@/components/cursor/Cursor";

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
      <section id="contact">{/* <Contact /> */}</section>
    </main>
  );
}
