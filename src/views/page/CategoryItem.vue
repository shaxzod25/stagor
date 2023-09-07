<template>
    <div class="main__product">
      <RouterLink
        :to="`/productCard/${props.item.id}`"
        @click="openProduct(props.item.id)"
      >
        <img :src="props.item.thumbnail" alt="" />
      </RouterLink>

      <p class="main__product-text">{{ props.item.brand }}</p>
      <span>{{ props.item.price }}.00$</span>
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
