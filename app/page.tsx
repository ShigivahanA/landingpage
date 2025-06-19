import { Carousel } from "@/components/Carousel";
import { ContactForm } from "@/components/ContactForm";
import { FeatureSection } from "@/components/FeatureSection";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Navbar } from "@/components/navbar";
import FAQ from "@/components/faq";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Navbar/>

      {/* Page Content */}
      <div className="w-full flex flex-col gap-20">
        <div className="w-full h-screen px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <FeatureSection />
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <Carousel />
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <Location/>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <FAQ/>
        </div>
      </div>


      {/* Footer */}
     <footer className="w-full flex flex-col items-center justify-center border-t text-center text-xs sm:text-sm gap-3 py-10 px-4">
        <p className="font-semibold text-base">Founder & Owner:</p>
        <p className="text-muted-foreground">Mr. Iyyappan</p>
        <p className="text-muted-foreground">Sri Iyyappan Thirumana Mandapam</p>
        <p className="text-muted-foreground">Vannarpettai, Tirunelveli</p>
        <p className="text-muted-foreground">Contact: +91 9994363390</p>
        <div className="mt-4">
          <ThemeSwitcher />
        </div>
      </footer>
      </div>
    </main>
  );
}
