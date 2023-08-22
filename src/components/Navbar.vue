<template>
    <div class="nav">
        <div class="nav_logo">
            <img src="/src/assets/img/logo.png" alt="">
        </div>
        <ul class="nav_menu">
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
                <router-link class="nav_menu_list_item" to="/Contacts">Contacts</router-link>
            </li>
        </ul>
        <div class="nav_icon">
            <img src="/src/assets/img/cart.png" alt="">
        </div>
        <button class="nav_button">Login</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>