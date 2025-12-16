<template>
  <div class="absolute inset-0 z-0 overflow-hidden">
    <!-- Desktop -->
    <video
      class="hidden sm:block w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
      src="/video/bg2.mp4"
    />

    <!-- Mobile -->
    <video
      class="block sm:hidden w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
      src="/video/bg2.mp4"
    />

    <!-- Overlay Desktop-->
    <div
      class="hidden sm:block absolute inset-0 bg-gradient-to-br from-deepBlue/30 via-navBlack to-deepBlue/65"
    />

    <!-- Overlay Mobile-->
    <div
      class="block sm:hidden absolute inset-0 bg-gradient-to-br from-deepBlue/60 via-navBlack to-deepBlue/55"
    />
  </div>
</template>
