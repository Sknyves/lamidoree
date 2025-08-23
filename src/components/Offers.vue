<script setup></script>

<template>
    <div class="px-4 md:px-8 py-12 max-w-4xl mx-auto mt-4 md:mt-8 space-y-12 md:space-y-16">
        <h2 class="font-bold text-center text-3xl md:text-4xl lg:text-5xl text-[#592d0c]">Nos offres exclusives</h2>
        
        <!-- Première offre -->
        <div class="flex flex-col md:flex-row items-center h-auto relative">
            <div class="hidden md:block absolute -top-16 -left-16 w-32 h-32">
                <img src="/Image-1.png" alt="Décoration" class="w-full h-full object-contain">
            </div>
            
            <div class="w-full md:w-1/2 mb-6 md:mb-0 md:pr-4 relative">
                <img src="/offers-1.jpg" alt="Petit déjeuner" class="w-full h-64 md:h-80 object-cover rounded-lg shadow-md">
            </div>
            
            <div class="w-full md:w-1/2 space-y-3 px-6 py-6 bg-white rounded-lg shadow-lg border border-gray-100">
                <h2 class="font-semibold text-xl md:text-2xl text-[#592d0c]">Petit déjeuner doré</h2>
                <h2 class="text-[#FAB421] font-medium text-lg md:text-xl">1 café offert pour 1 viennoiserie achetée</h2>
                <p class="text-gray-600 text-sm md:text-base">Profitez de notre offre spéciale petit déjeuner. Chaque viennoiserie achetée vous donne droit à un café gratuit. Parfait pour commencer votre journée en beauté.</p>
                <button class="mt-4 text-white bg-[#592d0c] rounded-lg px-6 py-2 hover:bg-[#7a3f18] transition transform hover:scale-105">
                    Voir l'offre
                </button>
            </div>
        </div>
        
        <!-- Deuxième offre -->
        <div class="flex flex-col md:flex-row items-center h-auto relative">
            <div class="hidden md:block absolute -bottom-16 -right-16 w-32 h-32">
                <img src="/Image-1.png" alt="Décoration" class="w-full h-full object-contain">
            </div>
            
            <div class="w-full md:w-1/2 order-2 md:order-1 mt-6 md:mt-0 md:pl-4">
                <div class="space-y-3 px-6 py-6 bg-white rounded-lg shadow-lg border border-gray-100">
                    <h2 class="font-semibold text-xl md:text-2xl text-[#592d0c]">Afternoon delight</h2>
                    <h2 class="text-[#FAB421] font-medium text-lg md:text-xl">1 cookie offert pour 2 boissons achetées</h2>
                    <p class="text-gray-600 text-sm md:text-base">Notre pause gourmande de l'après-midi. Pour deux boissons commandées, recevez un délicieux cookie maison gratuitement.</p>
                    <button class="mt-4 text-white bg-[#592d0c] rounded-lg px-6 py-2 hover:bg-[#7a3f18] transition transform hover:scale-105">
                        Voir l'offre
                    </button>
                </div>
            </div>
            
            <div class="w-full md:w-1/2 order-1 md:order-2 relative">
                <img src="/offers-1.jpg" alt="Afternoon" class="w-full h-64 md:h-80 object-cover rounded-lg shadow-md">
            </div>
        </div>
    </div>
</template>