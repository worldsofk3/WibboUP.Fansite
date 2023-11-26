<template>
  <section class="grid grid-cols-1 gap-5 xl:grid-cols-2">
    <div class="col-span-1">
      <div class="mb-5 p-1 rounded-md flex items-center justify-evenly overflow-hidden bg-[url('https://images.habbo.com/c_images/catalogue/feature_cata_hort_scifi17bun1.png')]">
        <img class="h-[194px] w-[128px] object-cover img-pixelated border-white-collapse hover:scale-110 transition-transform" src="https://imaging.wibbo.org/?figure=ch-3368-110-1408.hd-180-2.lg-3596-110-1408.he-3082-63.sh-295-110.ca-3177-110-73.cc-3827-1263-1230.wa-5238-1330.ea-1402-73.fa-1201-1408.hr-3871-61&head_direction=3&gesture=sml">

        <div class="text-white bg-[#22222280] w-[374px] h-[148px] p-3 rounded-md">
          <p class="text-3xl">
            Jason
          </p>
          <div class="flex items-center">
            <img class="w-[15px] h-[15px] mr-1" src="@/assets/imgs/mottohome.gif">
            <p class="overflow-auto">
              Développeur de WibboUp !
            </p>
          </div>
        </div>
      </div>

      <div class="bg-[url('@/assets/imgs/index/news.png')] min-h-[250px] mb-5 rounded-md flex flex-col justify-evenly p-10">
        <h4 class="text-xl font-bold text-white">
          Version bêta
        </h4>
        <p class="text-white max-w-[300px]">
          Notre version bêta débarque et reste temporaire le temps du
          développement.
        </p>
        <a href="#"><button type="button" class="text-[#3c3c3c] bg-white p-[5px] border rounded-md text-[12px]">Lire la suite »</button></a>
      </div>
    </div>

    <div class="col-span-1">
      <div class="bg-[#efefef] h-min p-2 rounded-md box-shadow-type-1 border-b-2 border-[#9f9f9f] mb-5">
        <h4 class="bg-[#3d72ab] p-1 w-full text-center text-white rounded-md">
          Wibbo du mois
        </h4>
        <div class="flex items-center">
          <img src="https://imaging.wibbo.org/?figure=ch-3368-110-1408.hd-180-2.lg-3596-110-1408.he-3082-63.sh-295-110.ca-3177-110-73.cc-3827-1263-1230.wa-5238-1330.ea-1402-73.fa-1201-1408.hr-3871-61&direction=2&gesture=sml&size=m">
          <div>
            <p class="text-xs text-[#565656]">
              Le Wibbo du mois de Novembre 2023 est :
            </p>
            <p class="text-3xl text-[#565656] font-bold">
              Jason
            </p>
            <p class="float-right text-xs underline text-[#3d72ab]">
              Voir le classement
            </p>
          </div>
        </div>
      </div>

      <div class="bg-[#efefef] h-min p-2 rounded-md box-shadow-type-1 border-b-2 border-[#9f9f9f] mb-5">
        <h4 class="bg-[#3d72ab] p-1 w-full text-center text-white rounded-md mb-2">
          Discord
        </h4>
        <iframe
          src="https://discord.com/widget?id=1170468974992031856&theme=dark"
          width="284"
          height="200"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
      </div>
    </div>
  </section>
</template>
