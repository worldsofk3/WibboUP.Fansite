<template>
  <div id="app" class="h-full bg-cyan-900">
    <TheHeader />
    <TheNavbar />
    <div class="container">
      <slot />
      <TheFooter />
    </div>
  </div>
</template>
