<script setup lang="ts">
import Slider from "../components/Slider.vue";

import type { Slide } from "../types";

const slides: Slide[] = [
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
</script>

<template>
  <div class="flex flex-col lg:flex-row w-full h-full justify-around">
    <div class="contents lg:flex lg:flex-col lg:justify-center">
      <div
        class="order-1 flex flex-col items-center lg:items-start lg:w-150 text-sm lg:text-base justify-center font-semibold p-2 lg:p-0 gap-1 lg:gap-5"
      >
        <div>
          My websites are built with the
          <span class="text-[rgb(251,139,36)]">Vue.js</span> framework
        </div>
        <div>I follow modern software development best practices</div>
        <div>I write clean, maintainable, and scalable code</div>
      </div>
    </div>
    <div class="flex items-center">
      <Slider :slides="slides" title="My projects" />
    </div>
  </div>
</template>
