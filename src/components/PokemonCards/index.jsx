import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip, Stack } from "@mui/material";

// dicionário de cores por tipo
const typeColors = {
  grass: "#78C850",
  poison: "#A040A0",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  flying: "#A890F0",
  normal: "#A8A878",
  electric: "#F8D030",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  ice: "#98D8D8",
  ghost: "#705898",
  dragon: "#7038F8",
};

export default function PokemonCard({ name, image, types }) {
  const firstTypeColor = typeColors[types[0].type.name];

  return (
    <Card
      sx={{
        maxWidth: 250,
        backgroundColor: "#d8d8d8",
        textTransform: "capitalize",
        transition: "0.3s", // animação suave
        "&:hover": {
          backgroundColor: "white", // cor ao passar o mouse
          border: `5px solid ${firstTypeColor} `, // borda ao passar o mouse
          transform: "scale(1.05)", // aumenta um pouquinho
        },
      }}
    >
      <CardMedia component="img" height={250} image={image} title={name} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={"bold"}
            component="div"
          >
            {name}
          </Typography>
          <Stack direction="row" spacing={1}>
            {types.map((t, index) => {
              const typeName = t.type.name;
              return (
                <Chip
                  key={index}
                  label={typeName}
                  size="small"
                  sx={{
                    backgroundColor: typeColors[typeName],
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                />
              );
            })}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
