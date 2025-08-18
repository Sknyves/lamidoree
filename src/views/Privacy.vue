<script setup>
import { ArrowLeft, Shield } from 'lucide-vue-next';
</script>

<template>
  <div class="privacy-page bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-[250px] md:h-[350px] flex items-center justify-center bg-gray-900">
      <img 
        src="/privacy-hero.jpg" 
        alt="Protection des données" 
        class="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div class="relative z-10 text-center px-4 text-white">
        <div class="flex justify-center mb-4">
          <Shield class="w-10 h-10 text-[#FAB421]" />
        </div>
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Politique de confidentialité</h1>
        <RouterLink 
          to="/" 
          class="inline-flex items-center text-white hover:text-[#FAB421] transition-colors"
        >
          <ArrowLeft class="w-5 h-5 mr-1" />
          Retour à l'accueil
        </RouterLink>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
        <div class="prose max-w-none">
          <h2 class="text-2xl font-bold text-[#592d0c] mb-6">Protection de vos données personnelles</h2>
          
          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">1. Collecte des données</h3>
          <p>
            Dans le cadre de l'utilisation de notre site, nous pouvons être amenés à collecter les données suivantes :
          </p>
          <ul>
            <li>Les informations que vous nous fournissez via notre formulaire de contact</li>
            <li>Votre adresse IP et des données de navigation via des cookies</li>
            <li>Vos préférences si vous vous abonnez à notre newsletter</li>
          </ul>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">2. Utilisation des données</h3>
          <p>
            Les informations que nous collectons sont utilisées pour :
          </p>
          <ul>
            <li>Répondre à vos demandes de contact</li>
            <li>Améliorer notre site web et nos services</li>
            <li>Vous informer des actualités de notre café (si vous y avez consenti)</li>
          </ul>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">3. Protection des données</h3>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification ou destruction.
          </p>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">4. Partage des données</h3>
          <p>
            Vos données personnelles ne sont en aucun cas vendues à des tiers. Elles peuvent être partagées avec :
          </p>
          <ul>
            <li>Nos prestataires techniques (hébergeur, service d'email)</li>
            <li>Les autorités si requis par la loi</li>
          </ul>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">5. Cookies</h3>
          <p>
            Notre site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour les refuser.
          </p>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">6. Vos droits</h3>
          <p>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d'accès et de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p class="mt-3">
            Pour exercer ces droits, contactez-nous à : privacy@lecafeartisanal.com
          </p>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">7. Modifications</h3>
          <p>
            Cette politique peut être mise à jour périodiquement. Nous vous invitons à la consulter régulièrement.
          </p>

          <p class="text-gray-500 text-sm mt-8">
            Dernière mise à jour : 01/01/2023
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.privacy-page {
  scroll-behavior: smooth;
}

.prose h3 {
  border-left: 3px solid #FAB421;
  padding-left: 12px;
}

.prose ul {
  list-style-type: none;
  padding-left: 1rem;
}

.prose ul li:before {
  content: "•";
  color: #FAB421;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>