<template>
  <div v-if="currentPage && pages" class="flex gap-2">
    <button
      v-for="page in pages"
      :key="page"
      class="size-[44px] cursor-pointer rounded-[12px]"
      :class="[page === currentPage ? 'bg-black' : 'bg-gray-light hover:bg-[#E8E8E8]']"
      @click="currentPage = page"
    >
      <p class="text-[16px] leading-[50%]" :class="{ 'text-white': page === currentPage }">
        {{ page }}
      </p>
    </button>
    <button
      class="flex size-[44px] cursor-pointer items-center justify-center rounded-[12px] border-[1px] border-[#E8E8E8] hover:bg-[#E8E8E8] disabled:pointer-events-none"
      :disabled="currentPage === pages[pages.length - 1]"
      @click="currentPage = currentPage + 1"
    >
      <img src="assets/img/icons/arrow-right.svg" alt="Next page" />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  totalNumberItems: number
  itemsPerPage?: number
  maxButtonsToDisplay?: number
}
const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 8,
  maxButtonsToDisplay: 5,
})

const currentPage = defineModel<number>()
const pages = computed(() => {
  if (currentPage.value && props.totalNumberItems) {
    const totalPages = Math.ceil(props.totalNumberItems / props.itemsPerPage)
    let start = currentPage.value - Math.floor(props.maxButtonsToDisplay / 2)
    let end = currentPage.value + Math.floor(props.maxButtonsToDisplay / 2)

    if (start < 1) {
      start = 1
      end = props.maxButtonsToDisplay
    }
    if (end > totalPages) {
      end = totalPages
      start = totalPages - props.maxButtonsToDisplay + 1
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  } else return null
})
</script>
