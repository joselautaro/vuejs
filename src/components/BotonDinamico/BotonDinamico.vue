<script setup>

// Primer paso: tenemos que importar la reactividad de referencia
import { ref } from 'vue';

// Definimos en una variable reactiva
const saludo = ref('Hola Mundo!')

const cambiarSaludo = () => {
    saludo.value = 'Hola, he cambiado'
}

// _______________________________________________________________
// Ejemplo 2
const esVisible = ref(true)

const botonVisible = () => {
    esVisible.value = !esVisible.value;
}

</script>

<template>

    <div class="container">
        <!-- Ejemplo 1 -->
        <!-- Ponemos un evento en un boton y cambia el estado de la etiqueta h1 -->
        <div>
            <button @click="cambiarSaludo">Presioname!</button>
            <h1>{{ saludo }}</h1>
        </div>

        <!-- Ejemplo 2 -->
        <div>
            <button @click="botonVisible">Mostrar u ocultar</button>
            <div v-if="esVisible"> Esto es visible </div>
        </div>
    </div>

</template>

<style scoped>
button {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
}

.container {
    display: flex;
    justify-content: space-around;
}
</style>
