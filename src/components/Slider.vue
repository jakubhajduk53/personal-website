<script setup lang="ts">
import { ref, computed } from "vue";
import type { Slide } from "../types";

const props = defineProps<{
  title: string;
  slides: Slide[];
}>();

const current = ref<number>(0);

const active = computed<Slide>(() => props.slides[current.value]);

function next(): void {
  current.value = (current.value + 1) % props.slides.length;
}

function prev(): void {
  current.value =
    (current.value - 1 + props.slides.length) % props.slides.length;
}
</script>

<template>
  <div class="flex flex-col items-center w-full gap-4">
    <div class="flex flex-col items-center w-150">
      <p class="font-semibold text-2xl text-[rgb(251,139,36)]">
        {{ props.title }}
      </p>
    </div>
    <div class="flex items-center justify-center w-full">
      <button
        type="button"
        class="size-12 rounded-xl bg-[rgb(15,76,92)] hover:bg-[rgb(8,65,75)] text-white shadow-lg text-xl cursor-pointer"
        aria-label="Previous photo"
        @click="prev"
      >
        &lt;
      </button>
      <div class="flex items-center justify-center w-150 aspect-4/3">
        <img
          :key="active.id"
          :src="active.src"
          :alt="active.caption"
          class="max-w-full max-h-full object-contain rounded-4xl outline-2 shadow-xl brightness-115"
        />
      </div>
      <button
        type="button"
        class="size-12 rounded-xl bg-[rgb(15,76,92)] hover:bg-[rgb(8,65,75)] text-white shadow-lg text-xl cursor-pointer"
        aria-label="Next photo"
        @click="next"
      >
        &gt;
      </button>
    </div>
    <div class="flex flex-col items-center gap-1 w-150">
      <a
        v-if="active.href"
        :href="active.href"
        target="_blank"
        rel="noopener noreferrer"
        class="text-lg text-center underline"
      >
        {{ active.caption }}
      </a>
      <p v-else class="text-lg text-center">{{ active.caption }}</p>
      <p class="text-center text-sm">{{ active.description }}</p>
      <span class="text-sm text-gray-500"
        >{{ current + 1 }} / {{ props.slides.length }}</span
      >
    </div>
  </div>
</template>
