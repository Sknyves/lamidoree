<script setup>
import { ShoppingBag, X, Plus, Minus } from 'lucide-vue-next';
import { computed } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  cartItems: Array
});

const emit = defineEmits(['update-quantity', 'remove-item', 'close']);

const subtotal = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const deliveryFee = computed(() => {
  return subtotal.value > 15 ? 0 : 2.5;
});

const total = computed(() => {
  return subtotal.value + deliveryFee.value;
});
</script>

<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-1"
  >
    <div 
      v-if="isOpen"
      class="fixed md:absolute right-0 mt-2 w-full md:w-96 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
      @click.stop
    >
      <div class="p-4">
        <!-- En-tête -->
        <div class="flex justify-between items-center border-b pb-3">
          <h3 class="text-lg font-bold text-[#592d0c]">Votre Panier</h3>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
            <X class="h-5 w-5" />
          </button>
        </div>

        <!-- Liste des articles -->
        <div v-if="cartItems.length > 0">
          <div class="max-h-96 overflow-y-auto py-2">
            <div 
              v-for="item in cartItems"
              :key="item.id"
              class="flex items-center py-3 border-b"
            >
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-16 h-16 object-cover rounded-md"
              >
              <div class="ml-3 flex-1">
                <h4 class="font-medium text-gray-800">{{ item.name }}</h4>
                <p class="text-[#592d0c] font-semibold">{{ (item.price * item.quantity).toFixed(2) }} €</p>
                <div class="flex items-center mt-1">
                  <button 
                    @click="$emit('update-quantity', item.id, 'decrease')"
                    class="text-gray-500 hover:text-[#592d0c] p-1"
                  >
                    <Minus class="h-3 w-3" />
                  </button>
                  <span class="mx-2 text-gray-300 text-sm w-5 text-center">{{ item.quantity }}</span>
                  <button 
                    @click="$emit('update-quantity', item.id, 'increase')"
                    class="text-gray-500 hover:text-[#592d0c] p-1"
                  >
                    <Plus class="h-3 w-3" />
                  </button>
                </div>
              </div>
              <button 
                @click="$emit('remove-item', item.id)"
                class="ml-2 text-gray-400 hover:text-red-500"
              >
                <X class="h-4 w-4" />
              </button>
            </div>
          </div>

          <!-- Total -->
          <div class="border-t pt-3 mt-2">
            <div class="flex justify-between py-1 text-sm">
              <span>Sous-total</span>
              <span class="font-medium">{{ subtotal.toFixed(2) }} €</span>
            </div>
            <div class="flex justify-between py-1 text-sm">
              <span>Livraison</span>
              <span class="font-medium">{{ deliveryFee.toFixed(2) }} €</span>
            </div>
            <div class="flex justify-between py-2 font-bold text-[#592d0c]">
              <span>Total</span>
              <span>{{ total.toFixed(2) }} €</span>
            </div>

            <RouterLink 
              to="/order"
              @click="$emit('close')"
              class="block w-full mt-4 bg-[#592d0c] hover:bg-[#7a3f18] text-white py-2 rounded-lg transition-colors text-center"
            >
              Passer la commande
            </RouterLink>
          </div>
        </div>

        <!-- Panier vide -->
        <div v-else class="py-8 text-center">
          <ShoppingBag class="mx-auto h-10 w-10 text-gray-400" />
          <p class="mt-2 text-gray-500">Votre panier est vide</p>
          <RouterLink 
            to="/menu"
            @click="$emit('close')"
            class="mt-4 text-[#592d0c] hover:text-[#7a3f18] font-medium inline-block"
          >
            Voir notre menu →
          </RouterLink>
        </div>
      </div>
    </div>
  </transition>

  <!-- Overlay -->
  <transition
    enter-active-class="transition-opacity ease-linear duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:bg-transparent"
      @click="$emit('close')"
    ></div>
  </transition>
</template>