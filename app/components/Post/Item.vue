<template>
  <article class="group relative">
    <div
      class="relative z-[1] flex h-[352px] flex-col gap-6 bg-white transition-[translate] duration-300 group-hover:-translate-y-5"
    >
      <img :src="imagePlaceholderPath" :alt="`Image for post #${id}`" class="size-[280px]" />
      <!-- Ссылки на изображения, которые присылает бэк, некорректные или неактуальные. Использовал случайные из макета -->
      <p class="text-[20px] leading-[120%]">
        {{ title }}
      </p>
    </div>
    <NuxtLink
      class="text-regular text-lavender absolute bottom-0 left-0 z-0"
      :to="{ name: 'posts-id', params: { id } }"
    >
      Read more
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
interface Props {
  id: string
  title: string
}

defineProps<Props>()

const imagePlaceholders: Record<string, string> = import.meta.glob(
  '/assets/img/placeholders/*.webp',
  {
    eager: true,
    import: 'default',
  },
)
const imagePlaceholderPath = computed(() => {
  const minCeiled = Math.ceil(1)
  const maxFloored = Math.floor(8)
  const randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)

  const path = `/assets/img/placeholders/image-placeholder-${randomNumber}.webp`
  return imagePlaceholders[path]
})
</script>
