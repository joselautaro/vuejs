<script setup>
import { RouterView } from 'vue-router';
import Menu from '../components/Menu/Menu.vue';

</script>

<template>

    <div>
        <Menu></Menu>
        <div class="contenido">
            <RouterView></RouterView>
        </div>
    </div>

</template>

<style scoped>
</style>