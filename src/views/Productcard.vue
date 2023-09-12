<template>
    <nav class="product" >
        <div class="product_page">
            <router-link class="product_page_ah" to="/" >Home</router-link> <router-link class="product_page_ap" to="/Productcards">/ Product card</router-link>
        </div>
        <div class="product_wrap">
            <div class="product_wrap_img">
                <div class="product_wrap_img_vidi" v-for="image in images" @click="changeImg(image)"> 
                    <img :src="image" alt="small" class="images" :class="{ activeImg: activeLink === image }" @click="setActiveLink(image)" />
                </div>
                <div class="product_wrap_img_model">
                    <img :src="activeImg" alt="" class="img" />
                </div>
            </div>
            <div class="product_wrap_info">
                <h3 class="product_wrap_info_h1">Samsung GalaxyA52 White 128Gb</h3>
                <div class="product_wrap_info_bts">
                    <p class="product_wrap_info_bts_p1">$119.00</p>
                <p class="product_wrap_info_bts_p">SKU. SNKM10001-001</p>
                </div>
                
                <h3 class="product_wrap_info_h2">Product description</h3>
                <p class="product_wrap_info_pr">SoC Qualcomm Snapdragon 720G, 8 cores (2×Kryo 465 Gold @2.3GHz+ 6×Kryo 465 Silver @1.8GHz)</p>
                 <p class="product_wrap_info_pr">Adreno 618 GPU.</p>  
                  <p class="product_wrap_info_pr">Android 11 operating system, One UI 3.1.</p> 
                  <p class="product_wrap_info_pr">Super AMOLED 6.5″ display, 1080×2400, 20:9, 407 ppi.</p> 
            </div>
        </div>
        <div class="recomend">
            <h3 class="recomend_h">You may be interested in</h3>
            <div class="recomend_cards">
                <div class="recomend_cards_card">
  <div class="recomend_cards_card_img">
      <i class="fal fa-cart-plus"></i>
  <img  src="/src/assets/img/glaxsy.png" alt="">
  </div>
  <h3 class="recomend_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>

  <p class="recomend_cards_card_p">$119.00</p>
                </div>
                <div class="recomend_cards_card">
  <div class="recomend_cards_card_img">
      <i class="fal fa-cart-plus"></i>
  <img  src="/src/assets/img/glaxsy.png" alt="">
  </div>
  <h3 class="recomend_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
  <p class="recomend_cards_card_p">$119.00</p>
                </div>
                <div class="recomend_cards_card">
  <div class="recomend_cards_card_img">
      <i class="fal fa-cart-plus"></i>
  <img  src="/src/assets/img/glaxsy.png" alt="">
  </div>
  <h3 class="recomend_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
  <p class="recomend_cards_card_p">$119.00</p>
                </div>
                
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { ref, computed } from "vue";
import { useProductStore } from "../stores/products";

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

<style lang="scss" scoped>

</style>