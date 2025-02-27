import greenIsland from '/src/assets/portfolios/green-island.png'
import cartoonist from '/src/assets/portfolios/cartoonist.png'
import emotionGallery from '/src/assets/portfolios/emotion-gallery.png'
import netphlix from '/src/assets/portfolios/netphlix.png'
import * as Icon from "../components/icons/Icons";

export const FrontendSkills = [
  Icon.Js, Icon.Ts, Icon.BootStrap, Icon.Jest, Icon.Next, Icon.React, Icon.Vue, Icon.TailwindCss, Icon.ThreeJs
]

export const BackendSkills = [
  Icon.PHP, Icon.Laravel, Icon.Golang, Icon.MySQL, Icon.PostgreSQL, Icon.Redis, Icon.Pest, Icon.Rpc, Icon.JavaSpring, Icon.OpenAI
]

export const DevOpsSkills = [
  Icon.Gitlab, Icon.Grafana, Icon.Elastic, Icon.Supabase, Icon.Render
]

export const OtherSkills = [
  Icon.Git, Icon.Docker, Icon.Kubernetes, Icon.YouTrack
]

export const Projects = [
  {
    title: 'Green Island',
    image: greenIsland,
    description: 'Green Island is a modern real-time chat and video call platform that prioritizes privacy and security. Imagine stepping onto a secluded island where conversations disappear once you leave—just like a peaceful getaway.',
    skills: [
      Icon.Next, Icon.TailwindCss, Icon.PostgreSQL
    ],
    github: 'https://github.com/PhilharmonicHsu/green-island',
    website: 'https://green-island-client.onrender.com'
  },
  {
    title: 'Cartoonist',
    image: cartoonist,
    description: 'A cutting-edge web application that empowers users to unleash their creativity and bring their stories to life in a visually stunning comic format. Designed with a seamless user experience and modern technologies, this platform bridges storytelling and technology to deliver an interactive and intuitive environment for creating, editing, and sharing comics.',
    skills: [
      Icon.React, Icon.Js, Icon.Laravel, Icon.TailwindCss, Icon.PostgreSQL, Icon.Pest
    ],
    github: 'https://github.com/PhilharmonicHsu/cartoonist',
    website: '#'
  },
  {
    title: 'Emotion Gallery',
    image: emotionGallery,
    description: 'Users can upload their own pictures or images in this web application, we will analyze them and then display the analysis results to users so that users can understand the emotions and meanings brought by the pictures.',
    skills: [
      Icon.Laravel, Icon.TailwindCss, Icon.PostgreSQL, Icon.Pest
    ],
    github: 'https://github.com/PhilharmonicHsu/emotion-gallery',
    website: 'https://emotion-gallery-5891731146c3.herokuapp.com/'
  },
  {
    title: 'Netphlix',
    image: netphlix,
    description: 'A sleek and modern web application built with React that allows users to browse, search, and explore movies using the TMDB API. This project incorporates key design patterns, including Builder and Singleton, to enhance scalability and maintainability.',
    skills: [
      Icon.React, Icon.Js
    ],
    github: 'https://github.com/PhilharmonicHsu/netphlix',
    website: '#'
  },
]