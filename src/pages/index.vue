<template>
    <Navbar />
    <section class="grid grid-cols-2 gap-2 sm:w-2/3 mx-auto">
        <div class=" flex flex-col justify-between">
            <div class="col-span-1">
                <div>
                    <img src="https://imaging.wibbo.org/?figure=hr-170-31.hd-209-1359.lg-280-110.sh-3035-110.ch-3030-110.he-3858-110&head_direction=3&gesture=sml" />
                    <div>
                        <p>Python</p>
                        <p>
                            <img src="@/assets/imgs/mottohome.gif" />Python vous souhaite la
                            bienvenue sur notre fansite officiel
                        </p>
                    </div>
                </div>

                    <div>
                        <div>
                            <h4>Version bêta</h4>
                            <p>
                                Notre version bêta débarque et reste temporaire le temps du
                                développement.
                            </p>
                            <a href="#"><button type="button">Lire la suite »</button></a>
                        </div>

                        <div>
                            <h4>Bienvenue sur Wibbo'Up !</h4>
                            <p>Et oui, enfin..</p>
                            <a href="#"><button type="button">Lire la suite »</button></a>
                        </div>
                    </div>

                    <div>
                        <h5>Discord</h5>
                        <iframe
                            src="https://discord.com/widget?id=1170468974992031856&theme=dark"
                            width="350"
                            height="200"
                            allowtransparency="true"
                            frameborder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        ></iframe>
                    </div>
            </div>
            
        </div>
        <div class="col-span-1">
            <div class="flex justify-end">
                <img src="@/assets/imgs/connexion.gif" />
                    <form class="flex flex-col">
                            <label for="username">Espace Staff</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Ton pseudo Wibbo..."
                            />
                            <input
                                id="password"
                                type="password"
                                placeholder="Ton mot de passe..."
                            />
                    </form>
            </div>
        </div>
	</section>
    <Footer />
</template>