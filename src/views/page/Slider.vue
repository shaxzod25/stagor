<template>
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
</template>

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

