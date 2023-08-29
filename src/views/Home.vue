<template>
    <div class="banner"> 
        <div class="banner_wrap">
            <div class="banner_wrap_bts">
                <h1 class="banner_wrap_bts_h1">iPhone 14 Pro Max</h1>
                <button class="banner_wrap_bts_bt">SHOP NOW</button>
            </div>
            <div class="banner_wrap_slider">
                <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="/src/assets/img/iphone.png" alt=""></swiper-slide>
    <swiper-slide><img src="/src/assets/img/iphon13.png" alt=""></swiper-slide>
    <swiper-slide><img src="/src/assets/img/glaxsy.png" alt="">
    </swiper-slide>
    
  </swiper>
            </div>
        </div>
    </div>
    <div class="categoriya">
        <h2 class="categoriya_h">Categories</h2>
        <ul class="categoriya_menu">
            <li class="categoriya_menu_list">
                <a class="categoriya_menu_list_item">Technique</a>
            </li>
            <li class="categoriya_menu_list">
                <a class="categoriya_menu_list_item">Food and drink</a>
            </li>
            <li class="categoriya_menu_list">
                <a class="categoriya_menu_list_item">Perfumery</a>
            </li>
            <li class="categoriya_menu_list">
                <a class="categoriya_menu_list_item">Cosmetics</a>
            </li>
            <li class="categoriya_menu_list">
                <a class="categoriya_menu_list_item">Home Goods</a>
            </li>
        </ul>
        <div class="categoriya_cards">
            <div class="categoriya_cards_card">
                <div class="categoriya_cards_card_img">
                    <i class="fal fa-cart-plus"></i>
                <img  src="/src/assets/img/glaxsy.png" alt="">
                </div>
                <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
                <p class="categoriya_cards_card_p">$119.00</p>
            </div>
            <div class="categoriya_cards_card">
              <div class="categoriya_cards_card_img">
                  <i class="fal fa-cart-plus"></i>
              <img  src="/src/assets/img/glaxsy.png" alt="">
              </div>
              <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
              <p class="categoriya_cards_card_p">$119.00</p>
          </div>
          <div class="categoriya_cards_card">
            <div class="categoriya_cards_card_img">
                <i class="fal fa-cart-plus"></i>
            <img  src="/src/assets/img/glaxsy.png" alt="">
            </div>
            <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
            <p class="categoriya_cards_card_p">$119.00</p>
        </div>
        <div class="categoriya_cards_card">
          <div class="categoriya_cards_card_img">
              <i class="fal fa-cart-plus"></i>
          <img  src="/src/assets/img/glaxsy.png" alt="">
          </div>
          <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
          <p class="categoriya_cards_card_p">$119.00</p>
      </div>
      <div class="categoriya_cards_card">
        <div class="categoriya_cards_card_img">
            <i class="fal fa-cart-plus"></i>
        <img  src="/src/assets/img/glaxsy.png" alt="">
        </div>
        <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
        <p class="categoriya_cards_card_p">$119.00</p>
    </div>
    <div class="categoriya_cards_card">
      <div class="categoriya_cards_card_img">
          <i class="fal fa-cart-plus"></i>
      <img  src="/src/assets/img/glaxsy.png" alt="">
      </div>
      <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
      <p class="categoriya_cards_card_p">$119.00</p>
  </div>
  <div class="categoriya_cards_card">
    <div class="categoriya_cards_card_img">
        <i class="fal fa-cart-plus"></i>
    <img  src="/src/assets/img/glaxsy.png" alt="">
    </div>
    <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
    <p class="categoriya_cards_card_p">$119.00</p>
</div>
<div class="categoriya_cards_card">
  <div class="categoriya_cards_card_img">
      <i class="fal fa-cart-plus"></i>
  <img  src="/src/assets/img/glaxsy.png" alt="">
  </div>
  <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
  <p class="categoriya_cards_card_p">$119.00</p>
</div>
<div class="categoriya_cards_card">
  <div class="categoriya_cards_card_img">
      <i class="fal fa-cart-plus"></i>
  <img  src="/src/assets/img/glaxsy.png" alt="">
  </div>
  <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
  <p class="categoriya_cards_card_p">$119.00</p>
</div>
<div class="categoriya_cards_card">
  <div class="categoriya_cards_card_img">
      <i class="fal fa-cart-plus"></i>
  <img  src="/src/assets/img/glaxsy.png" alt="">
  </div>
  <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
  <p class="categoriya_cards_card_p">$119.00</p>
</div>
<div class="categoriya_cards_card">
  <div class="categoriya_cards_card_img">
      <i class="fal fa-cart-plus"></i>
  <img  src="/src/assets/img/glaxsy.png" alt="">
  </div>
  <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
  <p class="categoriya_cards_card_p">$119.00</p>
</div>
 <div class="categoriya_cards_card">
  <div class="categoriya_cards_card_img">
      <i class="fal fa-cart-plus"></i>
  <img  src="/src/assets/img/glaxsy.png" alt="">
  </div>
  <h3 class="categoriya_cards_card_h">Samsung Galaxy A52 White 128Gb</h3>
  <p class="categoriya_cards_card_p">$119.00</p>
</div>
        </div>
    </div>
    <div class="opisaniya">
      <div class="opisaniya_wrap">
        <div class="opisaniya_wrap_cristian">
          <h3 class="opisaniya_wrap_cristian_h">Christian Dior Sauvage Parfum</h3>
          <p class="opisaniya_wrap_cristian_p">In winter 2018, the world was presented a stunning new product from the famous perfume brand Christian Dior - Sauvage Eau De Parfum</p>
          <img class="opisaniya_wrap_cristian_img" src="/src/assets/img/parfum.png" alt="">
        </div>
        <div class="opisaniya_wrap_iphone">
          <h3 class="opisaniya_wrap_iphone_h">iPhone 14</h3>
          <p class="opisaniya_wrap_iphone_p">The updated iPhone 14 is Apple's new smartphone, unveiled at the September 7, 2022 presentation. It received a minimum of new changes, so it features an improved camera and new body colors. It also has satellite communication for emergencies.</p>
          <img class="opisaniya_wrap_iphone_img" src="/src/assets/img/RIphine.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
      // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style >

.swiper {
  width: 800px;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
 max-width: 600px;
  height: 100%;
  object-fit: cover;
}

</style>