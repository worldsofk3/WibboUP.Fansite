<template>
    <div class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="w-auto h-20 mx-auto" src="@/assets/imgs/logo.png" alt="Logo">
      <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-neutral-50">Administration</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="pseudo" class="block text-sm font-medium leading-6 text-neutral-50">Pseudo :</label>
          <div class="mt-2">
            <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none" type="text" id="inputusername" name="" placeholder="Pseudonyme">
          </div>
        </div>

        <div>
            <label for="email" class="block text-sm font-medium leading-6 text-neutral-50">Adresse mail :</label>
            <div class="mt-2">
              <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none" type="text" id="inputusername" name="" placeholder="Adresse mail">
            </div>
          </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-neutral-50">Mot de passe :</label>
          </div>
          <div class="mt-2">
            <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none" type="text" id="inputusername" name="" placeholder="Mot de passe">
          </div>
        </div>

        <div>
            <div class="flex items-center justify-between">
              <label for="password2" class="block text-sm font-medium leading-6 text-neutral-50">Mot de passe :</label>
            </div>
            <div class="mt-2">
              <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none" type="text" id="inputusername" name="" placeholder="Confirmez votre mot de passe">
            </div>
          </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-500  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Valider</button>
        </div>
      </form>
    </div>
  </div>
</template>