<template>
  <div class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="w-auto h-20 mx-auto" src="@/assets/imgs/logo.png" alt="Logo">
      <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-neutral-50">
        CONNEXION STAFF
      </h2>
    </div>

    <div v-for="(message, index) in notifications" :key="'message' + index" class="text-center" :class="isSuccess ? 'text-green-700' : 'text-red-500'">
      {{ message }}
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label for="inputusername" class="block text-sm font-medium leading-6 text-neutral-50">Nom d'utilisateur :</label>
          <div class="mt-2">
            <input v-model="loginForm.name" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none" type="text" placeholder="Entre ton nom d'utilisateur">
          </div>
        </div>

        <div>
          <label for="inputpassword" class="block text-sm font-medium leading-6 text-neutral-50">Mot de passe :</label>
          <div class="mt-2">
            <input v-model="loginForm.password" class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none" type="password" placeholder="Entre ton mot de passe">
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            S'identifier
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loginForm = ref({ name: '', password: '' })
const errorMessage = ref('')
const { notifications, isSuccess, showMessage } = useNotification()

const login = async () => {
  try {
    if (!loginForm.value.name || !loginForm.value.password) {
      throw new Error('Merci de saisir un nom d\'utilisateur et un mot de passe')
    }

    const token = await useApiFetch<{ value: string }>('/api/auth', { method: 'POST', body: loginForm.value })

    console.log('Token reçu:', token.data.value)
    showMessage({ message: 'Connexion reussie: ' + token.data.value, success: true })
  } catch (error) {
    if (error instanceof Error) {
      errorMessage.value = error.message
    }
  }
}
</script>
