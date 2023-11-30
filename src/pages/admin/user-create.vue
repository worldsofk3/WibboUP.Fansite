<template>
  <div class="grid grid-cols-8 grid-rows-6 gap-4 min-h-full container">
    <div class="border-b-2 border-gray-100 rounded-md col-start-2 col-span-6 flex items-center justify-center text-5xl">
      <h2 class="text-white">
        CRÉER UN NOUVEL UTILISATEUR
      </h2>
    </div>
    <form class="col-start-2 col-span-6 row-start-2 row-span-2 grid grid-cols-2 gap-4">
      <div class="col-span-1 flex flex-col">
        <label for="username">Entre le nom d'utilisateur :</label>
        <input id="username" type="text" placeholder="Nom d'utilisateur">
      </div>
      <div class="col-span-1 flex flex-col">
        <label for="function">Entre la fonction :</label>
        <input id="function" type="text" placeholder="Fonction">
      </div>
      <div class="col-span-1 flex flex-col">
        <label for="look">Entre le look :</label>
        <input id="look" type="text" placeholder="Look (ex:)">
      </div>
      <div class="col-span-1 flex flex-col">
        <label for="rank">Entre le rank :</label>
        <select id="rank" name="rank" class="mt-1 block w-full">
          <option value="1">
            Choix 1
          </option>
          <option value="2">
            Choix 2
          </option>
          <option value="3">
            Choix 3
          </option>
          <option value="4">
            Choix 4
          </option>
        </select>
      </div>
      <div class="col-span-2 flex items-center justify-center bg-white">
        <input type="submit" value="CRÉER">
      </div>
    </form>
  </div>
</template>
<script setup>
definePageMeta({ layout: 'admin' })
</script>
