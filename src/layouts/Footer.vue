<script setup>
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-vue-next';

const quickLinks = [
  { name: "Accueil", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Galerie", path: "/gallery" },
  { name: "À Propos", path: "/about" },
  { name: "Contact", path: "/contact" }
];

const openingHours = [
  { day: "Lundi - Vendredi", hours: "7h30 - 19h" },
  { day: "Samedi", hours: "8h - 20h" },
  { day: "Dimanche", hours: "8h - 18h" }
];
</script>

<template>
  <footer class="bg-[#1f0f03] text-white pt-12 pb-6 mt-8">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Logo & Description -->
        <div class="lg:col-span-1">
          <img src="/logo.png" alt="La mie dorée" class="h-12 mb-4">
          <p class="text-gray-300 mb-4">
            Depuis 2010, nous servons des cafés d'exception et des pâtisseries faites maison dans une ambiance chaleureuse.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-[#FAB421] transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-300 hover:text-[#FAB421] transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-300 hover:text-[#FAB421] transition-colors">
              <Twitter class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-[#FAB421]">Liens rapides</h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in quickLinks" :key="index">
              <RouterLink 
                :to="link.path" 
                class="text-gray-300 hover:text-[#FAB421] transition-colors flex items-center"
              >
                <span class="w-1 h-1 bg-[#FAB421] rounded-full mr-2"></span>
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Horaires -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-[#FAB421]">Horaires</h3>
          <ul class="space-y-3">
            <li v-for="(time, index) in openingHours" :key="index" class="flex items-start">
              <Clock class="text-[#FAB421] w-4 h-4 mt-1 mr-2 flex-shrink-0" />
              <div>
                <p class="font-medium">{{ time.day }}</p>
                <p class="text-gray-300">{{ time.hours }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-[#FAB421]">Contact</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <MapPin class="text-[#FAB421] w-4 h-4 mt-1 mr-2 flex-shrink-0" />
              <span class="text-gray-300">123 Rue du Café, 75000 Cotonou</span>
            </li>
            <li class="flex items-start">
              <Phone class="text-[#FAB421] w-4 h-4 mt-1 mr-2 flex-shrink-0" />
              <span class="text-gray-300">01 23 45 67 89</span>
            </li>
            <li class="flex items-start">
              <Mail class="text-[#FAB421] w-4 h-4 mt-1 mr-2 flex-shrink-0" />
              <span class="text-gray-300">contact@lamiedoree.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-6 mt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {{ new Date().getFullYear() }} La mie dorée. Tous droits réservés.
          </p>
          <div class="flex space-x-4">
            <RouterLink to="/privacy" class="text-gray-400 hover:text-[#FAB421] text-sm transition-colors">
              Politique de confidentialité
            </RouterLink>
            <RouterLink to="/terms" class="text-gray-400 hover:text-[#FAB421] text-sm transition-colors">
              Conditions d'utilisation
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer a.router-link-active {
  @apply text-[#FAB421];
}

/* Animation pour les éléments du footer */
footer li {
  transition: all 0.3s ease;
}

footer li:hover {
  transform: translateX(5px);
}
</style>