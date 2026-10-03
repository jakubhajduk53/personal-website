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
        I'm 23 years old part-time student who looks for
        <span class="text-[rgb(251,139,36)]">new opportunities</span>
      </div>
      <div>
        I currently <span class="text-[rgb(251,139,36)]">work</span> in FAKRO,
        creating windows by using advanced machines
      </div>
      <div>
        I'm a programmer by
        <span class="text-[rgb(251,139,36)]">profession</span>, currently
        exploring new fields
      </div>
      <div>
        My <span class="text-[rgb(251,139,36)]">hobby</span> is chess, and I
        play online almost every day
      </div>
      <div>
        My biggest <span class="text-[rgb(251,139,36)]">dream</span> is to
        travel the world
      </div>
    </div>
    <div class="flex items-center w-full">
      <Slider :slides="slides" title="My projects" />
    </div>
  </div>
</template>
