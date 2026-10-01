<script setup lang="ts">
import type { FooterIconItem } from "../types";

defineProps<FooterIconItem>();
</script>

<template>
  <div class="flex flex-col justify-center p-4">
    <div class="font-semibold">{{ label }}</div>
    <a v-if="href" :href="href" class="hover:underline">{{ value }}</a>
    <div v-else>{{ value }}</div>
  </div>
</template>
