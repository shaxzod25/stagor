import { defineStore } from "pinia";
  import axios from "axios";
  
  export const useProductStore = defineStore("productStore", {
    state: () => {
  
      if (localStorage.getItem("productStore")) {
        return JSON.parse(localStorage.getItem("productStore"));
      }
      return {
        products: [],
        id: null,
        totalPrice: null,
        cart: [],
        search: "",
        categories: [],
        orderedProducts: [],
      };
    },
    getters: {
      getProductById: (state) => (id) => {
        return state.products.find((product) => product.id === id);
      },
      getProduct() {
        return this.products.find((product) => product.id == this.id);
      },
      
      getExtraProducts() {
        let currentProduct = this.products.find(
          (product) => product.id == this.id
        );
        
        let interesProducts = this.products.filter(
          (product) =>
          product.category == currentProduct.category &&
          product.id != currentProduct.id
        );
        return interesProducts;
      },
      
      getLikedProducts() {
        let likedProducts = this.products.filter((product) => product.liked == true);
        return likedProducts;
      },
      getOrderedProducts() {
        let orderedProducts = this.products.filter(
          (product) => product.amount && product.amount != 0
        );
        return orderedProducts;
      },
      getSubTotalSum() {
        let subTotalSum = 0;
        for (let x = 0; x < this.products.length; x++) {
          subTotalSum += this.products[x].totalSum;
        }
        return subTotalSum;
      },
      getTotalQuantity() {
        let totalQuantity = 0;
        for (let j = 0; j < this.products.length; j++) {
          if (this.products[j].amount != undefined) {
            totalQuantity += this.products[j].amount;
          } else {
            totalQuantity = 0
          }
        }
        console.log(totalQuantity);
        return totalQuantity;
      },
      
    },
    actions: {
      async getProducts() {
        try {
          let response = await axios.get(
            `https://dummyjson.com/products/?&limit=48`
          );
          this.products = response.data.products;
          for (let i = 0; i < this.products.length; i++) {
            //  
            this.products[i].amount = JSON.parse(localStorage.getItem("productStore")).products[i].amount == undefined ? 0 : JSON.parse(localStorage.getItem("productStore")).products[i].amount
            // 
            this.products[i].totalSum = JSON.parse(localStorage.getItem("productStore")).products[i].totalSum == undefined ? 0 : JSON.parse(localStorage.getItem("productStore")).products[i].totalSum
            // 
            this.products[i].discountSum = JSON.parse(localStorage.getItem("productStore")).products[i].discountSum == undefined ? 0 : JSON.parse(localStorage.getItem("productStore")).products[i].discountSum
            // 
            this.products[i].liked = JSON.parse(localStorage.getItem("productStore")).products[i].liked;
          }
  
        } catch (error) {
          console.error(error);
        }
      },
    },
  });