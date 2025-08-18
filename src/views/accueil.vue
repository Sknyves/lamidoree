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
  <div class="items-center px-4 py-4 h-auto flex space-x-8">
    <div class="space-y-8 py-12 pl-8 w-[50%]">
        <h2 class="text-4xl font-bold">Notre passion pour la douceur</h2>
        <p>
            Chez la mie dorée, chaque douceur raconte une histoire. Née d'une passion pour la cuisine artisanale, notre restaurant propose des créations faites maison, dorées avec amour et préparées chaque jour pour éveiller vos sens.
        </p>
        <p>
            Offrir des instants de bonheur à travers des produits authentiques, savoureux et généreux, réalisés avec des ingrédients de qualité et un vrai savoir-faire; telle est notre  mission
        </p>
        <button class="rounded-lg p-2 bg-[#592d0c] text-white">En savoir plus</button>
    </div>
    <div class="w-[50%]">
        <img src="/body-img.jpg" alt="" class="w-full h-auto">
    </div>
  </div>

  <DailyMenu />

  <OurSpecialities />

  <Gallery />

  <Offers />
</template>

<style scoped></style>
