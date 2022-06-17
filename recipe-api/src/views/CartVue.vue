<script setup>
import { onMounted, ref, watchEffect } from "vue";
import store from "../store/index.js";
import Button from '../components/Button.vue'
onMounted(()=>{
  console.log("store.addCartFilter", store.addCartFilter.value)
})
</script>
<template>
    <div class="container mt-5 pt-5">
        <div class="row">
            <div
          class="card col-3 bg-transparent border-0 mb-4"
          v-for="(carts, index) in store.addCartFilter.value"
          :key="index"
        >
          <div class="card-body bg-dark shadow-lg flex-column align-items-center">
            <img :src="carts.image" style="max-width: 100%" alt="" />
            <div class="card-body">
              <p class="mb-2">{{ carts.id }}</p>
              <h6 class="fst-italic fw-bold">{{ carts.title }}</h6>
            </div>
          </div>
          <Button @click="store.method.removeItem(index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
            Remove
          </Button>
        
          <!-- <img :src="`https://spoonacular.com/cdn/ingredients_100x100/${carts.image}`" alt=""> -->
        </div>
        </div>
    </div>
</template>