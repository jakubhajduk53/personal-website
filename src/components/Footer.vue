<script setup lang="ts">
import FooterIcon from "../components/FooterItem.vue";
import type { FooterIconItem } from "../types";

const items: FooterIconItem[] = [
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
  <div class="flex justify-around h-24 w-[40vw]">
    <template v-for="(item, index) in items" :key="item.label">
      <span v-if="index > 0" class="w-0.5 h-8 self-center bg-gray-400" />
      <FooterIcon v-bind="item" />
    </template>
  </div>
</template>
