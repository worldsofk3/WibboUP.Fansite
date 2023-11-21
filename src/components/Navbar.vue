<template>
    <header>
        <div class="bg-[url('@/assets/imgs/default/back.jpg')] w-full border-b-4 border-gray-300">
            <div class="w-2/3 mx-auto">
                <div class="flex h-20 items-center justify-between relative z-10">
                    <img class="w-24 h-auto z-10" src="@/assets/imgs/icon_wb.gif" />
                    
                    
                    <button class="flex z-10 w-52 pl-3 pt-2 pr-2 pb-2 border border-red-950 bg-red-900 rounded shadow-lg" type="button">
                        <img src="@/assets/imgs/theatre_lights_icon.png" />
                        <span class="xl:pl-6 pl-4 text-white text-base">Administration</span>
                    </button>
                </div>
            </div>
        </div>
            <!-- <figure class="h-20 overflow-hidden sticky">
                <img class="opacity-80 w-screen z-0" src="@/assets/imgs/default/back.jpg" />
            </figure> -->
            <div class="bg-white xl:h-16 h-10 flex items-center rounded-b-md border-b-2 border-gray-400 shadow-inner">
                <nav class="w-2/3 mx-auto xl:block hidden">
                    <BurgerMenu />
                    <ul class="flex justify-between w-2/4">
                        <a href="#">
                            <ButtonNav>
                                <img src="@/assets/imgs/user.png" /><span class="pl-2">Home</span>
                            </ButtonNav>
                        </a>

                        <div>
                            <!-- Déroulant, à tester avec cette structure -->
                            <ButtonNav>
                                <img src="@/assets/imgs/commu.png" /><span class="pl-2">Communauté</span>
                            </ButtonNav>
                            <ul class="hidden">
                                <ButtonNav>Articles</ButtonNav>
                                <ButtonNav>Équipe</ButtonNav>
                            </ul>
                        </div>
                        
                        <a href="#">
                            <ButtonNav>
                                <img src="@/assets/imgs/topme.gif" /><span class="pl-2">Sécurité</span>
                            </ButtonNav>
                        </a>

                        <a href="#">
                            <ButtonNav>
                                <img src="@/assets/imgs/support.gif" /><span class="pl-2">Support</span>
                            </ButtonNav>
                        </a>
                    </ul>
                </nav>
            </div>
	</header>
</template>