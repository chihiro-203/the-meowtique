import Image from "next/image";
import Hero from "./components/Hero";
import Sales from "./components/Sales";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pn-8 lg:pb-12">
      <Hero />
      <Sales />
    </div>
  );
}
