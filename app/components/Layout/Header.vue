<template>
  <header class="flex w-full justify-between px-10 py-[35px]">
    <NuxtLink to="/">
      <img src="assets/img/icons/logo.svg" alt="QTIM" />
    </NuxtLink>
    <div class="flex items-center gap-[91px]">
      <nav class="flex items-center gap-[58px]">
        <NuxtLink class="text-[20px] leading-[100%]">Works</NuxtLink>
        <NuxtLink class="text-[20px] leading-[100%]">About</NuxtLink>
      </nav>
      <div class="flex gap-4">
        <button
          class="hover:border-gray cursor-pointer rounded-full border-2 border-[#0000001A] p-3 transition-colors duration-300"
        >
          <img src="assets/img/icons/united-kingdom-flag.svg" alt="United Kingdom Flag" />
        </button>
        <button
          class="hover:bg-gray-dark cursor-pointer rounded-full bg-black px-8 py-4 text-[20px] leading-[100%] text-white transition-colors duration-300 active:bg-black"
        >
          Let’s work
        </button>
      </div>
    </div>
  </header>
</template>
