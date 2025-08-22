<script setup>
import { ShoppingBag, X, Plus, Minus, MapPin, Clock } from 'lucide-vue-next';
import { ref, computed } from 'vue';

const cartItems = ref([
  { id: 1, name: 'Croissant Pur Beurre', price: 2.8, quantity: 2, image: '/pastry-1.jpg' },
  { id: 2, name: 'Cappuccino', price: 4.5, quantity: 1, image: '/drink-2.jpg' },
  { id: 3, name: 'Salade César', price: 12.5, quantity: 1, image: '/lunch-1.jpg' }
]);

const deliveryOptions = [
  { id: 'pickup', name: 'Retrait sur place', description: 'Venez récupérer votre commande dans notre café', icon: Clock },
  { id: 'delivery', name: 'Livraison', description: 'Nous vous livrons à votre adresse', icon: MapPin }
];

const selectedDelivery = ref('pickup');
const deliveryAddress = ref('');
const customerInfo = ref({
  name: '',
  phone: '',
  notes: ''
});

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

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const deliveryFee = computed(() => {
  return selectedDelivery.value === 'delivery' ? 2.5 : 0;
});

const total = computed(() => {
  return subtotal.value + deliveryFee.value;
});

const placeOrder = () => {
  // Ici vous ajouterez la logique pour envoyer la commande
  console.log('Commande passée :', {
    items: cartItems.value,
    delivery: selectedDelivery.value,
    address: deliveryAddress.value,
    customer: customerInfo.value,
    total: total.value
  });
  alert('Commande confirmée ! Merci pour votre achat.');
};
</script>

<template>
  <div class="order-page min-h-screen bg-gray-50">
    <!-- Header
    <div class="bg-[#1f0f03] text-white py-4">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <RouterLink to="/" class="text-xl font-bold">Le Café Artisanal</RouterLink>
        <div class="flex items-center">
          <ShoppingBag class="w-6 h-6 mr-2" />
          <span class="bg-[#FAB421] text-black rounded-full px-2 py-1 text-xs font-bold">
            {{ cartItems.reduce((acc, item) => acc + item.quantity, 0) }}
          </span>
        </div>
      </div>
    </div> -->

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-[#592d0c] mb-8">Votre Commande</h1>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Left Column - Order Summary -->
          <div class="md:col-span-2">
            <div class="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 class="text-xl font-bold text-[#592d0c] mb-4 flex items-center">
                <ShoppingBag class="w-5 h-5 mr-2 text-[#FAB421]" />
                Votre Panier
              </h2>
              
              <div v-if="cartItems.length > 0">
                <div class="divide-y divide-gray-100">
                  <div v-for="item in cartItems" :key="item.id" class="py-4">
                    <div class="flex">
                      <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-lg mr-4">
                      <div class="flex-1">
                        <div class="flex justify-between">
                          <h3 class="font-medium text-gray-800">{{ item.name }}</h3>
                          <button @click="removeItem(item.id)" class="text-gray-400 hover:text-red-500">
                            <X class="w-4 h-4" />
                          </button>
                        </div>
                        <p class="text-[#592d0c] font-semibold mt-1">{{ (item.price * item.quantity).toFixed(2) }} €</p>
                        <div class="flex items-center mt-2">
                          <button 
                            @click="updateQuantity(item.id, 'decrease')"
                            class="text-gray-500 hover:text-[#592d0c] p-1"
                          >
                            <Minus class="w-4 h-4" />
                          </button>
                          <span class="mx-2 w-8 text-center">{{ item.quantity }}</span>
                          <button 
                            @click="updateQuantity(item.id, 'increase')"
                            class="text-gray-500 hover:text-[#592d0c] p-1"
                          >
                            <Plus class="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-else class="py-8 text-center text-gray-500">
                Votre panier est vide
                <RouterLink 
                  to="/menu" 
                  class="mt-4 block text-[#592d0c] hover:text-[#7a3f18] font-medium"
                >
                  Voir notre menu →
                </RouterLink>
              </div>
            </div>

            <!-- Delivery Options -->
            <div class="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 class="text-xl font-bold text-[#592d0c] mb-4">Mode de récupération</h2>
              
              <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div 
                  v-for="option in deliveryOptions"
                  :key="option.id"
                  @click="selectedDelivery = option.id"
                  class="border rounded-lg p-4 cursor-pointer transition-colors"
                  :class="{
                    'border-[#592d0c] bg-[#FFF9F0]': selectedDelivery === option.id,
                    'border-gray-200 hover:border-[#592d0c]': selectedDelivery !== option.id
                  }"
                >
                  <div class="flex items-center mb-2">
                    <component :is="option.icon" class="w-5 h-5 mr-2 text-[#FAB421]" />
                    <h3 class="font-bold">{{ option.name }}</h3>
                  </div>
                  <p class="text-sm text-gray-600">{{ option.description }}</p>
                </div>
              </div>
              
              <div v-if="selectedDelivery === 'delivery'" class="mt-4">
                <label class="block text-gray-700 mb-2">Adresse de livraison</label>
                <input 
                  v-model="deliveryAddress"
                  type="text" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
                  placeholder="Entrez votre adresse complète"
                >
              </div>
            </div>

            <!-- Customer Information -->
            <div class="bg-white rounded-xl shadow-md p-6">
              <h2 class="text-xl font-bold text-[#592d0c] mb-4">Informations personnelles</h2>
              
              <div class="space-y-4">
                <div>
                  <label class="block text-gray-700 mb-1">Nom complet *</label>
                  <input 
                    v-model="customerInfo.name"
                    type="text" 
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
                  >
                </div>
                
                <div>
                  <div>
                    <label class="block text-gray-700 mb-1">Téléphone *</label>
                    <input 
                      v-model="customerInfo.phone"
                      type="tel" 
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
                    >
                  </div>
                </div>
                
                <div>
                  <label class="block text-gray-700 mb-1">Notes supplémentaires (optionnel)</label>
                  <textarea 
                    v-model="customerInfo.notes"
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
                    placeholder="Allergies, instructions spéciales..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Order Summary -->
          <div>
            <div class="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h2 class="text-xl font-bold text-[#592d0c] mb-4">Récapitulatif</h2>
              
              <div class="space-y-4 mb-6">
                <div class="flex justify-between">
                  <span class="text-gray-600">Sous-total</span>
                  <span class="font-medium">{{ subtotal.toFixed(2) }} €</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-gray-600">Frais de livraison</span>
                  <span class="font-medium">{{ deliveryFee.toFixed(2) }} €</span>
                </div>
                
                <div class="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-[#592d0c]">
                  <span>Total</span>
                  <span>{{ total.toFixed(2) }} €</span>
                </div>
              </div>
              
              <button 
                @click="placeOrder"
                :disabled="cartItems.length === 0"
                class="w-full bg-[#592d0c] hover:bg-[#7a3f18] text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmer la commande
              </button>
              
              <p class="text-xs text-gray-500 mt-4">
                En passant commande, vous acceptez nos <RouterLink to="/terms" class="text-[#592d0c] underline">Conditions Générales</RouterLink> 
                et notre <RouterLink to="/privacy" class="text-[#592d0c] underline">Politique de Confidentialité</RouterLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-page {
  scroll-behavior: smooth;
}

input:focus, textarea:focus {
  box-shadow: 0 0 0 2px rgba(250, 180, 33, 0.3);
}
</style>