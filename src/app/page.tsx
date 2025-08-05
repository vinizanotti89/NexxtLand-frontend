import SectionBeAMember from "@/components/Sections/SectionBeAMember";
import SectionCertificates from "@/components/Sections/SectionCertificates";
import SectionFAQ from "@/components/Sections/SectionFAQ";
import SectionGetToNow from "@/components/Sections/SectionGetToNow";
import SectionHowToBuy from "@/components/Sections/SectionHowToBuy";
import SectionLand from "@/components/Sections/SectionLand";
import SectionLeads from "@/components/Sections/SectionLeads";
import SectionWhyBuy from "@/components/Sections/SectionWhyBuy";
import SwiperHero from "@/components/Swipers/SwiperHero";
export const fetchCache = 'force-no-store'

export default async function Home() {

  return (
    <main>
      <SwiperHero />
      <SectionLand />
      <SectionWhyBuy />
      <SectionGetToNow />
      <SectionHowToBuy />
      <SectionBeAMember />
      <SectionFAQ />
      <SectionLeads />
      <SectionCertificates />
     {/*  <BoxCookies /> */}
    </main>
  );
}
