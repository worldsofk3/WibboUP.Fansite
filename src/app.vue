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

.img-pixelated {
  image-rendering: pixelated;
}

.border-white-collapse {
  filter: drop-shadow(2px 1px 0 #fff)
          drop-shadow(-2px 1px 0 #fff)
          drop-shadow(0 -2px 0 #fff);
}

.box-shadow-type-1 {
  box-shadow: inset 0 -5px rgb(0 0 0/5%),
              inset 0 -30px rgb(0 0 0/1%),
              inset 0 -1px rgb(0 0 0/15%),
              0 4px rgb(0 0 0/5%);
}

.admin-button-shadow {
  box-shadow: 2px 2px 0 0 rgb(0 0 0 / 30%),
              inset 0 -3px 0 0 rgb(0 0 0 / 25%);
  background: #b03e3e;
  border: 1px solid rgba(0,0,0,.3);
}

.admin-button-shadow::before {
    content:"";
    position:absolute;
    width:calc(198px - 10px);
    height:calc(42px - 10px);
    border-radius:3px 3px 0 0;
    margin-left: -8px;
    margin-top: -3px;
    background: linear-gradient(#c45252 50%,transparent 50%);
    z-index: 0;
}

.dropdown-menu {
    background-color: #fff;
    text-shadow: 0 2px rgba(255,255,255,.2);
    text-align: left;
    width: 180px;
    transition: all .3s .1s;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0,0,0,.2), inset 0 -4px rgba(0,0,0,.1), 0 4px rgba(0,0,0,.1);
}

.dropdown-menu::before {
  content: '';
    display: block;
    border-color: transparent transparent #fafafa transparent;
    border-style: solid;
    border-width: 10px;
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -10px;
}

.label-menu {
  color: #565656;
    font-size: 13px;
    padding: 5px 8px 7px 16px;
    display: block;
    transition: background-color .1s;
}

.label-menu:hover {
    background-color: #3d72ab;
    color: #fff;
}
</style>
