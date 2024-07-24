import {ref, watchEffect} from 'vue';
import axios from 'axios';

// Definir las referencias reactivas para los estados

const pokemon = ref(null);

const id = ref(1);

const busqueda = ref('');

// Funcion para buscar un pokemon por ID

const busquedaById = async ( pokemonId ) =>{
    try{
        // Realizamos la solicitud HTTPS utilizando AXIOS
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);

        const data = response.data;

        // Actualizamos la referencia reactivas con los datos del pokemon

        pokemon.value = {
            numero: data.id,
            nombre: data.name,
            img: data.sprites.front_default,
            peso: data.weight
        }

    }catch (error){
        console.error(error)
    }
}

// Ejecuta la busqueda cuando el id cambia
watchEffect(() =>{
    busquedaById(id.value); //Llamamos a la función de busqueda cuando cambia el id
})

const handleAnterior = () =>{
    if(id.value > 1){
        id.value -= 1;
    }
}

const handleSiguiente = () =>{
    id.value += 1
}

const handleSubmit = async () =>{
    if( busqueda.value.length > 2){
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${busqueda.value}`);

            const data = response.data;

            pokemon.value = {
                nombre: data.name,
                img: data.sprites.front_default,
                peso: data.weight
            };
            id.value = data.id
        }catch(error){
            console.error("Error al buscar el pokemon por nombre: ", error)
        }
    }
}

const handleInputChange = (e) =>{
    busqueda.value = e.target.value;
}

export{
    pokemon,
    id,
    busqueda,
    handleAnterior,
    handleSiguiente,
    handleSubmit,
    handleInputChange
}

