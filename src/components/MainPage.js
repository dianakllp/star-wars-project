import CardList from "./CardList";
import MoviesList from "./MoviesList";
import theme from "../theme";
import { Button, Grid, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { IoPlanetOutline } from "react-icons/io5";
import { LiaJediOrder } from "react-icons/lia";
import { TbMovie } from "react-icons/tb";
import { useState } from "react";

const MainPage = () => {
  const charactersHeader = "Choose the character";
  const planetsHeader = "Choose the planet";
  const moviesHeader = "Movie List";
  const charactersDescription =
    "*the character is an individual person or character within the Star Wars universe.";
  const planetsDescription =
    "*the planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.";
  const moviesDescription = "*list of films where both selections appear";

  const [charactersInfo, setCharactersInfo] = useState([]);
  const [planetsInfo, setPlanetsInfo] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [moviesNames, setMoviesNames] = useState([]);

  let foundCharactersMovies = [];
  let foundPlanetsMovies = [];

  async function loadCharactersData() {
    let allData = [];
    let url = "https://swapi.dev/api/people/";

    while (url) {
      const response = await fetch(url);
      const body = await response.json();
      console.log(allData)
      allData = allData.concat(body.results);
      url = body.next;
    }
    setCharactersInfo(allData);
  }

  async function loadPlanetsData() {
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

  const handleCharactersRadioChange = (event) => {
    setSelectedCharacter(event.target.value);
  };

  const handlePlanetsRadioChange = (event) => {
    setSelectedPlanet(event.target.value);
  };

  const movieHandler = () => {
    for (let j = 0; j < charactersInfo.length; j++) {
      if (selectedCharacter === charactersInfo[j].name) {
        foundCharactersMovies = charactersInfo[j].films;
        console.log(foundCharactersMovies);
      }
    }

    for (let i = 0; i < planetsInfo.length; i++) {
      if (selectedPlanet === planetsInfo[i].name) {
        foundPlanetsMovies = planetsInfo[i].films;
        console.log(foundPlanetsMovies);
      }
    }
    sameMoviesFiler();
  };

  const sameMoviesFiler = () => {
    const filteredMovies = foundCharactersMovies.filter((value) =>
      foundPlanetsMovies.includes(value)
    );
    setMoviesData(filteredMovies);
    moviesList();
  };

  function moviesList() {
    for (let i = 0; i < moviesData.length; i++) {
      fetch(moviesData[i])
      .then((response) => {
        return response.json();
        
      }).then((movie) => {
        const objTitle = {
          name: movie.title,
        }
        setMoviesNames((prevState) => {
          // prevState.push(movie);

          // prevState = ['movie1', 'movie2'];
          // ...prevState === 'movie1', 'movie2'

          return [...prevState, objTitle];
        }); 
      });
    };
  }

  const style = {
    width: "25.75rem",
    borderRadius: "28px",
    border: "2px solid #FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  useEffect(() => {
    loadCharactersData();
    loadPlanetsData();
    sameMoviesFiler();
    moviesList();
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
              style={style}
              bgColor={theme.palette.primary.main}
              itemsData={charactersInfo}
              header={charactersHeader}
              description={charactersDescription}
              icon={<LiaJediOrder />}
              radioOnChangeHandler={handleCharactersRadioChange}
            ></CardList>
          </Grid>
          <Grid>
            <CardList
              style={style}
              itemsData={planetsInfo}
              header={planetsHeader}
              description={planetsDescription}
              bgColor={theme.palette.secondary.main}
              icon={<IoPlanetOutline />}
              radioOnChangeHandler={handlePlanetsRadioChange}
            ></CardList>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          gridTemplateColumns={"1fr"}
          marginTop={"5rem"}
          marginBottom={"4rem"}
        >
          <Button
            variant="contained"
            onClick={movieHandler}
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: "10px",
            }}
          >
            Search
          </Button>
        </Grid>
        <Grid>
          <MoviesList
            style={style}
            itemsData={moviesNames}
            icon={<TbMovie />}
            header={moviesHeader}
            description={moviesDescription}
          ></MoviesList>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default MainPage;
