<script>
import { ref } from 'vue';

// Define una variable reativa para la lista de tareas, comienza vacia
const tareas = ref([]);

// Define una referencia reactiva para la nueva tarea, comienza vacia
const nuevaTarea = ref('');


// Definimos una función para agregar una nueva tarea
const agregarTarea = () => {
    // Añade el valor de nuevaTarea a la lista
    tareas.value.push(nuevaTarea.value);
    // Limpiar el campo de nueva tarea
    nuevaTarea.value = '';
}

const borrarTarea = (index) => {
    tareas.value.splice(index, 1);
    confirm("Quiere borrar la tarea?")
}

</script>

<template>

    <div class="center-containter">
        <h2>Agregar nuevas tareas</h2>
        <input v-model="nuevaTarea" type="text" @keyup.enter="agregarTarea" placeholder="Añadir tarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borrarTarea(index)">❌</button>
            </li>
        </ul>
    </div>

</template>

<style scoped>

.center-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}
.center-container > input{
    margin-bottom: 10px;
    width: 200px;
    padding: 5;
}

.center-container > ul{
    list-style-type: none;
    padding: 0;
}
.center-container > li{
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    width: 200px;
}

.center-container > button{
    background-color: none;
    border: none;
    cursor: pointer;
}

</style>