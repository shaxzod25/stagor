<template>

    <div class="payment__content container">
      <RouterLink to="/" class="path"
        >Home / <span>Payment and delivery</span></RouterLink
      >
      <div class="paument__items"  v-if="orderedProducts.length != 0">
        <div class="payment__in">
          <h2 class="payment__content-title">Billing Address</h2>
          
          <div class="payment__inputs">
            <form action="../telegram.php" class="form" method="post" id="myForm">
              <div class="payment__inputs-items">
                <div class="payment__inputs-items-item">
                  <h3 class="input__title">First Name <span>*</span></h3>
                  <input type="text" class="input__payment" name="user_name" />
                </div>
                <div class="payment__inputs-items-item">
                  <h3 class="input__title">Last Name <span>*</span></h3>
                  <input type="text" class="input__payment" />
                </div>
                <div class="payment__inputs-items-item">
                  <h3 class="input__title">Country / Region <span>*</span></h3>
                  <input
                    type="text"
                    class="input__payment"
                    placeholder="Select a country / region"
                  />
                </div>
                <div class="payment__inputs-items-item">
                  <h3 class="input__title">Town / City <span>*</span></h3>
                  <input type="text" class="input__payment" />
                </div>
                <div class="payment__inputs-items-item">
                  <h3 class="input__title">Street Address <span>*</span></h3>
                  <input
                    type="text"
                    class="input__payment"
                    placeholder="House number and street name"
                  />
                </div>
                <div class="payment__inputs-items-item">
                  <h3 class="input__title"><span>ㅤ</span></h3>
                  <input
                    type="text"
                    class="input__payment"
                    placeholder="Appartment, suite, unit, etc. (optional)"
                  />
                </div>
                <div class="payment__inputs-items-item">
                  <h3 class="input__title">Email address <span>*</span></h3>
                  <input type="text" class="input__payment" placeholder="Email" />
                </div>
                <div class="payment__inputs-items-item">
                  <h3 class="input__title">Phone Number <span>*</span></h3>
                  <select name="phone" class="phone">
                    <option value="value1">+966</option>
                    <option value="value2">+998</option>
                    <option value="value3">+7</option>
                  </select>
                  <input
                    type="text"
                    class="input__payment"
                    placeholder="Phone"
                    style="width: 260px"
                  />
                </div>
              </div>
            </form>
          </div>
         
        </div>
  
        <div class="payment__order">
          <h3 class="payment__order-title">Your Order</h3>
          <div class="payment__orders">
            <h3 class="payment__orders-title">Products</h3>
            <h4 class="payment__orders-title">Subtotal</h4>
          </div>
          <div class="line"></div>
          <div class="scroll">
            <div class="payment__products" v-for="product in orderedProducts" :key="product.id">
            <div class="payment__products-content">
              <img :src="product.thumbnail" alt="" />
              <div class="payment__products-content-sku">
                <h2 class="payment__products-content-sku-title">
                  {{product.title}}
                </h2>
                <p class="payment__products-content-sku-skus">
                  SKU.{{ product.id }}
                </p>
              </div>
              <p class="payment__products-content-total-products">(x{{ product.amount }})</p>
              <h4 class="payment__products-content-total-price">${{ product.totalSum }}.00</h4>
            </div>
          </div>
          </div>
          
          <div class="payment__info">
            <div class="infos">
              <div class="payment__info-content">
                <p class="payment__info-text">Subtotal</p>
                <p class="payment__info-text">${{ !subTotalSum ? 0 : subTotalSum  }}.00</p>
              </div>
              <div class="payment__info-content">
                <p class="payment__info-text">Coupon Discount</p>
                <p class="payment__info-text">(-) 00.00</p>
              </div>
              <div class="payment__info-content">
                <p class="payment__info-text">Shiping</p>
                <p class="payment__info-text">$0.00</p>
              </div>
            </div>
  
            <p class="payment__info-view">View shipping charge</p>
            <div class="line"></div>
            <div class="payment__info-content">
              <p class="payment__info-text">Total</p>
              <p class="payment__info-text"><span>${{ !subTotalSum ? 0 : subTotalSum  }}.00</span></p>
            </div>
            <div class="place__button">
              <button class="btns" @click="closeModal = !closeModal">Place Order</button>
            </div>
          </div> 
          
        </div>
      </div> 
      <LikeElse v-else />
    </div>
    <transition name="modal" v-show="!closeModal"> 
      <div class="final">
        <div class="final__thank">
          <div class="final__img">
            <img src="../assets/img/thanks.png" alt="thank" />
            <img src="../assets/img/close.svg" alt="" @click="closeModal = !closeModal" class="x" />
          </div>
        </div>
        <div class="final__info container">
          <div class="final__infos">
            <h3 class="final__info-order">Order</h3>
            <div class="final__products-info">
              <div class="final__products-info-infos">
                <p class="final__products-info-infos-title">Products</p>
                <p class="final__products-info-infos-title">Qty</p>
                <p class="final__products-info-infos-title">Subtotal</p>
              </div>
              <div class="line"></div>
              <div class="scroll">
                <div class="payment__products-content final__products" v-for="product in orderedProducts" :key="product.id">
                  <img :src="product.thumbnail" alt="" />
                  <div class="payment__products-content-sku final__sku">
                    <h2 class="payment__products-content-sku-title final__title">
                      {{product.title}}
                    </h2>
                    <p class="payment__products-content-sku-skus final__skus">
                      SKU.{{ product.id }}
                    </p>
                  </div>
                  <p class="payment__products-content-total-products">(x{{ product.amount }})</p>
                  <h4 class="payment__products-content-total-price">${{ product.totalSum }}.00</h4>
                </div>
              </div>
            </div>
            <div class="payment__info-content" style="margin-bottom: 15px; margin-top: 15px">
              <p class="payment__info-text">Shipping</p>
              <p class="payment__info-text">$0.00</p>
            </div>
            <div class="line"></div>
            <div class="payment__info-content" style="margin-top: 15px">
              <p class="payment__info-text">Total</p>
              <p class="payment__info-text"><span>${{ !subTotalSum ? 0 : subTotalSum }}.00</span></p>
            </div>
          </div>
        </div>
      </div>
    </transition>
    
    
  
  </template>
  
  <script setup>
  import { useProductStore } from "../stores/products.js";
  import { ref, computed } from "vue";
  import LikeElse from '../views/Like.vue'
  
  const orderedProducts = computed(() => productStore.getOrderedProducts);
  const subTotalSum = computed(() => productStore.getSubTotalSum);
  
  function increase(product){
   product.amount++; 
   product.totalSum = product.price * product.amount;
   product.discountSum = (100 - product.discountPercentage) / 100 * (product.price * product.amount);
  }
  
  function decrease(product){
    if(product.amount > 0){
      product.amount--; 
      product.totalSum = product.price * product.amount;
      product.discountSum = (100 - product.discountPercentage) / 100 * (product.price * product.amount);
    }
  }
  
  function deleteProduct(product){
   product.amount = 0
   product.totalSum = 0
  }
  
  const ModalShow = ref(false)
  
  const closeModal = ref(true)
  
  const productStore = useProductStore();
  
  // productStore.getProducts();
  </script>
