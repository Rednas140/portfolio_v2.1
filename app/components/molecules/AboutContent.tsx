import Heading from "../atoms/Heading";

export default function AboutContent() {
  return (
    <div className="max-w-2xl flex flex-col gap-4 md:gap-6">
      <Heading as="h2">Iets over mij</Heading>
      <p>Hoi, ik ben Sander Verhoeven.</p>
      <p>
        Ik streef ernaar om websites te maken die inclusief zijn voor iedereen,
        ongeacht hun vaardigheden of de manier waarop ze zich identificeren.
        Mijn overtuiging is dat iedereen zou moeten streven naar een inclusief
        internet, niet omdat het hen wordt opgelegd, maar omdat het een
        waardevol doel is om na te streven.
      </p>
      <p>
        Het bouwen van websites is een passie van mij die zich uitstrekt tot
        zowel de ontwerpkanten als de developmentkanten. Met behulp van deze
        interesses probeer ik websites te bouwen die leuk en intuïtief zijn voor
        bezoekers om te gebruiken.
      </p>
      <p>
        Dank je wel dat je de tijd hebt genomen om mijn portfolio te bezoeken en
        mijn werk tot nu toe te verkennen!
      </p>
    </div>
  );
}
