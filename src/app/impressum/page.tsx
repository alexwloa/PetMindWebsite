import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[390px] sm:max-w-2xl px-4 pt-3 md:pt-4 pb-8 text-center">
        <h1 className="mb-6 text-[32px] sm:text-[36px] md:text-[40px] font-bold">Impressum</h1>
        <p className="mb-8 text-base sm:text-lg text-muted-foreground">Legal Disclosure</p>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Angaben gemäß § 5 TMG</h4>
          <p className="text-base sm:text-lg">
            Alexander Wimmer<br />
            Blumenweg 2b<br />
            82041 Oberhaching<br />
            Deutschland
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Kontakt</h4>
          <p className="text-base sm:text-lg">
            E-Mail:{" "}
            <a className="underline" href="mailto:mobilemediaconnects@gmail.com">mobilemediaconnects@gmail.com</a>
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
          <p className="text-base sm:text-lg">
            Alexander Wimmer<br />
            Blumenweg 2b<br />
            82041 Oberhaching<br />
            Deutschland
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">EU-Streitschlichtung</h4>
          <p className="text-base sm:text-lg">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a className="underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            <br /><br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h4>
          <p className="text-base sm:text-lg">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Haftung für Inhalte</h4>
          <p className="text-base sm:text-lg">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Haftung für Links</h4>
          <p className="text-base sm:text-lg">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Urheberrecht</h4>
          <p className="text-base sm:text-lg">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </main>
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </>
  );
}
