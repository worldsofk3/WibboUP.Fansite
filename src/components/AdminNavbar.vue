<template>
    <nav class="bg-gray-800">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="w-auto h-16 mx-auto" src="@/assets/imgs/logo.png" alt="Logo">
            </div>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10 space-x-4">          
                <button @click="showError" class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Home</button>
                <NuxtLink to="/admin/article-create" class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Créer un article</NuxtLink>
                <NuxtLink to="/admin/article-delete" class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Supprimer un article</NuxtLink>
                <div class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Déconnexion</div>
              </div>
            </div>
          </div>

          <div class="flex -mr-2 md:hidden">
            <button type="button" class="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg class="block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg class="hidden w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
</template>

<script setup>
const { $swal } = useNuxtApp()

const showError = () => {
  $swal.fire({
    title: 'Erreur',
    text: 'Cette page n\'existe pas',
    icon: 'error',
    confirmButtonText: 'OK'
  })
}
</script>
