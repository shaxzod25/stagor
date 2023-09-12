<template>
  <div class="interes__products">
     <h3 class="interes__products-title">You may be interested in</h3>
     <div class="interes_products">
       <div
         class="interes_products_product"
         v-for="interesProduct in interesProducts"
         :key="interesProduct.id"
       >
       <div class="interes_products_product_img">
        <router-link
           :to="`/productCard/${interesProduct.id}`"
           @click="openProduct(interesProduct.id)"
         >
           <img :src="interesProduct.thumbnail" alt="" />
         </router-link>
       </div>
         
         <h2 class="interes_products_product-title">
           {{ interesProduct.title }}
         </h2>
         <p class="interes_products_product-price">{{ interesProduct.price }}.00$</p>
       </div>
     </div>
   </div>
</template>

<script setup>
import { useProductStore } from "/src/stores/products.js";
import { computed } from "vue";

const productStore = useProductStore();
const interesProducts = computed(() => productStore.getInteresProducts);


function openProduct(id) {
 productStore.id = id;
}
</script>

