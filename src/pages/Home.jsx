import Seo from '../components/Seo';
import Hero from './home/Hero';
import SelectedWork from './home/SelectedWork';
import AboutIntro from './home/AboutIntro';
import Spotlight from './home/Spotlight';
import Expertise from './home/Expertise';
import ServicesOverview from './home/ServicesOverview';
import Philosophy from './home/Philosophy';
import GithubAndFeedback from './home/GithubAndFeedback';
import ContactCta from './home/ContactCta';

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <SelectedWork />
      <AboutIntro />
      <Spotlight />
      <Expertise />
      <ServicesOverview />
      <Philosophy />
      <GithubAndFeedback />
      <ContactCta />
    </>
  );
}
