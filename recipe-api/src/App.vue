<script setup>
import { computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";

  import {RouterView } from "vue-router";
  import Menu from './components/Menu.vue' 
  const route = useRoute();  
  const hide = computed( () => {
     return route.path === "/login" || route.path ==="/register";
  })
</script>

<template>
    <Menu v-if='!$route.meta.hideNavbar'/>
    <RouterView />
</template>
<style>
@import url(./assets/base.css);
</style>