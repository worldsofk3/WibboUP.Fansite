<template>
  <header class="bg-[url('@/assets/imgs/default/back.jpg')] w-full h-[80px] border-b-4 border-[#efefef] opacity-80">
    <div class="xl:w-[930px] mx-auto">
      <div class="flex items-center justify-between px-[8px] relative z-10">
        <img class="max-w-[100%] h-auto z-10 block border-solid aspect-[0/1] img-pixelated" width="100px" height="100px" src="@/assets/imgs/header/icon_wb.gif">

        <NuxtLink to="/login">
          <button class="flex z-10 w-[198px] h-[42-px] pl-3 pt-2 pr-2 pb-2 rounded admin-button-shadow" type="button">
            <img src="@/assets/imgs/theatre_lights_icon.png" class="z-20">
            <span class="z-10 pl-4 text-base text-white xl:pl-6">Administration</span>
          </button>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
