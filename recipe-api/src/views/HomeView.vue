<script setup>
import { onMounted, ref } from "vue";
import store from "../store/index.js";
import Button from '../components/Button.vue'
</script>

<template>
  <main class="mt-5 pt-5">
    <div class="container">
      <div class="row mb-4">
        <h1>Popular Recipe</h1>

      </div>
      <div class="row">
    
        
        <div
          class="card col-3 bg-transparent border-0 mb-4"
          v-for="(carts, index) in store.searchFilter.value"
          :key="index"
        >
          <div class="card-body bg-dark shadow-lg flex-column align-items-center">
            <img :src="carts.image" style="max-width: 100%" alt="" />
            <div class="card-body">
              <p class="mb-2">{{ carts.id }}</p>
              <h6 class="fst-italic fw-bold">{{ carts.title }}</h6>
            </div>
          </div>
         <div class="d-flex">
            <Button class="w-100 rounded-0" @click="store.method.addCart(carts)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          </Button>
            <RouterLink :to="{ path: '/details/' + carts.id}" class="w-100">
              <Button class="w-100 rounded-0 bg-info">
                Details
              </Button>
            </RouterLink>
         </div>
          <!-- <button class="btn btn-success" @click="store.method.addCart">
           
            </button> -->

          <!-- <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${carts.image}`" alt=""> -->
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
h1 {
  color: green;

  &:hover {
    color: greenyellow;
  }
}
</style>