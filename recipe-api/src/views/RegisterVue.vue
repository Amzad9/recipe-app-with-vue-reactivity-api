<script setup>
import { ref, onMounted } from "vue";
import { useRoute,useRouter } from "vue-router";
const name = ref("");
const email = ref("");
const mobile = ref("");
const error = ref(false);
const registerInfo = ref([]);
 const router = useRouter();
const signUpButtonPressed = () => {
  if (localStorage.getItem("register")) {
    const registerUser = JSON.parse(localStorage.getItem("register"));
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
      localStorage.setItem("register", JSON.stringify(registerInfo.value));
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
</script>
<template>
  <div class="container mt-5 py-5">
    <form action="" @submit.prevent="signUpButtonPressed">
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

          <p v-if="error === true">Please enter user name</p>
          <p v-if="error === true">User alrady Exits</p>
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