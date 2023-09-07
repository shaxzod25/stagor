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
    <Category />
    <div class="opisaniya">
      <div class="opisaniya_wrap">
        <div class="opisaniya_wrap_cristian">
          <h3 class="opisaniya_wrap_cristian_h">Christian Dior Sauvage Parfum</h3>
          <p class="opisaniya_wrap_cristian_p">In winter 2018, the world was presented a stunning new product from the famous perfume brand Christian Dior - Sauvage Eau De Parfum</p>
          
        </div>
        <div class="opisaniya_wrap_iphone">
          <h3 class="opisaniya_wrap_iphone_h">iPhone 14</h3>
          <p class="opisaniya_wrap_iphone_p">The updated iPhone 14 is Apple's new smartphone, unveiled at the September 7, 2022 presentation. It received a minimum of new changes, so it features an improved camera and new body colors. It also has satellite communication for emergencies.</p>
          
        </div>
      </div>
    </div>
</template>

<script setup>
import Category from '../views/page/Category.vue';
import { useProductStore } from "../stores/products";
const productStore = useProductStore();

productStore.getProducts()
</script>

<script>
      // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//import 'swiper/css/navigation';



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
  width: 627px;
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