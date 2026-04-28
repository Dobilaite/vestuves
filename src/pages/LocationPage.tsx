import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
function LocationPage() {
  return <>
      <Helmet>
        <title>Vieta ir Laikas - Vestuvės</title>
        <meta name="description" content="Vestuvių ceremonijos ir šventės vietos bei laiko informacija." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Page Header */}
          <section className="py-20 bg-gradient-to-b from-card to-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '-0.02em'
              }}>
                  Vieta ir Laikas
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Visa informacija apie vestuvių ceremoniją ir šventę
                </p>
              </motion.div>
            </div>
          </section>

          {/* Ceremony Details */}
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground" style={{
                  fontFamily: 'Playfair Display, serif'
                }}>
                    Ceremonija
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground mb-1">Laikas</p>
                      <p className="text-card-foreground/80">16:00 val.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground mb-1">Vieta</p>
                      <p className="text-card-foreground/80">
                        Vilniaus šv. Pranciškaus Asyžiečio (Bernardinų) parapija
                      </p>
                      <p className="text-card-foreground/80 mt-2">
                        Maironio g. 10, Vilnius
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Navigation className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground mb-1">Kaip atvykti</p>
                      <p className="text-card-foreground/80">
                        Į ceremoniją galite atvykti automobiliu, tačiau prie bažnyčios yra ribotas automobilių stovėjimo vietų skaičius, todėl rekomenduojame atvykti šiek tiek anksčiau arba, esant galimybei, rinktis alternatyvų atvykimo būdą.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Reception Details */}
          <section className="py-16 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground" style={{
                  fontFamily: 'Playfair Display, serif'
                }}>
                    Šventė
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground mb-1">Laikas</p>
                      <p className="text-card-foreground/80">18:00 val. - 02:00 val.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground mb-1">Vieta</p>
                      <p className="text-card-foreground/80">
                        Restoranas Firenze Vilnius
                      </p>
                      <p className="text-card-foreground/80 mt-2">
                        Paupio g. 16, Vilnius
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-6 mt-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Po ceremonijos kviečiame visus svečius prisijungti prie šventės, kur lauks skanus maistas, gaivūs gėrimai, muzika ir šokiai. Tai bus metas atsipalaiduoti, pabūti kartu ir mėgautis jaukia atmosfera. Praleiskime šią ypatingą dieną drauge!
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  SVARBU!
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Prašome nevėluoti, kad nekeltume papildomo streso nei sau, nei kitiems svečiams. Siekiant, kad ceremonija prasidėtų sklandžiai ir be skubėjimo, kviečiame atvykti šiek tiek anksčiau.

Taip pat rekomenduojame, jei įmanoma, nevykti su nuosavais automobiliais, nes šalia bažnyčios yra ribotas parkavimo vietų skaičius ir gali kilti sunkumų randant, kur prisiparkuoti.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default LocationPage;