import { Hero, Services, Locations, Team } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Locations />
      <Team />
    </div>
  );
}
