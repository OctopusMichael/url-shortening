import Content from "@/components/Content";
import ContentTwo from "@/components/ContentTwo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-heroBg">
        <Navbar />
        <Hero />
      </header>
      <main>
        <Content />
        <ContentTwo />
      </main>

      <Footer />
    </>
  );
}
