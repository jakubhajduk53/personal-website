<script setup lang="ts">
import FooterItem from "../components/FooterItem.vue";
import type { IFooterItem } from "../types";

const items: IFooterItem[] = [
  {
    label: "Email",
    value: "jakubhajduk53@gmail.com",
    href: "mailto:jakubhajduk53@gmail.com",
  },
  { label: "Phone", value: "+48 509 778 233", href: "tel:+48509778233" },
  { label: "Location", value: "Limanowa, Poland" },
];
</script>

<template>
  <div class="flex flex-col md:flex-row justify-around p-2 lg:h-24 lg:w-[50vw]">
    <template v-for="(item, index) in items" :key="item.label">
      <span
        v-if="index > 0"
        class="w-0.5 h-8 hidden md:block self-center bg-gray-400"
      />
      <FooterItem v-bind="item" />
    </template>
  </div>
</template>
