<script setup>
import { CheckCircle, Clock, MapPin } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const commande = ref(null);

onMounted(() => {
  // Récupérer les données de la commande depuis l'état de la route
  if (route.state && route.state.commande) {
    commande.value = route.state.commande;
  } else {
    // Rediriger vers la page d'accueil si aucune commande n'est trouvée
    window.location.href = '/';
  }
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-2xl mx-auto px-4">
      <div class="text-center mb-8">
        <CheckCircle class="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 class="text-3xl font-bold text-[#592d0c] mb-2">Commande Confirmée !</h1>
        <p class="text-gray-600">Merci pour votre commande. Voici le récapitulatif :</p>
      </div>

      <div v-if="commande" class="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 class="text-xl font-bold text-[#592d0c] mb-4">Récapitulatif de la commande</h2>
        
        <div class="mb-6">
          <h3 class="font-semibold text-gray-800 mb-2">Informations de livraison</h3>
          <div class="flex items-center mb-2">
            <component 
              :is="commande.modeLivraison === 'delivery' ? MapPin : Clock" 
              class="w-5 h-5 mr-2 text-[#FAB421]" 
            />
            <span>
              {{ commande.modeLivraison === 'delivery' ? 'Livraison à domicile' : 'Retrait sur place' }}
            </span>
          </div>
          <p v-if="commande.modeLivraison === 'delivery'" class="text-gray-600 ml-7">
            {{ commande.adresseLivraison }}
          </p>
        </div>

        <div class="mb-6">
          <h3 class="font-semibold text-gray-800 mb-2">Articles commandés</h3>
          <div class="divide-y divide-gray-100">
            <div v-for="item in commande.items" :key="item.id" class="py-3">
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-medium">{{ item.nom }}</p>
                  <p class="text-sm text-gray-600">Quantité: {{ item.quantite }}</p>
                </div>
                <p class="font-semibold">{{ (item.prix * item.quantite).toFixed(2) }} €</p>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-4">
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Sous-total</span>
            <span class="font-medium">{{ commande.total - commande.items.reduce((acc, item) => acc + (item.prix * item.quantite), 0) > 0 ? (commande.total - 2.5).toFixed(2) : commande.total.toFixed(2) }} €</span>
          </div>
          <div v-if="commande.modeLivraison === 'delivery'" class="flex justify-between mb-2">
            <span class="text-gray-600">Frais de livraison</span>
            <span class="font-medium">2.50 €</span>
          </div>
          <div class="flex justify-between text-lg font-bold text-[#592d0c]">
            <span>Total</span>
            <span>{{ commande.total.toFixed(2) }} €</span>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 class="text-xl font-bold text-[#592d0c] mb-4">Prochaines étapes</h2>
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="bg-[#FAB421] rounded-full p-2 mr-4">
              <Clock class="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 class="font-semibold">Temps de préparation</h3>
              <p class="text-gray-600">Votre commande sera prête dans environ 20-30 minutes.</p>
            </div>
          </div>
          
          <div v-if="commande && commande.modeLivraison === 'delivery'" class="flex items-start">
            <div class="bg-[#FAB421] rounded-full p-2 mr-4">
              <MapPin class="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 class="font-semibold">Livraison</h3>
              <p class="text-gray-600">Notre livreur vous apportera votre commande à l'adresse indiquée.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <RouterLink 
          to="/"
          class="inline-block bg-[#592d0c] hover:bg-[#7a3f18] text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Retour à l'accueil
        </RouterLink>
      </div>
    </div>
  </div>
</template>