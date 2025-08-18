<script setup>
import { ShoppingBag, Menu, X } from 'lucide-vue-next';
import { ref } from 'vue';
import CartDropdown from './CartDropdown.vue';

const isMenuOpen = ref(false);
const isCartOpen = ref(false);

// Données du panier (à remplacer par un store Pinia si nécessaire)
const cartItems = ref([
  { id: 1, name: 'Croissant au beurre', price: 2.5, quantity: 2, image: '/pastry-2.jpg' },
  { id: 2, name: 'Cappuccino', price: 3.8, quantity: 1, image: '/drink-3.jpg' }
]);

const updateQuantity = (id, action) => {
  const item = cartItems.value.find(item => item.id === id);
  if (item) {
    if (action === 'increase') {
      item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
      item.quantity--;
    }
  }
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
};
</script>

<template>
  <header class="bg-[#1f0f03] text-white sticky top-0 z-50 shadow-md">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center">
          <img src="/logo.png" alt="Logo" class="h-10 md:h-12">
        </RouterLink>

        <!-- Navigation desktop -->
        <nav class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <RouterLink 
            to="/" 
            class="hover:text-[#FAB421] transition-colors duration-200 font-medium"
            active-class="text-[#FAB421]"
          >
            Accueil
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="hover:text-[#FAB421] transition-colors duration-200 font-medium"
            active-class="text-[#FAB421]"
          >
            À propos
          </RouterLink>
          <RouterLink 
            to="/menu" 
            class="hover:text-[#FAB421] transition-colors duration-200 font-medium"
            active-class="text-[#FAB421]"
          >
            Menu
          </RouterLink>
          <RouterLink 
            to="/gallery" 
            class="hover:text-[#FAB421] transition-colors duration-200 font-medium"
            active-class="text-[#FAB421]"
          >
            Galerie
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="hover:text-[#FAB421] transition-colors duration-200 font-medium"
            active-class="text-[#FAB421]"
          >
            Contact
          </RouterLink>
        </nav>

        <!-- Boutons d'action -->
        <div class="flex items-center space-x-3 md:space-x-4">
          <!-- Panier -->
          <div class="relative">
            <button 
              @click="isCartOpen = !isCartOpen"
              class="relative p-2 text-white hover:text-[#FAB421] transition-colors"
              aria-label="Panier"
            >
              <ShoppingBag class="h-6 w-6" />
              <span 
                v-if="cartItems.length > 0"
                class="absolute -top-1 -right-1 bg-[#FAB421] text-xs text-black rounded-full h-5 w-5 flex items-center justify-center"
              >
                {{ cartItems.reduce((acc, item) => acc + item.quantity, 0) }}
              </span>
            </button>

            <CartDropdown 
              :is-open="isCartOpen" 
              :cart-items="cartItems"
              @update-quantity="updateQuantity"
              @remove-item="removeItem"
              @close="isCartOpen = false"
            />
          </div>

          <RouterLink 
            to="/order" 
            class="hidden md:block bg-[#592d0c] hover:bg-[#7a3f18] px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            Commander
          </RouterLink>
          
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden text-white focus:outline-none"
            aria-label="Menu mobile"
          >
            <Menu v-if="!isMenuOpen" class="h-6 w-6" />
            <X v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <nav v-if="isMenuOpen" class="md:hidden pt-4 pb-6 space-y-4">
          <RouterLink 
            to="/" 
            class="block hover:text-[#FAB421] transition-colors duration-200 py-2"
            @click="isMenuOpen = false"
            active-class="text-[#FAB421]"
          >
            Accueil
          </RouterLink>
          <RouterLink 
            to="/about" 
            class="block hover:text-[#FAB421] transition-colors duration-200 py-2"
            @click="isMenuOpen = false"
            active-class="text-[#FAB421]"
          >
            À propos
          </RouterLink>
          <RouterLink 
            to="/menu" 
            class="block hover:text-[#FAB421] transition-colors duration-200 py-2"
            @click="isMenuOpen = false"
            active-class="text-[#FAB421]"
          >
            Menu
          </RouterLink>
          <RouterLink 
            to="/gallery" 
            class="block hover:text-[#FAB421] transition-colors duration-200 py-2"
            @click="isMenuOpen = false"
            active-class="text-[#FAB421]"
          >
            Galerie
          </RouterLink>
          <RouterLink 
            to="/contact" 
            class="block hover:text-[#FAB421] transition-colors duration-200 py-2"
            @click="isMenuOpen = false"
            active-class="text-[#FAB421]"
          >
            Contact
          </RouterLink>
          <RouterLink 
            to="/order" 
            class="block w-full bg-[#592d0c] hover:bg-[#7a3f18] px-4 py-2 rounded-lg transition-colors duration-200 mt-2 text-center"
            @click="isMenuOpen = false"
          >
            Commander
          </RouterLink>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply text-[#FAB421];
}
</style>