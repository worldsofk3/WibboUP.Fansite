<template>
    <main class="grid min-h-full px-6 py-24 place-items-center sm:py-32 lg:px-8">
    <img class="w-auto h-20 mx-auto" src="@/assets/imgs/logo.png" alt="Logo">
    <div class="text-center">
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page introuvable</h1>
      <p class="mt-6 text-base leading-7 text-white">Désolé, cette page n'existe pas</p>
      <div class="flex items-center justify-center mt-10 gap-x-6">
        <NuxtLink to="/" class="flex w-full justify-center rounded-md bg-emerald-500  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Retour vers le site</NuxtLink>
      </div>
    </div>
  </main>
</template>