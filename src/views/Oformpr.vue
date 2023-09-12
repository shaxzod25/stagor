<template>
  <div class="shop__cards container" v-if="orderedProducts.length != 0">
    <RouterLink to="/" class="path">Home / <span>Product Card</span></RouterLink>
    <div class="uls">
      <div class="cardses">
        <div class="shop__cardses">
          <h3 class="shop__cardses-item">Products</h3>
          <h3 class="shop__cardses-item">Price</h3>
          <h3 class="shop__cardses-item">Quantity</h3>
          <h3 class="shop__cardses-item">Total</h3>
        </div>
        <div class="lines"></div>
        <div class="scroll">
          <div class="shop__card" v-for="product in orderedProducts" :key="product.id">
            <div class="shop__card_content">
              <div class="shop__card-img" style="width: 156px">
                <img :src="product.thumbnail" alt="" />
              </div>
              <div class="shop__card-titles">
                <h4 class="shop__card-title">{{ product.title }}</h4>
                <p class="sku">SKU. {{ product.id }}</p>
              </div>
              <p class="shop__card-price">{{ product.price }} .00$</p>
              <div class="basket__btns" style="margin-top: unset">
                <button class="basket__btn" @click="decrease(product)">-</button>
                <div class="basket__count">
                  {{ product.amount > 0 ? product.amount : 0 }}
                </div>
                <button class="basket__btn plus" @click="increase(product)">+</button>
              </div>
              <h3 class="shop__card-total_price">{{ product.totalSum }}.00$</h3>
              <img
                @click="deleteProduct(product)"
                src="../assets/img/dead.svg"
                class="shop__card-delete"
                alt="asd"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="shop__card-total">
        <h3 class="shop__card-total-title">Cart Totals</h3>
        <div class="line"></div>
        <div class="shop__card-total-items">
          <div class="shop__card-total-items-item">
            <h4 class="shop__card-total-items-item-title">Subtotal</h4>
            <p class="shop__card-total-items-item-price">
              ${{ !subTotalSum ? 0 : subTotalSum }}.00
            </p>
          </div>
          <div class="shop__card-total-items-item">
            <h4 class="shop__card-total-items-item-title">Coupon Discount</h4>
            <p class="shop__card-total-items-item-price">(-) 00.00</p>
          </div>
          <div class="shop__card-total-items-item">
            <h4 class="shop__card-total-items-item-title">Shiping</h4>
            <p class="shop__card-total-items-item-price">$0.00</p>
          </div>
          <h2 class="shop__card-total-items-item-price dop">
            <span>View shipping charge</span>
          </h2>
          <div class="line"></div>
          <div class="shop__card-total-items-item">
            <h4 class="shop__card-total-items-item-title">Total</h4>
            <p class="shop__card-total-items-item-price">
              <span>$154.00</span>
            </p>
          </div>
          <div class="shops_btns">
            <RouterLink to="/Paymentanddelivery"><button class="shops_btns_btn">Proceed To Checkout</button></RouterLink>
            <a href="/#categories" class="conshop">Continue Shopping</a>
          </div>
        </div>
      </div>
    </div>
    <Req />
    <div></div>
  </div>
    <LikeElse v-else />
  </template>
  
  <script setup>
  import LikeElse from "../views/Like.vue";
  import Req from "../views/page/intercar.vue";
  import { useProductStore } from "../stores/products";
  import { ref, computed } from "vue";
  
  const productStore = useProductStore();
  const orderedProducts = computed(() => productStore.getOrderedProducts);
  const subTotalSum = computed(() => productStore.getSubTotalSum);
  
  function increase(product) {
    product.amount++;
    product.totalSum = product.price * product.amount;
    product.discountSum =
      ((100 - product.discountPercentage) / 100) * (product.price * product.amount);
    localStorage.setItem("productStore", JSON.stringify(productStore));
  }
  
  
  function decrease(product) {
    if (product.amount > 0) {
      product.amount--;
      product.totalSum = product.price * product.amount;
      product.discountSum =
        ((100 - product.discountPercentage) / 100) * (product.price * product.amount);
    }
    localStorage.setItem("productStore", JSON.stringify(productStore));
  }
  
  function deleteProduct(product) {
    product.amount = 0;
    product.totalSum = 0;
    localStorage.setItem("productStore", JSON.stringify(productStore));
  }
  </script>
  
  <style lang="scss" scoped></style>
  