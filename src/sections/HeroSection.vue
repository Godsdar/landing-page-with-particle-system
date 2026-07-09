<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);

const currentTime = ref(0);
const duration = ref(0);
const flag = ref(false);

const onMetaDataLoaded = () => {
  if (videoRef.value) {
    duration.value = videoRef.value.duration;
    // console.log('duration: ' + (duration.value / 4).toFixed(1));
  }
};

const handleTimeUpdate = (event: Event) => {
  const video = event.target as HTMLVideoElement;
  currentTime.value = video.currentTime;
  // console.log(currentTime.value, duration.value);
  if (currentTime.value >= duration.value / 4 && !flag.value) {
    flag.value = true;
    videoRef.value.playbackRate = 0.5;
  }
};

onMounted(() => {
  if (videoRef.value) videoRef.value.playbackRate = 0.5;
  document.addEventListener('scroll', () => handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (videoRef.value) videoRef.value.playbackRate = 2;
};
</script>

<template>
  <section
    class="relative w-full min-h-screen p-20 flex flex-col bg-brand-bg text-brand-dark overflow-hidden font-sans select-none"
  >
    <header class="w-full flex justify-between items-center px-8 py-6 z-30 relative">
      <div class="flex items-center gap-1 cursor-pointer">
        <span class="font-ivy text-2xl font-bold tracking-tighter">
          <img src="../assets/svg/icons/logo.svg" alt="" />
        </span>
        <span class="font-sans text-xs uppercase tracking-[0.2em] font-medium hidden sm:inline"
          >Alegra</span
        >
      </div>

      <nav class="flex items-center gap-8 md:gap-12 px-8 py-3 bg-brand-dark/[.1] rounded-full">
        <a
          href="#"
          class="text-[10px] md:text-xs tracking-[0.3em] font-medium text-brand-dark/60 hover:text-brand-dark transition-colors"
          >Home</a
        >
        <a
          href="#"
          class="text-[10px] md:text-xs tracking-[0.3em] font-medium text-brand-dark/60 hover:text-brand-dark transition-colors"
          >About</a
        >
        <a
          href="#"
          class="text-[10px] md:text-xs tracking-[0.3em] font-medium text-brand-dark/60 hover:text-brand-dark transition-colors"
          >Service</a
        >
        <a
          href="#"
          class="text-[10px] md:text-xs tracking-[0.3em] font-medium text-brand-dark/60 hover:text-brand-dark transition-colors"
          >Work</a
        >
        <a
          href="#"
          class="text-[10px] md:text-xs tracking-[0.3em] font-medium text-brand-dark/60 hover:text-brand-dark transition-colors"
          >Insight</a
        >
      </nav>

      <div>
        <button
          class="bg-brand-dark text-brand-bg px-5 py-2 rounded-full text-[10px] md:text-xs tracking-widest font-semibold hover:opacity-90 transition-opacity"
        >
          Contact us
        </button>
      </div>
    </header>

    <div class="absolute inset-0 z-10 pointer-events-none mix-blend-multiply">
      <video
        ref="videoRef"
        src="../assets/hero video.mp4"
        autoplay
        loop
        muted
        playsinline
        @timeupdate="handleTimeUpdate"
        @loadedmetadata="onMetaDataLoaded"
        class="w-full h-full object-cover pointer-events-none"
      ></video>
      <canvas ref="canvasRef" class="w-full h-full object-cover"></canvas>
    </div>

    <div
      class="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center z-20 relative pt-12 pb-24"
    >
      <div class="w-full">
        <h1
          class="font-ivy text-[10vw] sm:text-[8vw] md:text-[7.5vw] font-bold uppercase leading-[0.85] tracking-tight"
        >
          Every Great
        </h1>
      </div>

      <div
        class="w-full flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6 mt-2"
      >
        <h1
          class="font-ivy text-[10vw] sm:text-[8vw] md:text-[7.5vw] font-bold uppercase leading-[0.85] tracking-tight"
        >
          Project
        </h1>

        <div
          class="hidden lg:block w-12 h-12 rounded-full border border-brand-dark/20 relative animate-[spin_20s_linear_infinite] opacity-60 self-center mx-4"
        >
          <div
            class="absolute inset-0 flex items-center justify-center font-sans text-[8px] tracking-widest"
          >
            ✦
          </div>
        </div>

        <div class="text-left md:text-right max-w-md self-end md:ml-auto">
          <p
            class="font-sans text-sm sm:text-base md:text-lg uppercase tracking-[0.15em] leading-relaxed text-brand-dark/80 font-medium"
          >
            Begins with an even <br class="hidden md:inline" />
            better story
          </p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-8 z-20 hidden md:block">
      <span class="font-mono text-[10px] uppercase tracking-widest text-brand-dark/40"
        >© 2026 Edition</span
      >
    </div>
  </section>
</template>

<style scoped>
h1 {
  word-spacing: -0.05em;
}
</style>
