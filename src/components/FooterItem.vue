<script setup lang="ts">
import type { IFooterItem } from "../types";

defineProps<IFooterItem>();
</script>

<template>
  <div class="flex flex-col justify-center lg:p-4">
    <div class="font-semibold text-xs lg:text-base">{{ label }}</div>
    <a v-if="href" :href="href" class="text-xs md:text-base hover:underline">{{
      value
    }}</a>
    <div v-else class="text-xs md:text-base">{{ value }}</div>
  </div>
</template>
