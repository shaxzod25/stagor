<template>
  <div class="categoriya" id="categoriya">
    <main class="main" v-if="paginatedProducts.length != 0">
      <h2 class="categoriya_h">Categories</h2>
      <div class="uls">
        <ul class="categoriya_menu" ref="categoriya container">
          <li
            class="categoriya_menu_list"
            v-for="(item, i) in categories"
            :key="i"
            @click="(close = false), filterGoods(i), setActiveLink(i)"
            :class="{ activeLin: activeLink === i }"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="categoriya_cards container">
        <CardItem
          v-for="(item, index) in sortedItems"
          :key="index"
          :item="item"
        />
      </div>

      <div class="categoriya_cards container" v-show="close">
        <div class="categoriya_cards_card" v-for="product in paginatedProducts">
          <div class="categoriya_cards_card_img">
            <RouterLink
            :to="`/productCard/${product.id}`"
            @click="openProduct(product.id)"
          >
            <img :src="product.thumbnail" alt="" />
          </RouterLink>
          </div>
          

          <p class="categoriya_cards_card_p">{{ product.brand }}</p>
          <span>{{ product.price }}.00$</span>
        </div>
      </div>

      <div class="v-table__pagination">
        <div
          class="page"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="pageClick(page)"
        >
          {{ page }}
        </div>
      </div>
    </main>
    <h1 class="preloader__api" v-else>Loading...</h1>
  </div>
</template>

<script setup>
import { useProductStore } from "../../stores/products";
import { ref, computed, onMounted } from "vue";
import { categories } from "../../categories.js";
import CardItem from "./CardItem.vue";


const activeLink = ref("");

const setActiveLink = (link) => {
  activeLink.value = link;
};
const productStore = useProductStore();



let sortedItems = ref(null);

const filterGoods = (e) => {
  sortedItems.value = productStore.products.filter(
    (item) => item.category == categories[e].toLowerCase()
  );
  
};



const sortType = ref("");
const sortDirection = ref("frg");
const productPerPage = ref(12);
const currentPage = ref(1);
const close = ref(true);
const sortedProducts = computed(() => {
  const products = productStore.products.slice();
  if (sortType.value === "name") {
    return products.sort((a, b) => {
      const nameA = a.brand.toLowerCase();
      const nameB = b.brand.toLowerCase();
      return sortDirection.value === "frg"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  } else if (sortType.value === "laptops") {
    return products.sort((a, b) => {
      return sortDirection.value === "frg"
        ? a.category - b.category
        : b.category - a.category;
    });
  } else if (sortType.value === "price") {
    return products.sort((a, b) => {
      return sortDirection.value === "frg"
        ? a.price - b.price
        : b.price - a.price;
    });
  }
  return products;
});



const totalPages = computed(() =>
  Math.ceil(sortedProducts.value.length / productPerPage.value)
);

const paginatedProducts = computed(() => {
  const from = (currentPage.value - 1) * productPerPage.value;
  const to = from + productPerPage.value;
  return sortedProducts.value.slice(from, to);
});

function openProduct(id) {
  productStore.id = id;
}

function pageClick(page) {
  currentPage.value = page;
}
</script>
