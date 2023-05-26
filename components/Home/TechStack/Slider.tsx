import { Swiper, SwiperSlide } from 'swiper/react';
import TechItem from './TechItem';

import 'swiper/css';
import 'swiper/css/autoplay';
import styled from 'styled-components';
import { Autoplay } from 'swiper';

import CarouselArrow from '@/components/shared/icons/carouselArrow';

import Dotnet from '@/public/images/tech-stack/dotnet.png';
import IntelIcon from '@/public/images/platforms/intel.svg';
import MicrosoftIcon from '@/public/images/platforms/microsoft.svg';

import SqlServer from '@/public/images/tech-stack/sql-server.png';
import DellIcon from '@/public/images/platforms/dell.svg';
import SiemensIcon from '@/public/images/platforms/siemens.svg';

import Flutter from '@/public/images/tech-stack/flutter.png';
import GoogleIcon from '@/public/images/platforms/google.svg';
import BmwIcon from '@/public/images/platforms/bmw.svg';

import Python from '@/public/images/tech-stack/python.png';
import FacebookIcon from '@/public/images/platforms/facebook.svg';
import InstagramIcon from '@/public/images/platforms/instagram.svg';

import Docker from '@/public/images/tech-stack/docker.png';
import UberIcon from '@/public/images/platforms/uber.svg';
import NetflixIcon from '@/public/images/platforms/netflix.svg';

import Kubernetes from '@/public/images/tech-stack/kubernetes.png';
import AirbnbIcon from '@/public/images/platforms/airbnb.svg';
import SpotifyIcon from '@/public/images/platforms/spotify.svg';

import Aws from '@/public/images/tech-stack/aws.png';
import AmazonIcon from '@/public/images/platforms/amazon.svg';
import NasaIcon from '@/public/images/platforms/nasa.svg';
import { useRef } from 'react';

const TechStackList = [
  {
    title: 'Dotnet',
    paragraph:
      'Construa aplicativos escaláveis e seguros com Dotnet. Uma plataforma de desenvolvimento flexível e poderosa para projetos de todos os tamanhos.',
    icon: Dotnet,
    socialProof: [IntelIcon, MicrosoftIcon],
  },
  {
    title: 'SQL Server',
    paragraph:
      'Gerencie seus dados com segurança e escalabilidade usando o SQL Server. Uma solução confiável e robusta para empresas de todos os tamanhos.',
    icon: SqlServer,
    socialProof: [DellIcon, SiemensIcon],
  },
  {
    title: 'Flutter',
    paragraph:
      'Crie apps para Android, iOS e web com Flutter, a plataforma multiplataforma.',
    icon: Flutter,
    socialProof: [GoogleIcon, BmwIcon],
  },
  {
    title: 'Python',
    paragraph:
      'Desenvolva soluções rápidas com Python, popular para ciência de dados e desenvolvimento web.',
    icon: Python,
    socialProof: [FacebookIcon, InstagramIcon],
  },
  {
    title: 'Docker',
    paragraph:
      'Simplifique o gerenciamento de aplicativos com Docker. Crie, implante e execute aplicativos em qualquer lugar com facilidade.',
    icon: Docker,
    socialProof: [UberIcon, NetflixIcon],
  },
  {
    title: 'Kubernetes',
    paragraph:
      'Automatize a gestão de aplicativos em nuvem com Kubernetes, orquestrador de contêineres.',
    icon: Kubernetes,
    socialProof: [AirbnbIcon, SpotifyIcon],
  },
  {
    title: 'AWS',
    paragraph:
      'Expanda seus negócios com AWS. Serviços de computação em nuvem confiáveis por milhões de clientes.',
    icon: Aws,
    socialProof: [AmazonIcon, NasaIcon],
  },
];

const TechStackSliderComponent = (): JSX.Element => {
  const swiperRef = useRef();

  return (
    <Container>
      <CarouselButton
        $rotate
        onClick={() => {
          // @ts-ignore
          swiperRef.current.slidePrev();
        }}
      >
        <CarouselArrow />
      </CarouselButton>
      <CustomSwiper
        spaceBetween={20}
        slidesPerView={'auto'}
        loop
        autoplay={{
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          // @ts-ignore
          swiperRef.current = swiper;
        }}
      >
        {[...TechStackList, ...TechStackList].map((tech, key) => (
          <CustomSwiperSlide key={`tech_${tech.title + key}`}>
            <TechItem
              title={tech.title}
              paragraph={tech.paragraph}
              Icon={tech.icon}
              socialProof={tech.socialProof}
              cyan={key % 2 == 0}
            />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
      <CarouselButton
        onClick={() => {
          // @ts-ignore
          swiperRef.current.slideNext();
        }}
      >
        <CarouselArrow />
      </CarouselButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

interface CarouselButtonProps {
  $rotate?: boolean;
}

const CarouselButton = styled.button<CarouselButtonProps>`
  min-width: 70px;
  height: 70px;
  background-color: var(--background-main);
  border: 1px solid var(--accent-cyan);
  display: grid;
  place-items: center;
  border-radius: 100%;
  position: relative;
  padding-left: 4px;
  /* right: ${(props) => (props.$rotate ? '90px' : '-90px')}; */
  margin-right: ${(props) => (props.$rotate ? '20px' : '0')};
  margin-left: ${(props) => (props.$rotate ? '0' : '20px')};

  transform: ${(props) => (props.$rotate ? 'rotate(180deg)' : 'none')};
`;

const CustomSwiper = styled(Swiper)`
  overflow: hidden;
  width: 100%;
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  max-width: 280px;
  height: 480px;
  cursor: pointer;

  @media (max-width: 400px) {
    width: calc(100% - 32px);
  }
`;

export default TechStackSliderComponent;
