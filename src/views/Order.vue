<script setup>
import { ShoppingBag, X, Plus, Minus, MapPin, Clock } from 'lucide-vue-next';
import { usePlatsStore } from '@/stores/plats'
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router'

const platsStore = usePlatsStore()
const router = useRouter()

const deliveryOptions = [
  { id: 'pickup', name: 'Retrait sur place', description: 'Venez récupérer votre commande dans notre café', icon: Clock },
  { id: 'delivery', name: 'Livraison', description: 'Nous vous livrons à votre adresse', icon: MapPin }
];

const updateQuantity = (id, action) => {
  platsStore.modifierQuantite(id, action)
};

const removeItem = (id) => {
  platsStore.retirerDuPanier(id)
};

const placeOrder = async () => {
  try {
    // Mettre à jour les informations client dans le store
    platsStore.setInformationsClient({
      nom: platsStore.informationsClient.nom,
      telephone: platsStore.informationsClient.telephone,
      notes: platsStore.informationsClient.notes
    })
    
    // Mettre à jour le mode de livraison
    platsStore.setModeLivraison(platsStore.modeLivraison)
    
    // Mettre à jour l'adresse de livraison si nécessaire
    if (platsStore.modeLivraison === 'delivery') {
      platsStore.setAdresseLivraison(platsStore.adresseLivraison)
    }
    
    // Passer la commande
    const commande = await platsStore.passerCommande()
    
    // Rediriger vers une page de confirmation
    alert('Commande confirmée ! Merci pour votre achat.')
    router.push({ name: 'confirmation', state: { commande } })
  } catch (error) {
    console.error('Erreur lors de la commande:', error)
    alert('Une erreur est survenue lors de la commande. Veuillez réessayer.')
  }
};

onMounted(() => {
  // Charger les données si nécessaire
  if (platsStore.specialites.length === 0) {
    platsStore.chargerSpecialites()
  }
});
</script>

<template>
  <div class="order-page min-h-screen bg-gray-50">
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
              
              <div v-if="platsStore.panier.length > 0">
                <div class="divide-y divide-gray-100">
                  <div v-for="item in platsStore.panier" :key="item.id" class="py-4">
                    <div class="flex">
                      <img :src="item.image" :alt="item.nom" class="w-20 h-20 object-cover rounded-lg mr-4">
                      <div class="flex-1">
                        <div class="flex justify-between">
                          <h3 class="font-medium text-gray-800">{{ item.nom }}</h3>
                          <button @click="removeItem(item.id)" class="text-gray-400 hover:text-red-500">
                            <X class="w-4 h-4" />
                          </button>
                        </div>
                        <p class="text-[#592d0c] font-semibold mt-1">{{ (item.prix * item.quantite).toFixed(2) }} €</p>
                        <div class="flex items-center mt-2">
                          <button 
                            @click="updateQuantity(item.id, 'decrease')"
                            class="text-gray-500 hover:text-[#592d0c] p-1"
                          >
                            <Minus class="w-4 h-4" />
                          </button>
                          <span class="mx-2 w-8 text-center">{{ item.quantite }}</span>
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
                  Voir notre menu
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
                  @click="platsStore.setModeLivraison(option.id)"
                  class="border rounded-lg p-4 cursor-pointer transition-colors"
                  :class="{
                    'border-[#592d0c] bg-[#FFF9F0]': platsStore.modeLivraison === option.id,
                    'border-gray-200 hover:border-[#592d0c]': platsStore.modeLivraison !== option.id
                  }"
                >
                  <div class="flex items-center mb-2">
                    <component :is="option.icon" class="w-5 h-5 mr-2 text-[#FAB421]" />
                    <h3 class="font-bold">{{ option.name }}</h3>
                  </div>
                  <p class="text-sm text-gray-600">{{ option.description }}</p>
                </div>
              </div>
              
              <div v-if="platsStore.modeLivraison === 'delivery'" class="mt-4">
                <label class="block text-gray-700 mb-2">Adresse de livraison</label>
                <input 
                  v-model="platsStore.adresseLivraison"
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
                    v-model="platsStore.informationsClient.nom"
                    type="text" 
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
                  >
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-gray-700 mb-1">Téléphone *</label>
                    <input 
                      v-model="platsStore.informationsClient.telephone"
                      type="tel" 
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
                    >
                  </div>
                </div>
                
                <div>
                  <label class="block text-gray-700 mb-1">Notes supplémentaires (optionnel)</label>
                  <textarea 
                    v-model="platsStore.informationsClient.notes"
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
                  <span class="font-medium">{{ platsStore.totalPanier.toFixed(2) }} €</span>
                </div>
                
                <div class="flex justify-between">
                  <span class="text-gray-600">Frais de livraison</span>
                  <span class="font-medium">{{ platsStore.fraisLivraison.toFixed(2) }} €</span>
                </div>
                
                <div class="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-[#592d0c]">
                  <span>Total</span>
                  <span>{{ platsStore.totalAvecFrais.toFixed(2) }} €</span>
                </div>
              </div>
              
              <button 
                @click="placeOrder"
                :disabled="platsStore.panier.length === 0 || !platsStore.informationsClient.nom || !platsStore.informationsClient.telephone"
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