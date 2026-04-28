import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Heart } from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vestuvės - Julija ir Rimvydas</title>
        <meta
          name="description"
          content="Prisijunkite prie mūsų vestuvių šventės. Švenčiame meilę Toskanos įkvėptoje aplinkoje."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* HERO WRAPPER */}
        <div className="relative w-full flex flex-col items-center overflow-hidden">
          
          {/* BACKGROUND */}
          <div className="absolute inset-0 -z-10">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/13/17/31/fruit-2310212_1280.jpg"
              alt="background"
              className="w-full h-full object-cover scale-105 blur-md opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/20 via-background/40 to-background/80" />
          </div>

          {/* CONTENT CONTAINER */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

            {/* PHOTO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative z-10 -mb-16 md:-mb-24"
            >
              <div className="w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[480px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-[6px] border-background/90 ring-1 ring-border/40 relative">
                <img
                  src="https://horizons-cdn.hostinger.com/70a48264-2cac-4693-aa70-5a3e2d2a4721/ee0dfbc90e7ec817fd6ffc95053e293d.jpg"
                  alt="Julija ir Rimvydas"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#8a7f6c]/10 mix-blend-overlay pointer-events-none" />
              </div>
            </motion.div>

            {/* CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-20 bg-background/85 backdrop-blur-md px-6 py-10 md:p-14 lg:p-16 rounded-[2.5rem] border border-border/50 shadow-xl max-w-4xl w-full text-center"
            >
              <div className="inline-block mb-6 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                Kviečiame švęsti meilę
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-foreground mb-6 leading-tight">
                Julija <span className="text-primary italic font-normal px-2">&</span> Rimvydas
              </h1>

              <div className="flex items-center justify-center gap-6 mb-8 opacity-80">
                <div className="h-px w-16 bg-primary" />
                <Heart className="h-5 w-5 text-accent fill-accent" />
                <div className="h-px w-16 bg-primary" />
              </div>

              <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
                Kviečiame jus prisijungti prie mūsų vestuvių šventės ir kartu kurti nepamirštamus prisiminimus.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12">
                <div className="flex items-center gap-3 bg-background/50 px-6 py-3 rounded-2xl border border-border/30">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>2026 m. rugpjūčio 14 d.</span>
                </div>

                <div className="flex items-center gap-3 bg-background/50 px-6 py-3 rounded-2xl border border-border/30">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Vilnius, Lietuva</span>
                </div>
              </div>

              <Link to="/rsvp">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-2xl">
                  Patvirtinti dalyvavimą
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* WELCOME */}
        <section className="py-24 bg-card border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Sveiki atvykę į mūsų pasaką
            </h2>
            <p className="text-lg text-card-foreground/80">
              Esame laimingi pakviesti jus į mūsų vestuvių šventę.
            </p>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-24 bg-background border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            
            <div className="bg-card p-10 rounded-3xl border">
              <h3 className="text-2xl font-semibold mb-4">Vieta ir laikas</h3>
              <p className="text-card-foreground/80">
                Ceremonija vyks Bernardinų bažnyčioje...
              </p>
              <Link to="/location">
                <Button variant="outline" className="mt-6">
                  Sužinoti daugiau
                </Button>
              </Link>
            </div>

            <div className="bg-card p-10 rounded-3xl border">
              <h3 className="text-2xl font-semibold mb-4">Spalvų paletė</h3>
              <p className="text-card-foreground/80">
                Kviečiame svečius pasirinkti švelnias spalvas...
              </p>
              <Link to="/dress-code">
                <Button variant="outline" className="mt-6">
                  Peržiūrėti spalvas
                </Button>
              </Link>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;