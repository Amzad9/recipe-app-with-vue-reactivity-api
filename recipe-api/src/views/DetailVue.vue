<script setup>

  import {watchEffect, ref, watch, onMounted , computed} from 'vue'
  import { useRoute } from 'vue-router'
  const api = import.meta.env.VITE_NYT_API_KEY;

  const route = useRoute();
  const showId = () => {
   alert(route.params.id)
  }
  const name = ref('amjad')
//  console.log(route.params.name);
  const info = ref([]);
  const getProductInfo = async (newId) => {
      const url = await fetch(`https://api.spoonacular.com/recipes/${newId}/information?apiKey=3d4ffd6ab56c413fac64b508fa73aa2d`);
      const  reslt = await url.json();
      info.value = reslt;
      localStorage.setItem("cartView", JSON.stringify(info.value));
      console.log(info.value.image)
      console.log("info.value",info.value)
  }
  
    watch(
      ()=> route.params.id,
      ()=>{
        getProductInfo(route.params.id)
        console.log("=====" + route.params.id)
      },
      { immediate: true }
    )

</script>



<template>
    <div class="container mt-5 py-5">
        <div class="row">
            <div class="col-12">
               <h1>Prodict details</h1>
            </div>
        </div>
         <img :src="info.image" class="img-fluid" alt="">
    </div>
</template>