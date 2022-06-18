<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const name = ref("");
const email = ref("");
const mobile = ref("");
const route = useRoute();
 const router = useRouter();
console.log(router)

const userLogin = () => {
  if (localStorage.getItem("register")) {
    const registerUser = JSON.parse(localStorage.getItem("register"));
    var currentUser = registerUser.filter((user) =>{
       return user.name === name.value
    });

    console.log("currentUser",currentUser)

    if (currentUser) {
        localStorage.setItem("login",JSON.stringify(currentUser));
     alert("Login");
     router.push('/')
    } else {
      alert("not login");
    }
  }
};
watch(name,()=>{
  console.log(name.value);
})

</script>
<template>
  <div class="container mt-5 py-5">
    <form action="" @submit.prevent="userLogin">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              v-model="name"
              placeholder="Name"
            />
          </div>
           <div class="mb-3">
            <button class="btn btn-primary d-block w-100">Login</button>
          </div>
          </div>
                  <RouterLink to="/register" class="nav-link text-light">Register</RouterLink>

        </div>
    </form>
  </div>
</template>