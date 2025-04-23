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
    name: 'Carrot quest - TOP-5 Russian Marketing Platform',
    date: '2022 – now',
    description: 'As part of Carrot quest team, I migrated the company website from Gatsby to Next.js to improve performance and unify codebases. I introduced TypeScript, ESLint, reusable UI components, and built interactive features like quizzes, pop-ups, banners, and video widgets.',
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
    name: 'Stellar Burgers online shop (Study project)',
    date: '2024',
    description: 'An online store for hamburgers with an order constructor, authorization, and WEB sockets for the confirmation of the order status is being used as a training project by Yandex courses. The goal of the project was to practice hard-skills and main technologies stack.',
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
    name: 'The Welder Catherine - one of the biggest Coffee Producers in Russia',
    date: '2022 – now',
    description: 'I independently wrote or translated blog texts and built the layout using HTML and CSS directly on the website powered by Bitrix.',
    technologies: ['HTML', 'CSS', 'Bitrix'],
    images: [
      'https://res.cloudinary.com/dfeszdhhf/image/upload/t_for portfolio/v1744050330/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_23.22.08_dampya.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/t_for portfolio/v1744050333/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_23.21.34_nuzlxv.png',
      'https://res.cloudinary.com/dfeszdhhf/image/upload/v1744050319/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-04-07_%D0%B2_23.23.57_hhlfju.png',
    ],
    NDA: "The code is under NDA",
  },
  {
    name: 'HEADO - Digital Assistant for Retail Stores',
    date: '2024 – now',
    description: 'I created responsive HTML emails based on Figma designs with pixel-perfect layout and cross-client compatibility. All templates were tested and optimized for major email clients like Gmail and Mail.ru, ensuring consistent user experience and clear communication.',
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
    name: 'Yandex Practicum',
    date: '2023',
    description: 'React Developer',
  },
  {
    name: 'Tomas Bata University in Zlín',
    date: '2017 - 2018',
    description: 'Exchange programme - English for Business Administration',
  },
  {
    name: 'Ural Federal university',
    date: '2014 - 2018',
    description: 'Bachelor\'s degree - Linguistics',
  },
];

export { projects, institutions };
