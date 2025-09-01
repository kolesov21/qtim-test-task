<template>
  <main class="mt-[120px] mb-[80px] gap-20">
    <LoaderSpinner v-if="isLoading" />
    <template v-else-if="post">
      <h1 class="text-[84px] leading-[100%]">{{ post.title }}</h1>
      <img
        src="assets/img/placeholders/image-placeholder-9.webp"
        :alt="`Image for post #${post.id}`"
        class="h-auto w-full max-w-[1216px]"
      />
      <!-- Ссылки на изображения, которые присылает бэк, некорректные или неактуальные. Использовал из макета -->
      <div class="flex max-w-[695px] flex-col gap-8">
        <p class="text-[16px] leading-[100%]">About</p>
        <p class="text-[36px] leading-[124%]">{{ post.description }}</p>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

const route = useRoute()

const { posts, isLoading, fetchPost: fetchPostStore } = usePostsStore()
const post = ref<null | Post>(null)

async function fetchPost() {
  const postFromServer = await fetchPostStore(Number(route.params.id))
  if (postFromServer) post.value = postFromServer
}

onMounted(async () => {
  if (posts.value.length) {
    const fetchedPost = posts.value.find((post) => post.id === route.params.id)

    if (fetchedPost) post.value = fetchedPost
    else fetchPost()
  } else {
    fetchPost()
  }
})
</script>
