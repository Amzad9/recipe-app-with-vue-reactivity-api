import {reactive, ref ,readonly, onMounted, computed, watchEffect} from 'vue'
const api = import.meta.env.VITE_NYT_API_KEY;


const state = reactive({
  search: '',
  count: 0,
  ingredients: null,
  addCart:[],
  countAddCart: 0,
  user: [], 
});

const method = {
  addCart(cart){
       const getId = JSON.parse(localStorage.getItem('cart'));
       console.log("getId",getId)
       const resId  = getId.find((item) => item.id === cart.id);
       
        console.log("resId===", resId)
      if(resId == undefined){
         
       console.log("cartid", cart.id)
        state.addCart = [...state.addCart, cart]
        localStorage.setItem('cart', JSON.stringify(state.addCart))
       }else{
         alert("Already added");
       }
    },
  removeItem(idx){
     state.addCart = JSON.parse(localStorage.getItem('cart'));
     state.addCart.splice(idx, 1)
     localStorage.setItem('cart', JSON.stringify(state.addCart))
  },
  async fetchData(){
    const check = localStorage.getItem('popularRecipe');
    if(check){
      state.ingredients = JSON.parse(check);
    }else{
      const url = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api}&number=99`);
      const data = await url.json();
      state.ingredients = data.recipes;
      localStorage.setItem('popularRecipe', JSON.stringify(state.ingredients))
    } 
  },
}

// Compute for count add cart

const countLenght = computed( () =>  state.addCart.length)



// Search query
const searchFilter = computed(() => {
  return state.ingredients.filter( item => item.title.toLowerCase().includes(state.search.toLowerCase()))
})

const addCartFilter = computed(()=>{
  return state.addCart.filter( item => item.title.toLowerCase().includes(state.search.toLowerCase()))
})


const grtUser = computed(() => {
  return state.user.filter( (item) => item.name);
})
onMounted( ()=> {
  fetchData();
})


// Watch effect

watchEffect( () => {
  const cart = localStorage.getItem('cart');
  if(cart){
    state.addCart = JSON.parse(cart);
  }
  method.fetchData();


  if(localStorage.getItem('login')){
    state.user = JSON.parse(localStorage.getItem('login'));
  }

  console.log("addCartFilter",addCartFilter.value);

})





export default{
    state,
    searchFilter,
    method,
    countLenght,
    addCartFilter,
}