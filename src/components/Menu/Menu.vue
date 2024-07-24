<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>

    <div class="container">
        <nav>
            <!-- Enlaces de navegación utilizando una etiqueta que nos trae el modulo de router -->
             <RouterLink class="boton-menu" to="/"> Inicio </RouterLink>
             <RouterLink class="boton-menu" to="/lista-de-tareas"> Lista de tareas </RouterLink>
             <RouterLink class="boton-menu" to="/boton-dinamico"> Boton Dinamico </RouterLink>
             <RouterLink class="boton-menu" to="/poke"> Poke </RouterLink>
             <RouterLink class="boton-menu" to="/cart"> Carrito </RouterLink>
        </nav>
        <hr>
    </div>

</template>

<style scoped>

nav{
    display: flex;
    justify-content: space-around;
}
nav > .boton-menu{
    color: aliceblue;
    font-size: large;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>