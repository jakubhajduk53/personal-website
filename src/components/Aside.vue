<script setup lang="ts">
import Icon from "./Icon.vue";
import type { IconLink } from "../types/";

const links: IconLink[] = [
  { name: "github", href: "https://github.com/jakubhajduk53", label: "GitHub" },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/jakubhajduk53",
    label: "LinkedIn",
  },
  {
    name: "lichess",
    href: "https://lichess.org/@/jakubhajduk",
    label: "Lichess",
  },
  {
    name: "chesscom",
    href: "https://www.chess.com/member/jakubhajduk",
    label: "ChessCom",
  },
];
</script>

<template>
  <div
    class="flex flex-col justify-between h-screen border-r border-gray-200 min-w-[5vw] w-30"
  >
    <div class="flex items-center justify-center text-2xl h-24">
      <span>j</span><span class="text-[rgb(251,139,36)]">hajduk</span>
    </div>
    <div class="flex flex-col items-center gap-3 mb-12">
      <span v-for="link in links" :key="link.name">
        <Icon v-bind="link" />
      </span>
    </div>
  </div>
</template>
