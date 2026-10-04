<script setup lang="ts">
import Slider from "../components/Slider.vue";

import type { Slide } from "../types";

const slides: Slide[] = [
  {
    id: 1,
    src: new URL("../assets/projects/quiz.jpg", import.meta.url).href,
    caption: "Trivia Quiz",
    description: "Answer 10 various trivia questions",
  },
  {
    id: 2,
    src: new URL("../assets/projects/myui.jpg", import.meta.url).href,
    caption: "UI Library",
    description: "Build interfaces faster with custom-styled UI components",
  },
  {
    id: 3,
    src: new URL("../assets/projects/monocolor.jpg", import.meta.url).href,
    caption: "Discover modern HSL palette usage",
    description: "Build interfaces faster with custom-styled UI components",
  },
  {
    id: 4,
    src: new URL("../assets/projects/weather.jpg", import.meta.url).href,
    caption: "Weather Forecast",
    description: "Check the weather at any location",
  },
];
</script>

<template>
  <div class="flex w-full h-full justify-center pl-24">
    <div class="flex flex-col justify-center w-1/2 font-semibold gap-2">
      <div>
        My websites are built with the
        <span class="text-[rgb(251,139,36)]">Vue.js</span> framework
      </div>
      <div>I follow modern software development best practices</div>
      <div>I write clean, maintainable, and scalable code</div>
    </div>
    <div class="flex items-center w-full">
      <Slider :slides="slides" title="My projects" />
    </div>
  </div>
</template>
