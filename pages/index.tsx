import Head from 'next/head';
import HeroComponent from '@/components/Home/Hero';
import ServicesComponents from '@/components/Home/Services';
import ContactUsComponent from '@/components/Home/ContactUs';
import TechStackComponent from '@/components/Home/TechStack';
import TestimonialsSection from '@/components/Home/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>1Up Sistemas</title>
        <meta
          name='description'
          content='Tenha ao seu lado uma equipe experiente e dedicada de desenvolvedores que irão resolver as dores da sua empresa.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:image' content='/og_share_image.png' />
      </Head>
      <HeroComponent />
      <TestimonialsSection />
      <ServicesComponents />
      <TechStackComponent />
      <ContactUsComponent />
    </>
  );
}
