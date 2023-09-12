<template>
    <div class="product__card container">
      <RouterLink to="/" class="path"
        >Home / <span>Product Card</span></RouterLink
      >
      <div class="Models">
          <div class="Models__small">
          <div class="Models__small__imagess" v-for="image in images" @click="changeImg(image)">
            <img :src="image" alt="small" class="images" :class="{ activeImg: activeLink === image }" @click="setActiveLink(image)" />
          </div>
        </div>
        <div class="Models_product">
          <img :src="activeImg" alt="" class="img" />
        </div>
        
        
        <div class="Models__info">
          <h1 class="Models__info-title">{{ getProduct().title }}</h1>
          <p class="Models__info-price">{{ getProduct().price }}.00$</p>
          <h2 class="Models__info-title2">Product description</h2>
          <p class="Models__info-leor">{{ getProduct().description }}</p>
          <div class="Models__info_bask">
            <div class="Models__info_bask_btns">
              <button class="Models__info_bask_btns_btn" @click="decrease(product)">-</button>
              <div class="Models__info_bask_btns_btn_count">
                {{ getProduct().amount > 0 ? getProduct().amount : 0 }}
              </div>
              <button class="Models__info_bask_btns_btn plus" @click="increase(product)">
                +
              </button>
            </div>
            <div class="btn" style="margin-top: 100px; margin-left: 75px">
              <RouterLink to="/Oformpr">
                <button class="btn__log">Buy NOW</button>
              </RouterLink>
            </div>
            <div
              class="liked"
              @click="likeProduct($event, product)"
              style="margin-top: 113px; margin-left: 50px; cursor: pointer"
            >
              <img src="../assets/img/like.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <intercar />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { useProductStore } from "../stores/products";
  import intercar from "../views/page/intercar.vue";
  import { RouterLink } from "vue-router";
  
  const activeLink = ref("");
  
  const setActiveLink = (link) => {
    activeLink.value = link;
  };
  
  const products = computed(() => productStore.products);
  const productStore = useProductStore();
  const images = getProduct().images;
  const count = ref(1);
  
  let activeImg = ref("");
  activeImg.value = getProduct().thumbnail;
  
  function changeImg(img) {
    activeImg.value = img;
    console.log(activeImg);
  }
  
  const incrementCounter = () => {
    count.value++;
  };
  const extraProducts = computed(() => productStore.getExtraProducts);
  const yourImage = () => {};
  const incrementCounters = () => {
    count.value--;
  };
  
  function decrease(product) {
    if (getProduct().amount > 0) {
      getProduct().amount--;
    }
    if (!getProduct().hasOwnProperty("totalSum")) {
      Object.defineProperty(getProduct(), "totalSum", {
        get() {
          return this.price * this.amount;
        },
      });
    }
    localStorage.setItem("productStore", JSON.stringify(productStore));
  }
  
  function increase(product) {
    if (getProduct().amount == undefined) {
      getProduct().amount = 0;
    } else {
      getProduct().amount++;
      if (!getProduct().hasOwnProperty("getTotalSum")) {
        Object.defineProperty(getProduct(), "getTotalSum", {
          get() {
            return this.price * this.amount;
          },
        });
      }
      if (!getProduct().hasOwnProperty("getDiscountSum")) {
        Object.defineProperty(getProduct(), "getDiscountSum", {
          get() {
            return (
              ((100 - this.discountPercentage) / 100) * (this.price * this.amount)
            );
          },
        });
      }
      this.getProduct().totalSum = this.getProduct().getTotalSum;
      this.getProduct().discountSum = this.getProduct().getDiscountSum;
      console.log(getProduct());
      console.log(products);
  
      localStorage.setItem("productStore", JSON.stringify(productStore));
    }
  }
  
  function likeProduct(event, product) {
    event.target.classList.add("active");
    getProduct().liked = !getProduct().liked;
    localStorage.setItem("productStore", JSON.stringify(productStore));
  }
  
  function openProduct(activeImg) {
    productStore.id = activeImg;
  }
  function getProduct() {
    return productStore.products.find(
      (product) => product.id === productStore.id
    );
  }
  </script>
  