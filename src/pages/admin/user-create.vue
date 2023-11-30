<template>
  <div class="grid grid-cols-8 grid-rows-6 gap-4 min-h-full">
    <div class="border-b-2 border-gray-100 rounded-md col-start-2 col-span-6 flex items-center justify-center text-5xl">
      <h2 class="text-white">
        CRÉER UN NOUVEL UTILISATEUR
      </h2>
    </div>
    <form class="row-start-2 col-start-2 col-span-3 row-span-2">
      <label for="username">Entre le nom d'utilisateur :</label>
      <input id="username" type="text" placeholder="Nom d'utilisateur">

      <label for="username">Entre la fonction :</label>
      <input id="username" type="text" placeholder="Fonction">
    </form>
  </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
</script>
