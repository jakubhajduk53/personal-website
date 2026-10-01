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
    <nav class="flex w-[30vw] items-center justify-around h-24 ml-8">
      <RouterLink
        v-for="path in paths"
        :key="path.id"
        :to="path.to"
        :aria-label="path.label"
        class="font-semibold text-lg"
        exact-active-class="underline decoration-2  underline-offset-6"
      >
        {{ path.label }}
      </RouterLink>
    </nav>
  </div>
</template>
