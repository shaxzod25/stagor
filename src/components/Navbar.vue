<template>
    <header>
        <div class="nav">
        <div class="nav_logo">
            <img src="/src/assets/img/logo.png" alt="">
        </div>
        <ul class="nav_menu" :class="{ active: burger }">
            <li class="nav_menu-close" @click="burgerOff">
                    <img src="/src/assets/img/close.svg" alt="">
                </li>
            <li class="nav_menu_list">
                <router-link class="nav_menu_list_item" to="/">Home</router-link>  
            </li >
            <li class="nav_menu_list">
                <router-link class="nav_menu_list_item" to="/Productcard">Product card</router-link>
            </li>
            <li class="nav_menu_list">
                <router-link class="nav_menu_list_item" to="/Paymentanddelivery">Payment and delivery</router-link>
            </li>
            <li class="nav_menu_list">
                <router-link @click="scrollToBottom" class="nav_menu_list_item" to="/Contacts">Contacts</router-link>
            </li>
        </ul>
        <div class="nav_btt">
                <router-link to="/Paymentanddelivery">
                    <img src="/src/assets/img/cart.png" alt="">
                </router-link>
            <div class="burger">
                    <img src="/src/assets/img/burger.png" alt="" @click="burgerOn">
                </div>
       
        
        </div>
        
    </div>
    </header>
    
</template>

<script setup>
    import { ref } from 'vue'

function scrollToBottom() {
    let height = document.body.scrollHeight;
    window.scroll(0, height);
    // window.scrollTo({
    //     bottom: 0,
    //     behavior: 'smooth'
    // });
    burger.value = false
}

const burger = ref(false)

const burgerOn = () => {
    burger.value = true
}

const burgerOff = () => {
    burger.value = false
}

</script>

