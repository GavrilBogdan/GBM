import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SmCards from "./components/SmCards";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SmCards />
      </main>
    </>
  );
}
