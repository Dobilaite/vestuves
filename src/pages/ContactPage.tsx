import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

function ContactPage() {
  const contacts = [
    {
      name: 'Jaunikis',
      phone: '+370 676 33472',
      instagram: 'https://www.instagram.com/rimvulis/',
      messenger: 'https://www.facebook.com/Rimvulis',
      icon: Phone
    },
    {
      name: 'Nuotaka',
      phone: '+370 626 46602',
      instagram: 'https://www.instagram.com/dobilait/',
      messenger: 'https://www.facebook.com/julytea1109',
      icon: Phone
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kontaktai - Vestuvės</title>
        <meta name="description" content="Susisiekite su mumis dėl vestuvių informacijos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Page Header */}
          <section className="py-20 bg-gradient-to-b from-card to-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <MessageCircle className="h-12 w-12 text-primary" />
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                  style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}
                >
                  Kontaktai
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Turite klausimų? Susisiekite su mumis bet kuriuo metu
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-lg"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>

                      <h2
                        className="text-2xl font-semibold text-card-foreground"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {contact.name}
                      </h2>
                    </div>

                    {/* Contact details */}
                    <div className="space-y-4">
                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-card-foreground/70 mb-1">
                            Telefonas
                          </p>
                          <a
                            href={`tel:${contact.phone.replace(/\s/g, '')}`}
                            className="text-card-foreground hover:text-primary transition-colors"
                          >
                            {contact.phone}
                          </a>
                        </div>
                      </div>

                      {/* Instagram */}
                      <div className="flex items-start gap-3">
                        <Instagram className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-card-foreground/70 mb-1">
                            Instagram
                          </p>
                          <a
                            href={contact.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-card-foreground hover:text-primary transition-colors"
                          >
                            Peržiūrėti profilį
                          </a>
                        </div>
                      </div>

                      {/* Messenger */}
                      <div className="flex items-start gap-3">
                        <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-card-foreground/70 mb-1">
                            Messenger
                          </p>
                          <a
                            href={contact.messenger}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-card-foreground hover:text-primary transition-colors"
                          >
                            Parašyti žinutę
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="py-16 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-lg text-center"
              >
                <h3
                  className="text-2xl md:text-3xl font-semibold text-card-foreground mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Laukiame jūsų žinučių
                </h3>

                <p className="text-card-foreground/80 leading-relaxed max-w-2xl mx-auto">
                  Nesidrovėkite susisiekti su mumis dėl bet kokių klausimų apie vestuvių dieną,
                  vietą, aprangą ar bet kokią kitą informaciją. Mielai atsakysime į visus jūsų
                  klausimus ir padėsime pasiruošti šiai ypatingai dienai.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;