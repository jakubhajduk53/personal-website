import type { Slide } from "../types";

export const aboutSlides: Slide[] = [
  {
    id: 1,
    src: new URL("../assets/aboutPhotos/santiago-bernabeu.jpg", import.meta.url)
      .href,
    caption: "Santiago Bernabeu, Madrid",
    description: "One more bucket list item checked off",
  },
  {
    id: 2,
    src: new URL("../assets/aboutPhotos/malaga.jpg", import.meta.url).href,
    caption: "Puente del Carmen, Malaga",
    description: "Endless memories",
  },
  {
    id: 3,
    src: new URL("../assets/aboutPhotos/gibraltar-monkey.jpg", import.meta.url)
      .href,
    caption: "Me with Gibraltar macauqe",
    description: "the only wild monkey species found in Europe",
  },
  {
    id: 4,
    src: new URL("../assets/aboutPhotos/sunset-side.jpg", import.meta.url).href,
    caption: "Sunset in Mediterranean coast, Side",
    description: "30°C water + burning sand",
  },
  {
    id: 5,
    src: new URL("../assets/aboutPhotos/gibraltar-phone.jpg", import.meta.url)
      .href,
    caption: "Red telephone box, Gibraltar",
    description: "A classic British icon",
  },
  {
    id: 6,
    src: new URL("../assets/aboutPhotos/alanya.jpg", import.meta.url).href,
    caption: "Alanya from above",
    description: "Stunning views, endless blue",
  },
];

export const projectsSlides: Slide[] = [
  {
    id: 1,
    src: new URL("../assets/projects/quiz.jpg", import.meta.url).href,
    caption: "Trivia Quiz",
    description: "Answer 10 various trivia questions",
    href: "https://quiz-2025.vercel.app/",
  },
  {
    id: 2,
    src: new URL("../assets/projects/myui.jpg", import.meta.url).href,
    caption: "UI Library",
    description: "Build interfaces faster with custom-styled UI components",
    href: "https://my-ui-jakubhajduk53s-projects.vercel.app/",
  },
  {
    id: 3,
    src: new URL("../assets/projects/monocolor.jpg", import.meta.url).href,
    caption: "Discover modern HSL palette usage",
    description: "Build interfaces faster with custom-styled UI components",
    href: "https://monocolor-landing-page.vercel.app/",
  },
  {
    id: 4,
    src: new URL("../assets/projects/weather.jpg", import.meta.url).href,
    caption: "Weather Forecast",
    description: "Check the weather at any location",
    href: "https://weather-app-jakubhajduk53s-projects.vercel.app/",
  },
];

export function preloadSlides() {
  aboutSlides.forEach((s) => {
    const img = new Image();
    img.src = s.src;
  });
  projectsSlides.forEach((s) => {
    const img = new Image();
    img.src = s.src;
  });
}
