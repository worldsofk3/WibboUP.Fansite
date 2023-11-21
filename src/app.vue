<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#__nuxt,
#app {
    overflow-y: overlay;
    height: 100vh;
    width: 100%;
}


::-webkit-scrollbar {
    width: 14px;
}

::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.2);

    &:hover {
        background-color: rgba(255, 255, 255, 0.6);
    }
}
</style>