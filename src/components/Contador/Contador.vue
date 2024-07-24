<script setup>
// Primer paso: tenemos que importar la reactividad de referencia
import { ref } from 'vue';

// Ejemplo 3
const contador = ref(0)

const incrementar = () => {
    // A la variable 
    contador.value++
}
const decrementar = () => {
    if (contador.value > 0) contador.value--
}
</script>

<template>
    <div class="contenedor">
        <!-- Ejemplo 3 -->
        <div class="contador">

            <!-- Crear la funcion para que reste cantidad, pero que cuando llegue a cero, no baje a -1 -->
            <button @click="decrementar">➖</button>
            <span> {{ contador }}</span>
            <button @click="incrementar">➕</button>
        </div>
    </div>

</template>

<style scoped>
.contenedor{
    display: flex;
    justify-content: space-around;
}
span{
    color: black;
}

button {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: dimgray;
}
</style>