<style>

.payment__content-title {
  color: #121211;
  font-family: Questrial-Regular;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin-top: 113px;
  margin-bottom: 84px;
}

.form {
  max-width: 1072px;
}

.payment__inputs-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.payment__inputs-items-item {
  margin-bottom: 65px;
  width: 400px; 
}
.payment__inputs-items-item input {
  width: 390px;
  outline: none;
  border: 1px solid #f0f0f0;
  padding: 15px;
}

.payment__inputs-items-item input::placeholder {
  color: rgba(61, 61, 61, 0.2);
  font-family: Kanit-Light;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.input__title {
  color: #3d3d3d;
  font-family: Questrial-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 20px;
}
.input__title span {
  color: #030a8c;
  font-family: Kanit-Regular;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
}

.phone {
  width: 110px;
  border: 1px solid #f0f0f0;
  outline: none;
  padding: 14px;
  margin-right: 30px;
}

/* .payment__content{
  
} */

.payment__order-title {
  color: #121211;
  font-family: Questrial-Regular;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.25px;
  margin-top: 113px;
  text-transform: uppercase;
}

.payment__order {
  margin-left: 70px;
}

.images {
  width: 110px;
  cursor: pointer;
}

.small__images {
  flex-direction: column;
  margin-top: 40px;
  display: flex;
  gap: 29px;
  margin-right: 70px;
}

.paument__items {
  display: flex;
}
</style>