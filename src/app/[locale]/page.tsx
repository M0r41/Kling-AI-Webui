import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import AboutSectionThree from '@/components/About/AboutSectionThree';
import HomeSessionVideo from '@/components/Features/HomeSessionVideo';
// import Blog from '@/components/Blog';
// import Brands from '@/components/Brands';
import ScrollUp from '@/components/Common/ScrollUp';
// import Contact from '@/components/Contact';
// import Features from '@/components/Features';
import Hero from '@/components/Hero';
// import Pricing from '@/components/Pricing';
// import Testimonials from '@/components/Testimonials';
// import Video from '@/components/Video';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Faq from '@/components/Faq';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata.home');

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: './',
    },
  };
}

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      <HomeSessionVideo />
      <div className="text-center my-8">
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          Feature of Kling AI
        </h2>
      </div>
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <Faq />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
