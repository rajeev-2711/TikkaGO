import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Order from "@/components/Order";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Order />
      <Reviews />
      <Location />
    </>
  );
}
