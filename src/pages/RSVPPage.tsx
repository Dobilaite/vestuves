import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import RSVPForm from '../components/RSVPForm.tsx';
function RSVPPage() {
  return <>
      <Helmet>
        <title>RSVP - Vestuvės</title>
        <meta name="description" content="Patvirtinkite savo dalyvavimą vestuvių šventėje." />
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
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Heart className="h-12 w-12 text-primary fill-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '-0.02em'
              }}>
                  Patvirtinkite dalyvavimą
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Būtume labai laimingi, jei galėtumėte prisijungti prie mūsų šventės. 
                  Prašome užpildyti formą žemiau.
                </p>
              </motion.div>
            </div>
          </section>

          {/* RSVP Form Section */}
          <section className="py-16 bg-background">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <RSVPForm />
              </motion.div>
            </div>
          </section>

          {/* Additional Info */}
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
              duration: 0.6
            }} className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  Svarbi informacija
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                  Prašome patvirtinti savo dalyvavimą iki 2026-07-01. Jei turite klausimų ar specialių pageidavimų, prašome nurodyti juos formoje arba susisiekti su mumis tiesiogiai.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default RSVPPage;