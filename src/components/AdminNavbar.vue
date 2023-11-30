<template>
  <nav class="bg-gray-800">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center w-full">
          <div class="flex-shrink-0">
            <img class="w-auto h-16 mx-auto" src="@/assets/imgs/logo.png" alt="Logo">
          </div>
          <div class="hidden w-full md:block">
            <div class="flex items-baseline w-full space-x-4">
              <NuxtLink to="/admin">
                <AdminButtonNav>
                  Accueil
                </AdminButtonNav>
              </NuxtLink>
              <div class="relative group">
                <AdminButtonNav>
                  Utilisateurs
                </AdminButtonNav>
                <MenuAdminNavButton>
                  <li class="p-2 invisible group-hover:visible border-gray-900 border-b hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    <NuxtLink to="/admin/user-create">
                      Créer un utilisateur
                    </NuxtLink>
                  </li>
                  <li class="p-2 invisible group-hover:visible border-gray-900 border-b hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Supprimer un utilisateur
                  </li>
                  <li class="p-2 invisible group-hover:visible rounded-b-md hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Gérer un utilisateur
                  </li>
                </MenuAdminNavButton>
              </div>
              <div class="relative group">
                <AdminButtonNav>
                  Interviews
                </AdminButtonNav>
                <MenuAdminNavButton>
                  <li class="p-2 invisible group-hover:visible border-gray-900 border-b hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Créer une itw
                  </li>
                  <li class="p-2 invisible group-hover:visible border-gray-900 border-b hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Supprimer une itw
                  </li>
                  <li class="p-2 invisible group-hover:visible rounded-b-md hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Gérer une itw
                  </li>
                </MenuAdminNavButton>
              </div>
              <div class="relative group">
                <AdminButtonNav>
                  Articles
                </AdminButtonNav>
                <MenuAdminNavButton>
                  <li class="p-2 invisible group-hover:visible border-gray-900 border-b hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    <NuxtLink to="/admin/article-create">
                      Créer un article
                    </NuxtLink>
                  </li>
                  <li class="p-2 invisible group-hover:visible border-gray-900 border-b hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    <NuxtLink to="/admin/article-delete">
                      Supprimer un article
                    </NuxtLink>
                  </li>
                  <li class="p-2 invisible group-hover:visible rounded-b-md hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Gérer un article
                  </li>
                </MenuAdminNavButton>
              </div>
              <div class="relative group">
                <AdminButtonNav>
                  Dédicaces
                </AdminButtonNav>
                <MenuAdminNavButton>
                  <li class="p-2 invisible group-hover:visible border-gray-900 border-b hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Créer une dédicace
                  </li>
                  <li class="p-2 invisible group-hover:visible border-gray-900 border-b hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Supprimer une dédi
                  </li>
                  <li class="p-2 invisible group-hover:visible rounded-b-md hover:bg-gray-900 hover:text-white transition-colors duration-200">
                    Gérer une dédicace
                  </li>
                </MenuAdminNavButton>
              </div>
            </div>
          </div>
        </div>

        <div class="flex -mr-2 md:hidden">
          <button type="button" class="relative inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <svg
              class="block w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
