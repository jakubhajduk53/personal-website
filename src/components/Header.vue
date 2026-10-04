<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { HeaderPaths } from "../types";

const paths: HeaderPaths[] = [
  { id: 1, to: "/", label: "home" },
  { id: 2, to: "/about", label: "about me" },
  { id: 3, to: "/projects", label: "my projects" },
  { id: 4, to: "/contact", label: "contact me" },
];
</script>

<template>
  <div>
    <nav
      class="flex items-center justify-around text-center mx-2 xl:mx-5 xl:w-[30vw] h-24"
    >
      <RouterLink
        v-for="path in paths"
        :key="path.id"
        :to="path.to"
        :aria-label="path.label"
        class="font-semibold lg:text-lg"
        exact-active-class="underline decoration-2  underline-offset-6"
      >
        {{ path.label }}
      </RouterLink>
    </nav>
  </div>
</template>
