import React from 'react';
import { Heart } from 'lucide-react';
function Footer() {
  return <footer className="bg-card text-card-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{
            fontFamily: 'Playfair Display, serif'
          }}>
              Vestuvių detalės
            </h3>
            <p className="text-sm leading-relaxed text-card-foreground/80">
              Kviečiame jus būti šios ypatingos dienos dalimi, kai kartu švęsime meilę, artumą ir naują mūsų gyvenimo etapą.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{
            fontFamily: 'Playfair Display, serif'
          }}>
              Svarbi informacija
            </h3>
            <p className="text-sm leading-relaxed text-card-foreground/80">
              Prašome patvirtinti savo dalyvavimą iki 2026-07-01, kad galėtume tinkamai pasirūpinti visomis šventės detalėmis. Jei turite klausimų ar reikalinga papildoma informacija, drąsiai susisiekite su mumis – mielai padėsime. Labai laukiame jūsų šią ypatingą dieną ir tikimės kartu sukurti nepamirštamus prisiminimus!
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-card-foreground/70">
              © {new Date().getFullYear()} Vestuvės. Sukurta su meile.
            </p>
            <div className="flex items-center gap-2 text-sm text-card-foreground/70">
              <span>Pagaminta su</span>
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span>jaunavedžių</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;