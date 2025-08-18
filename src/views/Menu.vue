<script setup>
import { Star, Coffee, Croissant, Clock, Sandwich, Salad } from 'lucide-vue-next';
import { ref } from 'vue';

const activeCategory = ref('breakfast');

const menuItems = {
  breakfast: [
    {
      name: "Petit Déjeuner Classique",
      description: "Café, jus d'orange frais, viennoiserie au choix",
      price: "8.50",
      popular: true,
      image: "/breakfast-1.jpg"
    },
    {
      name: "Avocado Toast",
      description: "Pain complet, avocat, œuf poché, graines",
      price: "9.80",
      popular: false,
      image: "/breakfast-2.jpg"
    },
    {
      name: "Pancakes Maison",
      description: "Servis avec sirop d'érable et fruits de saison",
      price: "7.90",
      popular: true,
      image: "/breakfast-3.jpg"
    },
    {
      name: "Granola Bio",
      description: "Yaourt grec, fruits frais, miel",
      price: "6.50",
      popular: false,
      image: "/breakfast-4.jpg"
    }
  ],
  drinks: [
    {
      name: "Expresso",
      description: "Notre mélange signature",
      price: "3.20",
      popular: true,
      image: "/drink-1.jpg"
    },
    {
      name: "Cappuccino",
      description: "Avec mousse de lait onctueuse",
      price: "4.50",
      popular: true,
      image: "/drink-2.jpg"
    },
    {
      name: "Thé Signature",
      description: "Sélection de thés premium",
      price: "3.80",
      popular: false,
      image: "/drink-3.jpg"
    },
    {
      name: "Smoothie Vert",
      description: "Épinard, pomme, gingembre, citron",
      price: "5.90",
      popular: false,
      image: "/drink-4.jpg"
    }
  ],
  lunch: [
    {
      name: "Salade César",
      description: "Poulet grillé, parmesan, croûtons, sauce maison",
      price: "12.50",
      popular: true,
      image: "/lunch-1.jpg"
    },
    {
      name: "Sandwich Club",
      description: "Poulet, bacon, avocat, pain aux céréales",
      price: "10.90",
      popular: false,
      image: "/lunch-2.jpg"
    },
    {
      name: "Quiche du Jour",
      description: "Accompagnée de salade verte",
      price: "11.20",
      popular: true,
      image: "/lunch-3.jpg"
    },
    {
      name: "Bowl Buddha",
      description: "Quinoa, légumes rôtis, avocat, sauce tahini",
      price: "13.50",
      popular: false,
      image: "/lunch-4.jpg"
    }
  ],
  pastries: [
    {
      name: "Croissant Pur Beurre",
      description: "Fait maison quotidiennement",
      price: "2.80",
      popular: true,
      image: "/pastry-1.jpg"
    },
    {
      name: "Pain au Chocolat",
      description: "Chocolat premium belge",
      price: "3.20",
      popular: true,
      image: "/pastry-2.jpg"
    },
    {
      name: "Tarte Citron Meringuée",
      description: "Équilibrée entre acidité et douceur",
      price: "4.50",
      popular: false,
      image: "/pastry-3.jpg"
    },
    {
      name: "Cookie Maison",
      description: "Pépites de chocolat et noix de pécan",
      price: "2.50",
      popular: false,
      image: "/pastry-4.jpg"
    }
  ]
};

const categories = [
  { id: 'breakfast', name: 'Petit Déjeuner', icon: Coffee },
  { id: 'drinks', name: 'Boissons', icon: Coffee },
  { id: 'lunch', name: 'Déjeuner', icon: Sandwich },
  { id: 'pastries', name: 'Pâtisseries', icon: Croissant }
];
</script>

<template>
  <div class="menu-page bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-[300px] md:h-[400px] flex items-center justify-center">
      <img 
        src="/menu-hero.jpg" 
        alt="Notre menu" 
        class="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div class="relative z-10 text-center px-4 text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Notre Menu</h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto">Découvrez nos délices préparés avec passion</p>
      </div>
    </section>

    <!-- Menu Navigation -->
    <section class="sticky top-0 z-10 bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 overflow-x-auto hide-scrollbar">
        <div class="flex space-x-2 md:space-x-4 justify-start md:justify-center min-w-max">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300"
            :class="{
              'bg-[#592d0c] text-white shadow-md': activeCategory === category.id,
              'bg-gray-100 text-gray-800 hover:bg-gray-200': activeCategory !== category.id
            }"
          >
            <component 
              :is="category.icon" 
              class="w-5 h-5 mr-2"
            />
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Menu Items -->
    <section class="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-6">
        <div 
          v-for="(item, index) in menuItems[activeCategory]" 
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.name" 
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div 
              v-if="item.popular"
              class="absolute top-3 left-3 bg-[#FAB421] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center"
            >
              <Star class="w-3 h-3 mr-1 fill-white" />
              POPULAIRE
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold text-[#592d0c]">{{ item.name }}</h3>
              <span class="text-lg font-semibold text-[#FAB421] whitespace-nowrap">{{ item.price }} €</span>
            </div>
            
            <p class="text-gray-600 mb-4">{{ item.description }}</p>
            
            <button 
              class="w-full bg-[#592d0c] hover:bg-[#7a3f18] text-white py-2 rounded-lg transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offer Banner -->
    <section class="pb-12 px-4 md:px-8">
      <div class="max-w-6xl mx-auto bg-gradient-to-r from-[#592d0c] to-[#7a3f18] rounded-xl overflow-hidden shadow-xl">
        <div class="grid md:grid-cols-2">
          <div class="p-8 md:p-12 text-white">
            <div class="flex items-center mb-2">
              <Star class="w-5 h-5 mr-2 text-[#FAB421] fill-[#FAB421]" />
              <span class="font-bold">OFFRE DU MOMENT</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Formule Petit-Déjeuner à 12€</h2>
            <p class="mb-4">Une boisson chaude, un jus frais et une viennoiserie de votre choix</p>
            <p class="text-sm opacity-90 mb-6">Valable du lundi au vendredi de 8h à 11h</p>
            <button class="bg-[#FAB421] hover:bg-[#e6a11d] text-[#592d0c] font-bold px-6 py-2 rounded-lg transition-colors">
              En savoir plus
            </button>
          </div>
          <div class="hidden md:block relative">
            <img 
              src="/special-offer.jpg" 
              alt="Offre spéciale petit-déjeuner" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-l from-[#592d0c] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Allergens Info -->
    <section class="pb-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <h2 class="text-xl font-bold text-[#592d0c] mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Informations allergènes
        </h2>
        <p class="text-gray-600 mb-4">
          Certains de nos plats contiennent des allergènes courants. Veuillez consulter notre liste d'allergènes
          complète ou demander à notre personnel pour plus d'informations.
        </p>
        <button class="text-[#592d0c] hover:text-[#7a3f18] font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Voir la liste complète
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.menu-page {
  scroll-behavior: smooth;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Animation pour les éléments du menu */
.menu-item {
  transition: all 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>