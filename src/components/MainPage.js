import CardList from "./CardList";
import MoviesList from "./MoviesList";
import LoadingSpinner from "./LoadingSpinner";
import theme from "../theme";
import { Button, Grid, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { IoPlanetOutline } from "react-icons/io5";
import { LiaJediOrder } from "react-icons/lia";
import { TbMovie } from "react-icons/tb";
import { useState } from "react";
import {
  getCharacterAvatarById,
  getPlanetAvatarById,
  getMovieAvatarById,
} from "./Avatars";

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
  const [isLoading, setIsLoading] = useState(false);

  let foundCharactersMovies = [];
  let foundPlanetsMovies = [];

  async function loadCharactersData() {
    let allData = [];
    let url = "https://swapi.dev/api/people/";

    setIsLoading(true);
    while (url) {
      const response = await fetch(url);
      const body = await response.json();
      allData = allData.concat(
        body.results.map((char) => {
          // if(char.url) {
          //   char.avatar = getCharacterAvatarById(
          //     char.url
          //   );
          // }
          // return {char};
          return { ...char, avatar: getCharacterAvatarById(char.url) };
        })
      );

      url = body.next;
    }
    setIsLoading(false);
    setCharactersInfo(allData);
  }

  async function loadPlanetsData() {
    let allData = [];
    let url = "https://swapi.dev/api/planets/";

    while (url) {
      const response = await fetch(url);
      const body = await response.json();
      allData = allData.concat(
        body.results.map((planet) => {
          return { ...planet, avatar: getPlanetAvatarById(planet.url) };
        })
      );
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
    setIsLoading(true);
    for (let j = 0; j < charactersInfo.length; j++) {
      if (selectedCharacter === charactersInfo[j].name) {
        foundCharactersMovies = charactersInfo[j].films;
      }
    }

    for (let i = 0; i < planetsInfo.length; i++) {
      if (selectedPlanet === planetsInfo[i].name) {
        foundPlanetsMovies = planetsInfo[i].films;
      }
    }
    sameMoviesFiler();
  };

  const sameMoviesFiler = () => {
    const filteredMovies = foundCharactersMovies.filter((value) =>
      foundPlanetsMovies.includes(value)
    );
    setMoviesData(filteredMovies);
  };

  useEffect(() => {
    moviesList();
  }, [moviesData]);

  function moviesList() {
    for (let i = 0; i < moviesData.length; i++) {
      fetch(moviesData[i])
        .then((response) => {
          return response.json();
        })
        .then((movie) => {
          const objTitle = {
            name: movie.title,
            avatar: getMovieAvatarById(movie.url),
          };
          setMoviesNames((prevState) => {
            // prevState.push(movie);

            // prevState = ['movie1', 'movie2'];
            // ...prevState === 'movie1', 'movie2'

            return [...prevState, objTitle];
          });
          setIsLoading(false);
        });
    }
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
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <div className={isLoading ? "parentDisable" : ""} width="100%">
            <div className="overlay-box">
              {isLoading ? <LoadingSpinner /> : loadCharactersData}
            </div>
          </div>
          <Grid
            container
            justifyContent={"center"}
            gridTemplateColumns={"1fr 1fr"}
            gap={"5rem"}
          >
            <Grid>
              <CardList
                cardBoxStyle={style}
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
                cardBoxStyle={style}
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
              disabled={isLoading}
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
              spinner={isLoading}
              handler={movieHandler}
              cardBoxStyle={style}
              itemsData={moviesNames}
              icon={<TbMovie />}
              header={moviesHeader}
              description={moviesDescription}
            ></MoviesList>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
};

export default MainPage;
