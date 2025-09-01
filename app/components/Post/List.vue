<template>
  <LoaderSpinner v-if="isLoading" />
  <section v-else class="flex flex-col gap-[50px]">
    <div class="grid grid-cols-[280px_280px_280px_280px] justify-between gap-y-10">
      <PostItem
        v-for="post in postsByPage.get(page)"
        :id="post.id"
        :key="post.id"
        :title="post.title"
        :image="post.image"
      />
    </div>
    <AppPaginator v-model="page" :total-number-items="posts.length" />
  </section>
</template>

<script setup lang="ts">
const { posts, postsByPage, isLoading, fetchAllPosts } = usePostsStore()
const page = ref(1)

onMounted(async () => {
  if (!posts.value.length) await fetchAllPosts()
})
</script>
