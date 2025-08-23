<script setup>
import { onMounted } from 'vue'
import { usePlatsStore } from '@/stores/plats'

const platsStore = usePlatsStore()

onMounted(() => {
  platsStore.chargerMenuDuJour()
})
</script>

<template>
    <div class="bg-[#1f0f03] space-y-8 py-10 sm:py-16 md:py-20">
        <h2 class="text-center text-white text-3xl sm:text-4xl font-bold">Menu du jour</h2>
        <div class="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div class="relative mb-8 md:mb-0">
                <div class="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] rounded-full absolute -top-8 -left-8 sm:-top-10 sm:-left-10 pattern"></div>
                <div class="card relative">
                    <div class="space-y-4 p-4 sm:p-6 md:p-8 bg-white relative overflow-hidden">
                        <div class="h-5 w-5 sm:h-7 sm:w-7 bg-black absolute rounded-full -top-2 -left-2 sm:-top-3 sm:-left-3"></div>
                        <div class="h-7 w-7 sm:h-10 sm:w-10 bg-black absolute rounded-full -top-6 -right-3 sm:-top-8 sm:-right-5"></div>
                        <div class="h-5 w-5 sm:h-7 sm:w-7 bg-black absolute rounded-full -bottom-2 -left-2 sm:-bottom-3 sm:-left-3"></div>
                        <div class="h-5 w-5 sm:h-7 sm:w-7 bg-black absolute rounded-full -bottom-2 -right-2 sm:-bottom-3 sm:-right-3"></div>
                        
                        <div v-for="(plat, index) in platsStore.menuDuJour" :key="index">
                          <div class="flex flex-col xs:flex-row xs:justify-between gap-1 xs:gap-0">
                              <h3 class="">{{ plat.nom }}</h3>
                              <p class="text-[#c49c5e]">{{ plat.prix.toLocaleString() }} F</p>
                          </div>
                          <div class="w-full bg-black h-[1px]"></div>
                          <p>{{ plat.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card relative">
                <div class="space-y-4 p-4 sm:p-6 md:p-8 bg-white relative overflow-hidden">
                    <div class="h-7 w-7 sm:h-10 sm:w-10 bg-black absolute rounded-full -top-2 -left-3 sm:-top-4 sm:-left-5"></div>
                    <div class="h-5 w-5 sm:h-7 sm:w-7 bg-black absolute rounded-full -top-4 -right-2 sm:-top-6 sm:-right-3"></div>
                    <div class="h-5 w-5 sm:h-7 sm:w-7 bg-black absolute rounded-full -bottom-2 -left-2 sm:-bottom-3 sm:-left-3"></div>
                    <div class="h-5 w-5 sm:h-7 sm:w-7 bg-black absolute rounded-full -bottom-2 -right-2 sm:-bottom-3 sm:-right-3"></div>
                    
                    <div v-for="(plat, index) in platsStore.menuDuJour" :key="index">
                      <div class="flex flex-col xs:flex-row xs:justify-between gap-1 xs:gap-0">
                          <h3 class="">{{ plat.nom }}</h3>
                          <p class="text-[#c49c5e]">{{ plat.prix.toLocaleString() }} F</p>
                      </div>
                      <div class="w-full bg-black h-[1px]"></div>
                      <p>{{ plat.description }}</p>
                    </div>
                </div>            
            </div>
        </div>
    </div>
</template>

<style scoped>
.pattern{
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 1;
}

/* Pointe du haut */
.card::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
}

/* Pointe du bas */
.card::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
}
</style>