<template>
    <nav class="product" >
        <div class="product_page">
            <router-link class="product_page_ah" to="/" >Home</router-link> <router-link class="product_page_ap" to="/Productcard">/ Product card</router-link>
        </div>
        <div class="product_wrap">
            <div class="product_wrap_img">
                <div class="product_wrap_img_vidi">
                    <img src="/src/assets/img/prod2.png" alt="">
                    <img src="/src/assets/img/prod3.png" alt="">
                    <img src="/src/assets/img/prod4.png" alt="">
                    <img src="/src/assets/img/prod5.png" alt="">
                    <img src="/src/assets/img/prod6.png" alt="">
                </div>
                <div class="product_wrap_img_model">
                    <img src="/src/assets/img/prod1.png" alt="">
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

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>