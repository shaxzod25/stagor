<template>
    <div class="like container" v-if="likedProducts.length != 0">
      <RouterLink to="/" class="path">Home / <span>Like</span></RouterLink>
  
      <div class="interes__products" v-if="likedProducts.length != 0">
        <div class="all__interes_products">
          <div class="interes__product" v-for="product in likedProducts">
            <RouterLink
              :to="`/productCard/${product.id}`"
              @click="openProduct(product.id)"
            >
              <img :src="product.thumbnail" alt="" />
            </RouterLink>
            <h2 class="interes__product-title">
              {{ product.title }}
            </h2>
            <p class="interes__product-price">{{ product.price }}.00$</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="else" v-else>
      <h1 class="bomj">У вас нету избранных товаров. <br> Не бойтесь тратить деньги. <br> Закажите товар от 'ClickShop' </h1>
      <a href="/#categories">Добавить товар в избранное</a>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useProductStore } from "../stores/products.js";
  const productStore = useProductStore();
  
  const likedProducts = computed(() => productStore.getLikedProducts);
  console.log(likedProducts.value);
  </script>
  
  <style lang="scss" scoped></style>
  