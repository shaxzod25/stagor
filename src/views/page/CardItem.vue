<template>
    
    <div class="categoriya_cards_card">
      <div class="icon-img">
          <img src="/src/assets/img/like.svg" alt="">
         </div> 
      <RouterLink
        :to="`/productCard/${props.item.id}`"
        @click="openProduct(props.item.id)"
      >
      <div class="categoriya_cards_card_img">
        <img :src="props.item.thumbnail" alt="" />
      </div>
         
      </RouterLink>
          <p class="categoriya_cards_card_h">{{ props.item.brand }}</p>
           <span >{{ props.item.price }}.00$</span>
          
           
       
     
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "../../stores/products";

const productStore = useProductStore();
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

function openProduct(id) {
  productStore.id = id;
}
onMounted(() => {});
</script>
