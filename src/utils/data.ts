interface Project {
  name: string;
  date: string;
  description: string;
  technologies: string[];
  images: string[];
  NDA?: string;
  link?: string;
}

interface Education {
  name: string;
  date: string;
  description: string;
}

const projects: Project[] = [
  {
    name: 'projects.carrotQuest.name',
    date: '2022 – now',
    description: 'projects.carrotQuest.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next', 'Gatsby'],
    images: [
      'https://res.cloudinary.com/dfeszdhhf/image/upload/t_for portfolio/v1745241609/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-21_%D0%B2_18.17.53_umahio.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745241612/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-21_%D0%B2_18.17.11_juabee.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745129124/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-18_%D0%B2_11_online-video-cutter.com_arstpo.gif',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745134753/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-18_%D0%B2_11_online-video-cutter.com_1_lanxi4.gif',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745241033/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-18_%D0%B2_11_online-video-cutter.com_2_oquan7.gif'
    ],
    NDA: 'The code is under NDA'
  },
  {
    name: 'projects.stellarBurgers.name',
    date: '2024',
    description: 'projects.stellarBurgers.description',
    technologies: ['Javascript', 'Typescript', 'React', 'Redux', 'React hooks', 'react-dnd', 'AJAX', 'Jest', 'react-dom-router', 'web-socket', 'Cypress'],
    images: [
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1744048175/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_22.15.50_x7m58y.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1744048178/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_22.16.37_in3mmn.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1744048178/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_22.17.00_snbcxv.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1744048175/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_22.20.21_cfdz06.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1744048178/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_22.20.48_tbgzri.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1744048178/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_22.19.54_k8vp0n.png',
    ],
    link: "https://github.com/stacy-gol/stellar-burgers"
  },
  {
    name: 'projects.welderCatherine.name',
    date: '2022 – now',
    description: 'projects.welderCatherine.description',
    technologies: ['HTML', 'CSS', 'Bitrix'],
    images: [
      'https://res.cloudinary.com/dfeszdhhf/image/upload/t_for portfolio/v1744050330/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_23.22.08_dampya.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/t_for portfolio/v1744050333/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_23.21.34_nuzlxv.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1744050319/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_23.23.57_hhlfju.png',
    ],
    NDA: "The code is under NDA",
  },
  {
    name: 'projects.heado.name',
    date: '2024 – now',
    description: 'projects.heado.description',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    images: [
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745242549/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-21_%D0%B2_18.34.39_owfu1l.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745242550/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-21_%D0%B2_18.35.18_dqtl9u.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1745242550/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-21_%D0%B2_18.35.29_avlxsn.png'
    ],
    link: 'https://github.com/stacy-gol/heado-emails'
  },
];

const institutions: Education[] = [
  {
    name: 'education.yandex.name',
    date: '2023',
    description: 'education.yandex.description',
  },
  {
    name: 'education.tomas.name',
    date: '2017 - 2018',
    description: 'education.tomas.description',
  },
  {
    name: 'education.urfu.name',
    date: '2014 - 2018',
    description: 'education.urfu.description',
  },
];

export { projects, institutions };
