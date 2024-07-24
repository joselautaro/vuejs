<script setup>

import {
    pokemon,
    busqueda,
    id,
    handleAnterior,
    handleSiguiente,
    handleInputChange,
    handleSubmit
} from './usePokemon'


</script>

<template>

    <div>
        <form @submit.prevent="handleSubmit">
            <input 
            type="text"
            v-model="busqueda"
            @input="handleInputChange"
            autofocus
            placeholder="Buscar pokemon"
            >
        </form>
        <h2>{{ pokemon.numero}}</h2>
        <h3>{{ pokemon.nombre }}</h3>
        <h4>{{ pokemon.peso }}</h4>
        <img :src="pokemon.img" :alt="pokemon.img">
    </div>
    <button @click="handleAnterior">Anterior</button>
    <button @click="handleSiguiente">Siguiente</button>

</template>

<style scoped>
</style>