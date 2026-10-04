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
  <div
    class="order-2 flex flex-col items-center w-full p-1 lg:p-5 gap-1 lg:gap-5"
  >
    <div class="flex flex-col items-center w-40 md:w-75 lg:w-100 xl:w-150">
      <p class="font-semibold text-lg lg:text-2xl text-highlight">
        {{ props.title }}
      </p>
    </div>
    <div class="flex items-center justify-center w-full">
      <button
        type="button"
        class="size-10 lg:size-12 rounded-lg bg-main hover:bg-main-hover text-white shadow-lg lg:text-xl cursor-pointer"
        aria-label="Previous photo"
        @click="prev"
      >
        &lt;
      </button>
      <div
        class="flex items-center justify-center mx-1 lg:mx-5 w-40 md:w-75 lg:w-100 xl:w-150 aspect-4/3"
      >
        <Transition name="photo" mode="out-in">
          <img
            :key="active.id"
            :src="active.src"
            :alt="active.caption"
            class="max-w-full max-h-full object-contain rounded-4xl outline-2 shadow-lg brightness-115"
          />
        </Transition>
      </div>
      <button
        type="button"
        class="size-10 lg:size-12 rounded-lg bg-main hover:bg-main-hover text-white shadow-lg lg:text-xl cursor-pointer"
        aria-label="Next photo"
        @click="next"
      >
        &gt;
      </button>
    </div>
    <div class="flex flex-col items-center lg:gap-1">
      <a
        v-if="active.href"
        :href="active.href"
        target="_blank"
        rel="noopener noreferrer"
        class="lg:text-xl text-center underline"
      >
        {{ active.caption }}
      </a>
      <p v-else class="lg:text-xl text-center">{{ active.caption }}</p>
      <p class="text-center text-sm">{{ active.description }}</p>
      <span class="text-sm text-gray-500"
        >{{ current + 1 }} / {{ props.slides.length }}</span
      >
    </div>
  </div>
</template>

<style>
.photo-enter-active,
.photo-leave-active {
  transition: opacity 0.05s ease;
}

.photo-enter-from,
.photo-leave-to {
  opacity: 0;
}
</style>
