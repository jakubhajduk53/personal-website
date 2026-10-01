<script setup lang="ts">
import { computed } from "vue";
import type { IconLink } from "../types";

const props = defineProps<IconLink>();

const src = computed(
  () => new URL(`../assets/${props.name}.svg`, import.meta.url).href,
);
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" :aria-label="label">
    <img :src="src" :alt="`${name} logo`" />
  </a>
</template>
