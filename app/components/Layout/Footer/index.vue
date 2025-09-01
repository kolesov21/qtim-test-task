<template>
  <footer
    class="bg-lavender relative flex w-full flex-col gap-[273px] px-[112px] pt-[140px] pb-[30px]"
  >
    <div class="flex gap-[368px]">
      <LayoutFooterLetsWorkTogether />
      <LayoutFooterContacts />
    </div>
    <LayoutFooterSocials />
    <button
      class="absolute bottom-0 flex h-[180px] w-[360px] cursor-pointer items-end justify-center self-center rounded-tl-full rounded-tr-full bg-black"
    >
      <p class="mb-[25px] text-[32px] leading-[100%] text-white">Go</p>
    </button>
  </footer>
</template>
