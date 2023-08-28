import React from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  Icon,
  FormControl,
  RadioGroup,
} from "@mui/material";
import theme from "../../theme";
import CardListItem from "../CardListItem/CardListItem";
import "./cardList.css";

const CardList = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="card-box-style" bgcolor={props.bgColor}>
          <Icon fontSize="medium" className="box-icon">
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

          <div className="items-container">
            <FormControl sx={{ justifyContent: "end", alignContent: "end" }}>
              <RadioGroup
                onChange={props.radioOnChangeHandler}
              >
                {props.itemsData.map((item, index) => {
                  return (
                    <CardListItem
                      key={index}
                      name={item.name}
                      avatar={item.avatar}
                    ></CardListItem>
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
