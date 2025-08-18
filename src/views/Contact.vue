<script setup>
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-vue-next';
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  // Ici vous ajouterez la logique pour envoyer le formulaire
  console.log('Formulaire soumis:', form.value);
  alert('Merci pour votre message ! Nous vous contacterons bientôt.');
  form.value = { name: '', email: '', phone: '', subject: '', message: '' };
};
</script>

<template>
  <div class="contact-page bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-[300px] md:h-[400px] flex items-center justify-center">
      <img 
        src="/contact-hero.jpg" 
        alt="Notre café" 
        class="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div class="relative z-10 text-center px-4 text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nous Contacter</h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto">Une question, une réservation ou juste envie de discuter ?</p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div class="space-y-8">
          <h2 class="text-3xl font-bold text-[#592d0c]">Prenez contact</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-[#FAB421] p-3 rounded-full mr-4">
                <MapPin class="text-white" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Adresse</h3>
                <p class="text-gray-600">123 Rue du Café, 75000 Paris</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-[#FAB421] p-3 rounded-full mr-4">
                <Phone class="text-white" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Téléphone</h3>
                <p class="text-gray-600">01 23 45 67 89</p>
                <p class="text-gray-600">06 12 34 56 78</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-[#FAB421] p-3 rounded-full mr-4">
                <Mail class="text-white" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Email</h3>
                <p class="text-gray-600">contact@lecafeartisanal.com</p>
                <p class="text-gray-600">reservation@lecafeartisanal.com</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="bg-[#FAB421] p-3 rounded-full mr-4">
                <Clock class="text-white" />
              </div>
              <div>
                <h3 class="font-bold text-lg text-gray-800">Horaires</h3>
                <p class="text-gray-600">Lundi - Vendredi: 7h30 - 19h</p>
                <p class="text-gray-600">Samedi - Dimanche: 8h - 20h</p>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <h3 class="font-bold text-lg text-gray-800 mb-4">Suivez-nous</h3>
            <div class="flex space-x-4">
              <a href="#" class="bg-[#592d0c] text-white p-3 rounded-full hover:bg-[#7a3f18] transition-colors">
                <Facebook />
              </a>
              <a href="#" class="bg-[#592d0c] text-white p-3 rounded-full hover:bg-[#7a3f18] transition-colors">
                <Instagram />
              </a>
              <a href="#" class="bg-[#592d0c] text-white p-3 rounded-full hover:bg-[#7a3f18] transition-colors">
                <Twitter />
              </a>
            </div>
          </div>

          <div class="pt-6">
            <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1623257429610!5m2!1sfr!2sfr" 
                width="100%" 
                height="300" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
                class="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Formulaire de contact -->
        <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 class="text-2xl font-bold text-[#592d0c] mb-6">Envoyez-nous un message</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-gray-700 mb-1">Nom complet *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
              >
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="email" class="block text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
                >
              </div>

              <div>
                <label for="phone" class="block text-gray-700 mb-1">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
                >
              </div>
            </div>

            <div>
              <label for="subject" class="block text-gray-700 mb-1">Sujet *</label>
              <select 
                id="subject" 
                v-model="form.subject" 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
              >
                <option value="" disabled selected>Sélectionnez un sujet</option>
                <option value="reservation">Réservation</option>
                <option value="question">Question</option>
                <option value="feedback">Retour d'expérience</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-gray-700 mb-1">Message *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="5"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FAB421] focus:border-[#FAB421] outline-none transition"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full bg-[#592d0c] hover:bg-[#7a3f18] text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-[#592d0c] text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Vous préférez passer nous voir ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Notre équipe sera ravie de vous accueillir dans notre établissement chaleureux.
        </p>
        <RouterLink 
          to="/about" 
          class="inline-block bg-[#FAB421] hover:bg-[#e6a11d] text-[#592d0c] font-bold px-8 py-3 rounded-lg transition-colors"
        >
          Découvrir notre café
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-page {
  scroll-behavior: smooth;
}

/* Animation pour les éléments de contact */
.contact-item {
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-3px);
}

/* Style pour le formulaire */
input:focus, textarea:focus, select:focus {
  box-shadow: 0 0 0 2px rgba(250, 180, 33, 0.3);
}
</style>