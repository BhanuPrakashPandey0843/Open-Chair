import { Hero } from "@/components/open-chair/Herohome";
import { About } from "@/components/open-chair/about";
import { Services } from "@/components/open-chair/our-service";
import { Gallery } from "@/components/open-chair/Gallery";
import { Reviews } from "@/components/open-chair/reviews";
import { CtaBooking } from "@/components/open-chair/cta-booking";
import { Footer } from "@/components/open-chair/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <CtaBooking />
      </main>
      <Footer />
    </div>
  );
}
