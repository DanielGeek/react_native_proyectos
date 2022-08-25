import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';

import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces/pokemonInterfaces";

export const usePokemonSearch = () => {

  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

  const loadPokemons = async() => {

    const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
    mapPokemonList( resp.data.results );
  };

  const mapPokemonList = ( pokemonList: Result[] ) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {

      const urlParts = url.split('/');
      const id = urlParts[ urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`

      return { id, picture, name };

    });

    setSimplePokemonList(newPokemonList);
    setIsFetching(false);

  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    simplePokemonList,
  };

};

