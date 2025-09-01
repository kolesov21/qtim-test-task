import type { Post } from '~/types/post'

export const usePostsStore = () => {
  const posts = useState<Post[]>('posts', () => [])
  const postsByPage = useState<Map<number, Post[]>>('postsByPage', () => new Map())
  const isLoading = useState<boolean>('postsLoadingStatus', () => false)

  async function fetchAllPosts() {
    const { $appApi } = useNuxtApp()
    try {
      isLoading.value = true
      posts.value = await $appApi<Post[]>('/qtim-test-work/posts/')
      postsByPage.value = wrapArrayInPaginatorMap(posts.value)
    } catch (error) {
      console.error('Ошибка при загрузке всех постов:', error)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchPost(id: number) {
    const { $appApi } = useNuxtApp()
    try {
      isLoading.value = true
      return await $appApi<Post>(`/qtim-test-work/posts/${id}`)
    } catch (error) {
      console.error('Ошибка при загрузке поста:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    posts,
    postsByPage,
    isLoading,
    fetchAllPosts,
    fetchPost,
  }
}

function wrapArrayInPaginatorMap<T>(items: T[], itemsPerPage = 8): Map<number, T[]> {
  const map: Map<number, T[]> = new Map()
  const pages = Math.ceil(items.length / itemsPerPage)

  for (let page = 1; page <= pages; page++) {
    const start = (page - 1) * itemsPerPage
    const end = start + itemsPerPage
    map.set(page, items.slice(start, end))
  }

  return map
}
