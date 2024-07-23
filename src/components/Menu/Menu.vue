<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>

    <div class="container">
        <nav>
            <!-- Enlaces de navegación utilizando una etiqueta que nos trae el modulo de router -->
             <RouterLink class="boton-menu" to="/"> Inicio </RouterLink>
             <RouterLink class="boton-menu" to="/contador"> Contador </RouterLink>
             <RouterLink class="boton-menu" to="/lista-de-tareas"> Lista de tareas </RouterLink>
             <RouterLink class="boton-menu" to="/boton-dinamico"> Boton Dinamico </RouterLink>
             <RouterLink class="boton-menu" to="/cart"> Carrito </RouterLink>
        </nav>
    </div>

</template>

<style scoped>
</style>