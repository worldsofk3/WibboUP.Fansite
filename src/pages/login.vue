<template>
  <div class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="w-auto h-20 mx-auto" src="@/assets/imgs/logo.png" alt="Logo">
      <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-neutral-50">
        CONNEXION STAFF
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="pseudo" class="block text-sm font-medium leading-6 text-neutral-50">Nom d'utilisateur :</label>
          <div class="mt-2">
            <input id="inputusername" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none" type="text" name="" placeholder="Entre ton nom d'utilisateur">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-neutral-50">Mot de passe :</label>
          </div>
          <div class="mt-2">
            <input id="inputusername" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none" type="text" name="" placeholder="Entre ton mot de passe">
          </div>
        </div>

        <div>
          <NuxtLink to="/admin">
            <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-500  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              S'identifier
            </button>
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
