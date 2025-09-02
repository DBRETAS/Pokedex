import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Container } from "@mui/system";
import PokemonCard from "../components/PokemonCards";
import { Grid } from "@mui/material";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      let endpoints = [];
      for (var i = 1; i <= 200; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }

      const response = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );

      setPokemons(response);
    } catch (error) {
      console.log("Erro ao capturar os Pokemons:", error);
    }
  };
  const pokemonFilter = (name) => {
    let filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (let i in pokemons) {
      if (pokemons[i].data.name.includes(name.toLowerCase())) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ marginTop: 2 }}
        >
          {pokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
