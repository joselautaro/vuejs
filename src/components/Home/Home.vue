<script setup>
import { stock } from '@/productos/productos';
import Contador from '../Contador/Contador.vue';
// Cuando hablamos de archivos "comunes tipo .js, no se pone con llaves {}, caso contrario cuando importamos componentes ejemplo: Contador.vue no va con llaves"
import { ref, onMounted } from 'vue';

// Definimos una referencia para almacenar los datos del stock
const productos = ref([]);

// Se le asigna el valor de true, comenzando activo cuando carga el loading
const isLoading = ref(true)

// onMounted se ejecuta después de que el componente ha sido montado en el DOM

onMounted(() => {
    setTimeout(() => {

        // Asignamos los datos del stock
        productos.value = stock;
        // Cambiamos el estado de carga
        isLoading.value = false;

    }, 1000)

})

</script>

<template>

    <div class="container">

        <!-- Mostramos el indicador de carga, si los datos aún no se han cargado -->
        <div v-if="isLoading" class="loading">Cargando...</div>
        <div v-else v-for="item in productos" :key="item.id" class="card">
            <!-- Mostramos la imagen del producto -->
            <img :src="item.image" alt="image-jpg" class="card-img">
            <div class="card-body">
                <!-- Mostramos la descripción del producto -->
                <h5 class="card-title"> {{ item.description }}</h5>
                <!-- Precio del producto -->
                <p class="card-text">$ {{ item.price }}</p>
                <!-- Categoria del producto -->
                <p class="card-text"> {{ item.category }}</p>
                <!-- Stock del producto -->
                <p class="card-text">Stock: {{ item.stock }}</p>
            </div>
            <Contador></Contador>
        </div>

    </div>


</template>

<style scoped>

.container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.loading{
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
}

.card{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
    width: 200px;
    margin-top: 10px;
}

.card:hover{
    transform: scale(1.05); /*Escala del 105%*/
}

.card-img{
    height: 250px;
    object-fit: cover;
    width: 100%;
}
.card-body{
    padding: 15px;
    text-align: center;
}


.card-title{
    font-size: 18px;
    margin-bottom: 10px;
    color: black;
}

.card-text{
    color: #555;
    font-size: 14px;
    margin-bottom: 5px;
}
</style>