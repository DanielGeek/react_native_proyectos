import { useState, useEffect } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonFull } from '../interfaces/pokemonInterfaces';

export const usePokemon = ( id: string ) => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ pokemon, setPokemon ] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemon = async() => {
    const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${ id }`);
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };

};
