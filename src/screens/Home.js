import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { BaseUrl } from '../constants/urls'
import useRequestData from '../hooks/useRequestData'

const Home = () => {

    useEffect(() => {
        getPokeInfo()
    }, [])


    const [pokedexGringo, setPokedexGringo] = useState([])
    const pokedex = useRequestData({}, "pokemon?limit=30&offset=0")


const getPokeInfo = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
    setPokedexGringo(response.data.results)
}

const teste = pokedexGringo.map(pokemon => {
    return (<Card name={pokemon.name} />)
})



return (
    <div>
        <h1>Home page</h1>
        {teste}
    </div>
)
}
export default Home