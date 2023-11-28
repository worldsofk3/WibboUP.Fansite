<template>
  <div class="mb-6 bg-[#efefef] xl:h-[60px] h-10 flex items-center rounded-b-md border-b-2 border-[#9f9f9f] box-shadow-type-1">
    <nav class="w-[900px] mx-auto xl:block hidden">
      <BurgerMenu />
      <ul class="flex items-center justify-between w-[57%]">
        <NuxtLink to="/">
          <ButtonNav>
            <img src="@/assets/imgs/user.png"><span class="pl-2 hover:text-[#959595] hover:shadow-[0_2px_rgba(255,255,255,.2)] transition-colors">Home</span>
          </ButtonNav>
        </NuxtLink>

        <div class="relative group flex flex-col items-center">
          <!-- Déroulant, à tester avec cette structure -->
          <ButtonNav>
            <img src="@/assets/imgs/commu.png"><span class="pl-2 hover:text-[#959595] hover:shadow-[0_2px_rgba(255,255,255,.2)] transition-colors cursor-pointer">Communauté</span>
          </ButtonNav>
          <ul class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 py-[10px] group-hover:translate-y-11 dropdown-menu">
            <li class="label-menu">
              Articles
            </li>
            <NuxtLink to="/staff">
              <li class="label-menu">
                Équipe
              </li>
            </NuxtLink>
          </ul>
        </div>

        <NuxtLink to="/">
          <ButtonNav>
            <img src="@/assets/imgs/topme.gif"><span class="pl-2 hover:text-[#959595] hover:shadow-[0_2px_rgba(255,255,255,.2)] transition-colors">Classements</span>
          </ButtonNav>
        </NuxtLink>

        <div class="relative group">
          <!-- Déroulant, à tester avec cette structure -->
          <ButtonNav>
            <img src="@/assets/imgs/support.gif"><span class="pl-2 hover:text-[#959595] hover:shadow-[0_2px_rgba(255,255,255,.2)] transition-colors cursor-pointer">Support</span>
          </ButtonNav>
          <ul class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 py-[10px] group-hover:translate-y-6 dropdown-menu">
            <li class="label-menu">
              Discord
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  </div>
</template>
