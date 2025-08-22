<script setup>
import DailyMenu from '@/components/DailyMenu.vue';
import Gallery from '@/components/Gallery.vue';
import Offers from '@/components/Offers.vue';
import OurSpecialities from '@/components/OurSpecialities.vue';
import Banner from '@/layouts/banner.vue';
</script>

<template>
  <Banner 
    title="La gourmandise à l'état pur"
    content="Pâtisseries artisanales, fraîches et
        dorées au quotidien"
    :button="{
      text: 'Découvrir nos spécialités'
    }"
  />
  <div class="flex flex-col md:flex-row items-center px-4 py-6 md:py-12 h-auto md:space-x-8 space-y-8 md:space-y-0">
  <div class="space-y-6 md:space-y-8 md:py-12 md:pl-8 w-full md:w-1/2 order-2 md:order-1">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">Notre passion pour la douceur</h2>
    <p>
      Chez la mie dorée, chaque douceur raconte une histoire. Née d'une passion pour la cuisine artisanale, notre restaurant propose des créations faites maison, dorées avec amour et préparées chaque jour pour éveiller vos sens.
    </p>
    <p>
      Offrir des instants de bonheur à travers des produits authentiques, savoureux et généreux, réalisés avec des ingrédients de qualité et un vrai savoir-faire; telle est notre  mission
    </p>
    <button class="rounded-lg p-2 bg-[#592d0c] text-white w-full sm:w-auto">En savoir plus</button>
  </div>
  <div class="w-full md:w-1/2 flex justify-center order-1 md:order-2">
    <img src="/body-img.jpg" alt="" class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md">
  </div>
  </div>

  <DailyMenu />

  <OurSpecialities />

  <Gallery />

  <Offers />
</template>

<style scoped></style>
