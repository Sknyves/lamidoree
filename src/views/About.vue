<script setup>
import { Coffee, Clock, Users, Heart } from 'lucide-vue-next';

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "Fondateur & Barista",
    bio: "Expert en torréfaction avec 15 ans d'expérience dans l'art du café.",
    image: "/team-1.jpg"
  },
  {
    name: "Marie Lambert",
    role: "Cheffe Pâtissière",
    bio: "Créatrice de nos délicieuses pâtisseries faites maison quotidiennement.",
    image: "/team-2.jpg"
  },
  {
    name: "Thomas Martin",
    role: "Gérant",
    bio: "Garant de l'expérience client exceptionnelle qui fait notre réputation.",
    image: "/team-3.jpg"
  }
];

const stats = [
  { value: "2010", label: "Année de création", icon: Clock },
  { value: "500+", label: "Clients quotidiens", icon: Users },
  { value: "100%", label: "Produits artisanaux", icon: Heart },
  { value: "3", label: "Générations de savoir-faire", icon: Coffee }
];
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[500px] flex items-center justify-center">
      <img 
        src="/about-hero.jpg" 
        alt="Notre café" 
        class="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div class="relative z-10 text-center px-4 text-white">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Notre Histoire</h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto">Une passion pour le café et le service depuis 2010</p>
      </div>
    </section>

    <!-- Notre Histoire -->
    <section class="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-[#592d0c] mb-6">D'où venons-nous ?</h2>
          <p class="text-lg text-gray-700 mb-4">
            Fondé en 2010 par Jean Dupont, notre café est né d'une simple passion pour les grains de café 
            et les rencontres humaines. Ce qui n'était au départ qu'un petit kiosque est devenu une institution 
            locale reconnue pour la qualité de ses produits et son ambiance chaleureuse.
          </p>
          <p class="text-lg text-gray-700 mb-4">
            Nous sélectionnons personnellement nos grains auprès de petits producteurs engagés dans une agriculture 
            durable. Chaque tasse que nous servons raconte une histoire - celle des mains qui ont cultivé, récolté 
            et torréfié avec soin.
          </p>
          <p class="text-lg text-gray-700">
            Aujourd'hui, nous sommes fiers d'être bien plus qu'un simple café : un lieu de vie où se créent des 
            souvenirs, où se tissent des liens, le tout autour d'une excellente tasse de café.
          </p>
        </div>
        <div class="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/about-history.jpg" 
            alt="Notre café historique" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-[#592d0c] opacity-20"></div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs -->
    <section class="py-16 bg-[#FFF9F0]">
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-[#592d0c] mb-12 text-center">Nos Valeurs</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
          >
            <component 
              :is="stat.icon" 
              class="h-10 w-10 mx-auto text-[#FAB421] mb-4"
            />
            <h3 class="text-2xl font-bold text-[#592d0c] mb-2">{{ stat.value }}</h3>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Équipe -->
    <section class="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-[#592d0c] mb-12 text-center">Rencontrez Notre Équipe</h2>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="index"
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-2"
        >
          <img 
            :src="member.image" 
            :alt="member.name" 
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-[#592d0c]">{{ member.name }}</h3>
            <p class="text-[#FAB421] font-medium mb-3">{{ member.role }}</p>
            <p class="text-gray-600">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-[#592d0c] text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Prêt à découvrir notre univers ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Que vous soyez amateur de café ou simplement à la recherche d'un lieu accueillant, 
          nous avons hâte de vous accueillir.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <RouterLink 
            to="/contact" 
            class="bg-[#FAB421] hover:bg-[#e6a11d] text-[#592d0c] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Nous contacter
          </RouterLink>
          <RouterLink 
            to="/menu" 
            class="bg-transparent hover:bg-white/10 border border-white px-8 py-3 rounded-lg transition-colors"
          >
            Voir notre menu
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  scroll-behavior: smooth;
}

/* Animation douce pour les éléments de l'équipe */
.team-member-enter-active,
.team-member-leave-active {
  transition: all 0.5s ease;
}
.team-member-enter-from,
.team-member-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>