<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { HeaderPaths } from "../types";

const paths: HeaderPaths[] = [
  { id: 1, to: "/", label: "Home" },
  { id: 2, to: "/about", label: "About" },
  { id: 3, to: "/projects", label: "Projects" },
  { id: 4, to: "/contact", label: "Contact" },
];
</script>

<template>
  <div>
    <nav>
      <RouterLink
        v-for="path in paths"
        :key="path.id"
        :to="path.to"
        :aria-label="path.label"
      >
        {{ path.label }}
      </RouterLink>
    </nav>
  </div>
</template>
