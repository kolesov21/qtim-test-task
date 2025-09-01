export default defineNuxtPlugin(() => {
  const appApi = $fetch.create({
    baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io',
  })

  return {
    provide: {
      appApi,
    },
  }
})
