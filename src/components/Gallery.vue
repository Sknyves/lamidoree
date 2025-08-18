<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentIndex = ref(0)
const timer = ref(null)
const autoplay = ref(true)
const interval = 5000

const images = [
  { 
    src: '/food-1.jpg', 
    alt: 'Plat 1',
    title: 'Penne Pasta',
    description: 'Pâtes italiennes avec sauce tomate et basilic'
  },
  { 
    src: '/food-2.jpg', 
    alt: 'Plat 2',
    title: 'Salade César',
    description: 'Salade fraîche avec croûtons et parmesan'
  },
  { 
    src: '/food-3.jpg', 
    alt: 'Plat 3',
    title: 'Burger Gourmet',
    description: 'Burger maison avec frites croustillantes'
  },
  { 
    src: '/food-4.jpg', 
    alt: 'Plat 4',
    title: 'Dessert Chocolat',
    description: 'Fondant au chocolat avec glace vanille'
  },
  { 
    src: '/food-5.jpg', 
    alt: 'Plat 5',
    title: 'Plateau Fruits de Mer',
    description: 'Selection des meilleurs produits de la mer'
  },
  { 
    src: '/food-6.jpg', 
    alt: 'Plat 6',
    title: 'Brunch Complet',
    description: 'Petit déjeuner copieux pour bien commencer la journée'
  }
]

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  resetAutoplay()
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
  resetAutoplay()
}

const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

const startAutoplay = () => {
  if (autoplay.value) {
    timer.value = setInterval(() => {
      nextSlide()
    }, interval)
  }
}

const resetAutoplay = () => {
  if (autoplay.value) {
    clearInterval(timer.value)
    startAutoplay()
  }
}

const pauseAutoplay = () => {
  clearInterval(timer.value)
}

const resumeAutoplay = () => {
  if (autoplay.value) {
    startAutoplay()
  }
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>

<template>
  <div class="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg py-8 md:py-12 space-y-6 md:space-y-8">
    <h2 class="font-bold text-3xl md:text-4xl text-center text-[#592d0c]">Notre Galerie Gourmande</h2>
    
    <!-- Conteneur du carrousel -->
    <div 
      class="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
    >
      <!-- Slides -->
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="absolute inset-0 transition-all duration-500 ease-in-out overflow-hidden"
        :class="{
          'z-10': currentIndex === index,
          'z-0': currentIndex !== index,
          'opacity-0': Math.abs(currentIndex - index) > 1
        }"
        :style="{
          transform: currentIndex === index ? 'translateX(0)' : 
                   index > currentIndex ? `translateX(${100 - (index - currentIndex) * 20}%)` : 
                   `translateX(-${100 - (currentIndex - index) * 20}%)`,
          zIndex: images.length - Math.abs(currentIndex - index)
        }"
        @click="goToSlide(index)"
      >
        <img 
          :src="image.src" 
          :alt="image.alt"
          class="object-cover w-full h-full transition-all duration-300"
          :class="{
            'scale-100': currentIndex === index,
            'scale-105': currentIndex !== index
          }"
        />
        
        <!-- Légende -->
        <div 
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white"
          :class="{
            'opacity-100 translate-y-0': currentIndex === index,
            'opacity-0 translate-y-4': currentIndex !== index
          }"
        >
          <h3 class="text-lg md:text-xl font-bold">{{ image.title }}</h3>
          <p class="text-sm md:text-base">{{ image.description }}</p>
        </div>
      </div>
      
      <!-- Bouton précédent -->
      <button 
        @click="prevSlide"
        class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 z-20 transition-all"
        aria-label="Image précédente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <!-- Bouton suivant -->
      <button 
        @click="nextSlide"
        class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 md:p-3 z-20 transition-all"
        aria-label="Image suivante"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
    <!-- Indicateurs de navigation -->
    <div class="flex justify-center gap-1 md:gap-2 px-4">
      <button 
        v-for="(_, index) in images"
        :key="index"
        @click="goToSlide(index)"
        class="h-1 md:h-2 rounded-full transition-all duration-300"
        :class="{ 
          'bg-[#FAB421] w-8 md:w-12': currentIndex === index, 
          'bg-gray-300 w-4 md:w-6': currentIndex !== index 
        }"
        :aria-label="`Aller à l'image ${index + 1}`"
      />
    </div>
  </div>
</template>

<style scoped>
/* Animation personnalisée pour les légendes */
.slide-caption-enter-active,
.slide-caption-leave-active {
  transition: all 0.5s ease;
}
.slide-caption-enter-from,
.slide-caption-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>