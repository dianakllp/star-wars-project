import { Avatar, ThemeProvider, Radio, FormControlLabel } from "@mui/material";
import theme from "../theme";

const CardListItem = (props) => {
  return (
    <div padding={"0.75"}>
      <ThemeProvider theme={theme}>
        <div>
          <Avatar
            sx={{
              display: "inline-block",
              textAlign: "center",
              overflow: "visible",
              marginRight: "0.38rem",
              marginLeft: "0.75rem",
              marginTop: "0.25rem",
              marginBottom: "0.25rem",
            }}
          >
            {props.avatar}
          </Avatar>
          <FormControlLabel
            value={props.name}
            label={props.name}
            control={<Radio />}
            display={"inline-block"}
            alignSelf={"stretch"}
            width={"13.5rem"}
            marginLeft={"1rem"}
          ></FormControlLabel>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default CardListItem;
