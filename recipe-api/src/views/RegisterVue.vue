<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute,useRouter } from "vue-router";
const name = ref("");
const email = ref("");
const mobile = ref("");
const registerInfo = ref([]);
 const router = useRouter();
const signUpButtonPressed = () => {
  if (localStorage.getItem("user")) {
    const registerUser = JSON.parse(localStorage.getItem("user"));
    var currentUser = registerUser.some((user) => user.name === name.value);
    console.log("registerUser.name", registerUser);
    if (name.value == "") {
      alert("User should not empty");
    }
    if (!currentUser) {
      const data = {
        name: name.value,
        email: email.value,
        mobile: mobile.value,
      };
      registerInfo.value.push(data);
      localStorage.setItem("user", JSON.stringify(registerInfo.value));
      alert("Register Successfully");
      router.push("/login");
    } else {
      alert("user Already exits");
    }
  }
};

onMounted(() => {
  if (localStorage.getItem("register")) {
    registerInfo.value = JSON.parse(localStorage.getItem("register"));
  }
});

watch(registerInfo,()=>{
  console.log(registerInfo.value);
})
</script>
<template>
  <div class="container mt-5 py-5">
    <form @submit.prevent="signUpButtonPressed">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              v-model="name"
              placeholder="Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="ztel"
              class="form-control"
              v-model="mobile"
              placeholder="Mobile"
            />
          </div>
          <div class="mb-3">
            <button class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </form>

    {{ name }} == {{ email }} === {{ mobile }}
  </div>
</template>