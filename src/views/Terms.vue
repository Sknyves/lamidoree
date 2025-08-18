<script setup>
import { ArrowLeft } from 'lucide-vue-next';
</script>

<template>
  <div class="terms-page bg-gray-50 min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-[250px] md:h-[350px] flex items-center justify-center bg-gray-900">
      <img 
        src="/terms-hero.jpg" 
        alt="Notre café" 
        class="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div class="relative z-10 text-center px-4 text-white">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Conditions d'utilisation</h1>
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
          <h2 class="text-2xl font-bold text-[#592d0c] mb-6">Conditions générales d'utilisation du site</h2>
          
          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">1. Acceptation des conditions</h3>
          <p>
            L'accès et l'utilisation du site "La mie dorée" sont soumis à l'acceptation et au respect des présentes Conditions Générales d'Utilisation.
          </p>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">2. Services fournis</h3>
          <p>
            Notre site a pour objet de fournir une information concernant l'ensemble des activités de l'établissement "La mie dorée" et permet notamment :
          </p>
          <ul>
            <li>La consultation de notre menu et de nos offres</li>
            <li>La prise de contact avec notre équipe</li>
            <li>La visualisation de notre galerie photos</li>
          </ul>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">3. Propriété intellectuelle</h3>
          <p>
            La structure générale du site, ainsi que les textes, images, photographies et tous autres éléments composant le site sont la propriété exclusive de "La mie dorée". Toute reproduction totale ou partielle sans autorisation expresse est interdite.
          </p>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">4. Responsabilité</h3>
          <p>
            "La mie dorée" ne peut garantir l'exactitude et l'exhaustivité des informations diffusées sur son site. Les photos des produits ne sont pas contractuelles.
          </p>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">5. Modification des conditions</h3>
          <p>
            Nous nous réservons le droit de modifier, à tout moment et sans préavis, les présentes conditions afin de les adapter aux évolutions du site et/ou de son exploitation.
          </p>

          <h3 class="text-xl font-semibold text-[#592d0c] mt-6 mb-3">6. Contact</h3>
          <p>
            Pour toute question relative aux conditions d'utilisation du site, vous pouvez nous contacter à l'adresse email : legal@lecafeartisanal.com
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
.terms-page {
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