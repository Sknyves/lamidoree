<script setup>
import { ref, onMounted } from 'vue'
import { Star, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { usePlatsStore } from '@/stores/plats'

const container = ref(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)

const platsStore = usePlatsStore()

const checkScroll = () => {
  if (!container.value) return
  canScrollLeft.value = container.value.scrollLeft > 0
  canScrollRight.value = 
    container.value.scrollLeft + container.value.clientWidth < 
    container.value.scrollWidth - 1
}

const scroll = (direction) => {
  if (!container.value) return
  
  const cardWidth = 288 // Largeur d'une card + margin
  const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
  
  container.value.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
  
  // Vérifier la position après un délai pour l'animation
  setTimeout(checkScroll, 300)
}

const ajouterAuPanier = (plat) => {
  platsStore.ajouterAuPanier(plat)
  // Vous pourriez ajouter une notification ici
}

onMounted(() => {
  // Charger les spécialités si nécessaire
  if (platsStore.specialites.length === 0) {
    platsStore.chargerDonnees()
  }
  checkScroll()
})
</script>

<template>
  <div class="speciality py-12 px-4 md:px-8 lg:px-16 xl:px-24">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center text-[#592d0c]">Nos spécialités</h2>
    
    <div class="relative">
      <!-- Flèche gauche -->
      <button 
        v-show="canScrollLeft"
        @click="scroll('left')"
        class="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        aria-label="Précédent"
      >
        <ChevronLeft class="w-6 h-6 text-[#592d0c]" />
      </button>

      <!-- Conteneur des cards -->
      <div 
        ref="container"
        @scroll="checkScroll"
        class="flex overflow-x-auto snap-x md:snap-mandatory gap-4 md:gap-6 pb-4 hide-scrollbar"
      >
        <div 
          v-for="plat in platsStore.specialites" 
          :key="plat.id" 
          class="snap-start flex-shrink-0 w-64 md:w-72"
        >
          <div class="bg-white rounded-lg shadow-md space-y-4 p-4 items-center text-center h-full flex flex-col">
            <img 
              :src="plat.image" 
              :alt="plat.nom" 
              class="object-cover h-32 w-full rounded-lg"
            >
            <div class="flex flex-col space-y-2 flex-grow justify-between">
              <div>
                <p class="font-semibold text-gray-800">{{ plat.nom }}</p>
                <div class="flex justify-center space-x-1 mt-1">
                  <Star 
                    v-for="star in 5" 
                    :key="star"
                    :class="['w-4 h-4', star <= plat.note ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300']"
                  />
                </div>
              </div>
              
              <p class="text-lg font-medium text-[#592d0c]">{{ plat.prix.toLocaleString() }} FCFA</p>
              <button 
                @click="ajouterAuPanier(plat)"
                class="text-white bg-[#592d0c] rounded-lg px-4 py-2 hover:bg-[#7a3f18] transition transform hover:scale-105 mt-2"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Flèche droite -->
      <button 
        v-show="canScrollRight"
        @click="scroll('right')"
        class="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
        aria-label="Suivant"
      >
        <ChevronRight class="w-6 h-6 text-[#592d0c]" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.speciality {
  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), 
              url('/spec-bg.jpg') no-repeat center center/cover;
}

.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Style pour mobile - indication qu'on peut scroller */
@media (max-width: 768px) {
  .hide-scrollbar {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 20px,
      black calc(100% - 20px),
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 20px,
      black calc(100% - 20px),
      transparent
    );
  }
}
</style>