import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SmCards from "./components/SmCards";
import Reviews from "./components/Reviews";
import Cta from "./components/Cta";
import Boxes from "./components/Boxes";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Boxes />
        <SmCards />
        <Reviews />
        <Cta />
      </main>
    </>
  );
}
