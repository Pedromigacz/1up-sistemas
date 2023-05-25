import { Swiper, SwiperSlide } from 'swiper/react';
import TechItem from './TechItem';

import 'swiper/css';
import 'swiper/css/autoplay';
import styled from 'styled-components';
import { Autoplay } from 'swiper';

import Dotnet from '@/public/images/tech-stack/dotnet.png';
// import NetflixIcon from '../../Icons/TechStack/companies/Netflix';
// import NodeIcon from '../../Icons/TechStack/Node';

import SqlServer from '@/public/images/tech-stack/sql-server.png';
// import AirbnbIcon from '../../Icons/TechStack/companies/Airbnb';
// import ZoomIcon from '../../Icons/TechStack/companies/Zoom';

import Flutter from '@/public/images/tech-stack/flutter.png';
// import NasaIcon from '../../Icons/TechStack/companies/Nasa';
// import RobinhoodIcon from '../../Icons/TechStack/companies/Robinhood';

import Python from '@/public/images/tech-stack/python.png';
// import TypeformIcon from '../../Icons/TechStack/companies/Typeform';
// import NotionIcon from '../../Icons/TechStack/companies/Notion';

import Docker from '@/public/images/tech-stack/docker.png';
// import NetlifyIcon from '../../Icons/TechStack/companies/Netlify';
// import NikeIcon from '../../Icons/TechStack/companies/Nike';

import Kubernetes from '@/public/images/tech-stack/kubernetes.png';
// import NetlifyIcon from '../../Icons/TechStack/companies/Netlify';
// import NikeIcon from '../../Icons/TechStack/companies/Nike';

import Aws from '@/public/images/tech-stack/aws.png';
// import NetlifyIcon from '../../Icons/TechStack/companies/Netlify';
// import NikeIcon from '../../Icons/TechStack/companies/Nike';

const TechStackList = [
  {
    title: 'Dotnet',
    paragraph:
      'Construa aplicativos escaláveis e seguros com Dotnet. Uma plataforma de desenvolvimento flexível e poderosa para projetos de todos os tamanhos.',
    icon: Dotnet,
    socialProof: [<></>, <></>],
  },
  {
    title: 'SQL Server',
    paragraph:
      'Gerencie seus dados com segurança e escalabilidade usando o SQL Server. Uma solução confiável e robusta para empresas de todos os tamanhos.',
    icon: SqlServer,
    socialProof: [<></>, <></>],
  },
  {
    title: 'Flutter',
    paragraph:
      'Crie apps para Android, iOS e web com Flutter, a plataforma multiplataforma.',
    icon: Flutter,
    socialProof: [<></>, <></>],
  },
  {
    title: 'Python',
    paragraph:
      'Desenvolva soluções rápidas com Python, popular para ciência de dados e desenvolvimento web.',
    icon: Python,
    socialProof: [<></>, <></>],
  },
  {
    title: 'Docker',
    paragraph:
      'Simplifique o gerenciamento de aplicativos com Docker. Crie, implante e execute aplicativos em qualquer lugar com facilidade.',
    icon: Docker,
    socialProof: [<></>, <></>],
  },
  {
    title: 'Kubernetes',
    paragraph:
      'Automatize a gestão de aplicativos em nuvem com Kubernetes, orquestrador de contêineres.',
    icon: Kubernetes,
    socialProof: [<></>, <></>],
  },
  {
    title: 'AWS',
    paragraph:
      'Expanda seus negócios com AWS. Serviços de computação em nuvem confiáveis por milhões de clientes.',
    icon: Aws,
    socialProof: [<></>, <></>],
  },
];

const TechStackSliderComponent = (): JSX.Element => {
  return (
    <CustomSwiper
      spaceBetween={20}
      slidesPerView={'auto'}
      loop
      autoplay={{
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
    >
      {[...TechStackList, ...TechStackList].map((tech, key) => (
        <CustomSwiperSlide key={`tech_${tech.title + key}`}>
          <TechItem
            title={tech.title}
            paragraph={tech.paragraph}
            Icon={tech.icon}
            // socialProof={tech.socialProof}
          />
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

const CustomSwiper = styled(Swiper)`
  h3 {
    color: var(--accent-blue);
  }
  div:nth-child(2n) {
    h3 {
      color: var(--accent-cyan);
    }
  }
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
