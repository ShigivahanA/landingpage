import { Carousel } from "@/components/Carousel";
import { ContactForm } from "@/components/ContactForm";
import { FeatureSection } from "@/components/FeatureSection";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href="/">SITM</Link>
          </div>
        </div>
      </nav>

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
      </div>


      {/* Footer */}
     <footer className="w-full flex flex-col items-center justify-center border-t text-center text-xs sm:text-sm gap-3 py-10 px-4">
        <p className="font-semibold text-base">Founder & Owner:</p>
        <p className="text-muted-foreground">Mr. Iyyappan</p>
        <p className="text-muted-foreground">Sri Iyyappan Thirumana Mandapam</p>
        <p className="text-muted-foreground">Vannarpettai, Tirunelveli</p>
        <p className="text-muted-foreground">Contact: +91 93XXXXXXXX</p>
        <div className="mt-4">
          <ThemeSwitcher />
        </div>
      </footer>
      </div>
    </main>
  );
}
