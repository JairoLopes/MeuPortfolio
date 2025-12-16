<template>
  <div class="absolute inset-0 z-0 overflow-hidden">
    <!-- Desktop -->
    <video
      class="hidden sm:block w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
      src="/video/bg4.mp4"
    />

    <!-- Mobile -->
    <video
      class="block sm:hidden w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
      src="/video/bg4.mp4"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-deepBlue/70 via-navBlack to-deepBlue/65" />
  </div>
</template>
