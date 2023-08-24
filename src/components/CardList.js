import React from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  Icon,
  FormControl,
  RadioGroup,
} from "@mui/material";
import theme from "../theme";
import CardListItem from "./CardListItem";

const CardList = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box style={props.cardBoxStyle} bgcolor={props.bgColor}>
          <Icon
            fontSize="medium"
            sx={{
              marginTop: "0.4rem",
              marginBottom: "1rem",
              marginLeft: "10.4rem",
              marginRight: "10.4rem",
            }}
          >
            {props.icon}
          </Icon>
          <Typography
            variant="h5"
            lineHeight={"2rem"}
            letterSpacing={"0.01563rem"}
            textAlign={"center"}
          >
            {props.header}
          </Typography>
          <Typography
            variant="subtitle2"
            letterSpacing={"0.01563rem"}
            textAlign={"center"}
            margin={"0.7rem"}
          >
            {props.description}
          </Typography>

          <div
            style={{
              width: "inherit",
              display: "inline-block",
              padding: "0.75rem",
              overflowY: "scroll",
              height: "23.5rem",
              marginBottom: "1rem",
            }}
          >
            <FormControl sx={{ justifyContent: "end", alignContent: "end" }}>
              <RadioGroup
                sx={{ justifyContent: "end", alignContent: "end" }}
                onChange={props.radioOnChangeHandler}
              >
                {props.itemsData.map((item, index) => {
                  return (
                    <CardListItem key={index} name={item.name} avatar={item.avatar}></CardListItem>
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default CardList;
