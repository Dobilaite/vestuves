import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Palette, Check, X } from 'lucide-react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
function DressCodePage() {
  const approvedColors = [{
    name: 'Tamsi miško žalia',
    hex: '#20281D',
    description: 'Gili, žemiška ir natūrali tamsi žalia'
  }, {
    name: 'Alyvuogių žalia',
    hex: '#556B4D',
    description: 'Pilkšvai žalia, rami ir neutrali'
  }, {
    name: 'Šalavijų žalia',
    hex: '#86A879',
    description: 'Švelni, prigesinta gamtos žalia'
  }, {
    name: 'Tamsi plytų raudona',
    hex: '#8C2F0C',
    description: 'Gili, šilta rudai raudona'
  }, {
    name: 'Terakotinė oranžinė',
    hex: '#C5562C',
    description: 'Šilta žemiška oranžinė su rudumu'
  }, {
    name: 'Persikinė oranžinė',
    hex: '#FB8B63',
    description: 'Švelni, šilta persikinė spalva'
  }, {
    name: 'Saulėta oranžinė',
    hex: '#F4A93E',
    description: 'Ryški, šilta oranžinė su geltonumu'
  }, {
    name: 'Auksinė smėlio',
    hex: '#F5BA67',
    description: 'Šilta, švelni auksinė smėlio spalva'
  }, {
    name: 'Šviesi persikinė',
    hex: '#FFCE8B',
    description: 'Labai šviesi, šilta persikinė'
  }, {
    name: 'Vandenyno mėlyna',
    hex: '#2E70A3',
    description: 'Gili, sodri mėlyna spalva'
  }, {
    name: 'Dangaus mėlyna',
    hex: '#66AAE5',
    description: 'Šviesi ir gaivi mėlyna'
  }, {
    name: 'Šviesi žydra',
    hex: '#A9E4FF',
    description: 'Labai šviesi, beveik pastelinė žydra'
  }, {
    name: 'Alyvuogių žalia (šviesi)',
    hex: '#779554',
    description: 'Vidutinė, natūrali žalia'
  }, {
    name: 'Šviesi žalsva',
    hex: '#AEDB7A',
    description: 'Šviesi, gaivi žalia'
  }, {
    name: 'Laimo žalsva',
    hex: '#C9FD8E',
    description: 'Labai šviesi, gelsvai žalia'
  }];
  const avoidColors = [{
    name: 'Ryškios neoninės',
    examples: ['#39FF14', '#fffb00ff', '#00ffc8ff', '#ff00ddff'],
    description: 'Per ryškūs ir vizualiai dominuojantys atspalviai'
  }, {
    name: 'Balta',
    examples: ['#FFFFFF'],
    description: 'Rezervuota nuotakai'
  }, {
    name: 'Panašios į baltas',
    examples: ['#f0faeaff', '#ffefe8ff', '#faf1ddff', '#f0f5fcff'],
    description: 'Rezervuota nuotakai'
  }];
  return <>
      <Helmet>
        <title>Spalvų Paletė - Vestuvės</title>
        <meta name="description" content="Vestuvių spalvų paletė ir aprangos rekomendacijos." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">

          {/* HEADER */}
          <section className="py-20 bg-gradient-to-b from-card to-background">
            <div className="max-w-4xl mx-auto px-4 text-center">
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
                  <Palette className="h-12 w-12 text-primary" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  Spalvų paletė
                </h1>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Kviečiame svečius pasirinkti aprangą iš mūsų vestuvių dienos spalvų paletės
                </p>
              </motion.div>
            </div>
          </section>

          {/* APPROVED */}
          <section className="py-16 bg-background">
            <div className="max-w-6xl mx-auto px-4">

              <div className="flex items-center gap-3 mb-8">
                <Check className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  Rekomenduojamos spalvos
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {approvedColors.map((color, index) => <motion.div key={color.name} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="bg-card rounded-xl p-6 shadow-lg">
                    <div className="w-full h-32 rounded-lg mb-4 border-2 border-border" style={{
                  backgroundColor: color.hex
                }} />
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {color.name}
                    </h3>
                    <p className="text-sm text-card-foreground/70">
                      {color.description}
                    </p>
                  </motion.div>)}
              </div>

            </div>
          </section>

          {/* AVOID COLORS (UPDATED) */}
          <section className="py-16 bg-muted">
            <div className="max-w-4xl mx-auto px-4">

              <div className="flex items-center gap-3 mb-8">
                <X className="h-8 w-8 text-destructive" />
                <h2 className="text-2xl font-semibold" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  Spalvos, kurių vengti
                </h2>
              </div>

              <div className="space-y-4">
                {avoidColors.map((color, index) => <motion.div key={color.name} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="bg-card rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4">

                      {/* multiple color examples */}
                      <div className="flex gap-2">
                        {color.examples.map((hex, i) => <div key={i} className="w-10 h-10 rounded-md border" style={{
                      backgroundColor: hex
                    }} />)}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-1">
                          {color.name}
                        </h3>
                        <p className="text-sm text-card-foreground/70">
                          {color.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>)}
              </div>

            </div>
          </section>

          {/* STYLING TIPS */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4">

              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  Stiliaus patarimai
                </h2>

                <div className="space-y-6">

                  <div>
                    <h3 className="font-semibold mb-2">Moterims</h3>
                    <p className="text-muted-foreground">
                      Lengvos, vasariškos suknelės ar deriniai iš mūsų spalvų paletės – kviečiame rinktis tai, su kuo jaučiatės gražiausiai ir patogiausiai. Galite rinktis vieną spalvą arba subtiliai derinti kelias tarpusavyje, išlaikant bendrą šventės nuotaiką.

Svarbiausia – prašome vengti baltos spalvos ir visų į ją panašių atspalvių (pvz., dramblio kaulo, kreminės, šampaninės ir pan.), kadangi ši spalva skirta nuotakai. Jei kyla abejonių dėl pasirinktos spalvos ar derinio, tikrai drąsiai parašykite nuotakai – ji mielai patars ir padės išsirinkti tinkamiausią variantą.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Vyrams</h3>
                    <p className="text-muted-foreground">
                      Galite rinktis lengvesnius, vasariškus derinius – tiek klasikinį, tiek laisvesnį stilių, svarbiausia komfortas ir lengvumas. Nebūtina įsigyti naujo kostiumo – puikiai tiks ir jau turimi drabužiai, kuriuos galite prisiderinti prie šventės spalvų, pavyzdžiui, pasirinkdami tinkamus marškinius ar aksesuarus. Taip pat pilnas kostiumas nėra būtinas – svarbiausia išlaikyti bendrą stilių ir jaustis gerai. Jei kyla abejonių dėl aprangos, drąsiai kreipkitės – padėsim apsispręsti.
                    </p>
                  </div>

                  <div className="bg-muted p-5 rounded-xl">
                    <p className="text-sm text-muted-foreground">
                      Svarbiausia – rinkitės aprangą, kurioje jaučiatės patogiai ir savimi. Labai prašome vengti baltos spalvos ir į ją panašių atspalvių. Mūsų spalvų paletė yra tik gairė, padėsianti subtiliai prisiderinti ir sukurti bendrą šventės nuotaiką.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>;
}
export default DressCodePage;