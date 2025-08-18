<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  button: {  // Note: j'ai corrigé l'orthographe "boutton" -> "button"
    type: Object,
    required: false,
    default: null
  }
})
</script>

<template>
  <div class="relative banner text-white space-y-4 py-24 text-center">
    <h1 class="text-4xl font-bold">
      {{ title }}
    </h1>
    <p v-if="content">
      {{ content }}
    </p>
    
    <!-- Bouton conditionnel -->
    <button 
      v-if="button" 
      class="bg-[#592d0c] p-2 rounded-lg font-bold"
      @click="$emit('button-click', button.action)"
    >
      {{ button.text }}
    </button>
    
    <div class="absolute bottom-0 w-full">
      <img src="/body-bg.png" alt="" class="">
    </div>
  </div>
</template>

<style scoped>
.banner {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/banner-bg.jpg') no-repeat center center/cover;
}
</style>