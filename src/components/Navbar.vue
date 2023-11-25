<template>
    <header>
        <div class="bg-[url('@/assets/imgs/default/back.jpg')] w-full h-[80px] border-b-4 border-[#efefef] opacity-80">
            <div class="xl:w-[930px] mx-auto">
                <div class="flex items-center justify-between px-[8px] relative z-10">
                    <img class="max-w-[100%] h-auto z-10 block border-solid aspect-[0/1] img-pixelated" width="100px" height="100px" src="@/assets/imgs/header/icon_wb.gif" />
                    
                    
                    <button class="flex z-10 w-[198px] h-[42-px] pl-3 pt-2 pr-2 pb-2 rounded admin-button-shadow" type="button">
                        <img src="@/assets/imgs/theatre_lights_icon.png" class="z-20" />
                        <span class="xl:pl-6 pl-4 text-white text-base z-10">Administration</span>
                    </button>
                </div>
            </div>
        </div>
            <div class="mb-6 bg-[#efefef] xl:h-[60px] h-10 flex items-center rounded-b-md border-b-2 border-[#9f9f9f] box-shadow-type-1">
                <nav class="w-[900px] mx-auto xl:block hidden">
                    <BurgerMenu />
                    <ul class="flex items-center justify-between w-[57%]">
                        <a href="#">
                            <ButtonNav>
                                <img src="@/assets/imgs/user.png" /><span class="pl-2 hover:text-[#959595] hover:shadow-[0_2px_rgba(255,255,255,.2)] transition-colors">Home</span>
                            </ButtonNav>
                        </a>

                        <div class="group">
                            <!-- Déroulant, à tester avec cette structure -->
                            <ButtonNav>
                                <img src="@/assets/imgs/commu.png" /><span class="pl-2 hover:text-[#959595] hover:shadow-[0_2px_rgba(255,255,255,.2)] transition-colors cursor-pointer">Communauté</span>
                            </ButtonNav>
                            <ul class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 py-[10px] group-hover:translate-y-6 dropdown-menu">
                                <li class="label-menu">Articles</li>
                                <li class="label-menu">Équipe</li>
                            </ul>
                        </div>
                        
                        <a href="#">
                            <ButtonNav>
                                <img src="@/assets/imgs/topme.gif" /><span class="pl-2 hover:text-[#959595] hover:shadow-[0_2px_rgba(255,255,255,.2)] transition-colors">Classements</span>
                            </ButtonNav>
                        </a>

                        <div class="group">
                            <!-- Déroulant, à tester avec cette structure -->
                            <ButtonNav>
                                <img src="@/assets/imgs/support.gif" /><span class="pl-2 hover:text-[#959595] hover:shadow-[0_2px_rgba(255,255,255,.2)] transition-colors cursor-pointer">Support</span>
                            </ButtonNav>
                            <ul class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 py-[10px] group-hover:translate-y-6 dropdown-menu">
                                <li class="label-menu">Discord</li>
                            </ul>
                        </div>
                    </ul>
                </nav>
            </div>
	</header>
</template>