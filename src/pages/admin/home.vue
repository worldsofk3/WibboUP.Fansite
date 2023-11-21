<template>
<div class="min-h-full">
    <main>
      <div class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <button @click="showError">Hello Swalo</button>
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' })

const { $swal } = useNuxtApp()

const showError = () => {
  $swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}
</script>