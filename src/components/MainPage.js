import { Grid, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import CardList from "./CardList";
import theme from "../theme";
import { IoPlanetOutline } from "react-icons/io5";
import { LiaJediOrder } from "react-icons/lia";
import { useState } from "react";

const MainPage = () => {
  const charactersHeader = "Choose the character";
  const planetsHeader = "Choose the planet";
  const charactersDescription =
    "*the character is an individual person or character within the Star Wars universe.";
  const planetsDescription =
    "*the planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.";
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [planetsInfo, setPlanetsInfo] = useState([]);

  async function characterInfoHandler() {
    let allData = [];
    let url = "https://swapi.dev/api/people/";

    while (url) {
      const response = await fetch(url);
      const body = await response.json();
      allData = allData.concat(body.results);
      url = body.next;
    }
    setCharactersInfo(allData);
  }

  async function planetsInfoHandler() {
    let allData = [];
    let url = "https://swapi.dev/api/planets/";

    while (url) {
      const response = await fetch(url);
      const body = await response.json();
      allData = allData.concat(body.results);
      url = body.next;
    }
    setPlanetsInfo(allData);
  }

  useEffect(() => {
    characterInfoHandler();
    planetsInfoHandler();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          justifyContent={"center"}
          gridTemplateColumns={"1fr 1fr"}
          gap={"5rem"}
        >
          <Grid>
            <CardList
              itemsData={charactersInfo}
              header={charactersHeader}
              description={charactersDescription}
              bgColor={theme.palette.primary.main}
              icon={<LiaJediOrder />}
            ></CardList>
          </Grid>
          <Grid>
            <CardList
              itemsData={planetsInfo}
              header={planetsHeader}
              description={planetsDescription}
              bgColor={theme.palette.secondary.main}
              icon={<IoPlanetOutline />}
            ></CardList>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default MainPage;
