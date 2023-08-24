import { Avatar, ThemeProvider, Radio, FormControlLabel } from "@mui/material";
import theme from "../theme";

const CardListItem = (props) => {
  return (

    <div >
      <ThemeProvider theme={theme}>
        <Avatar
          src={props.avatar}
          alt="Avatar"
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
          labelPlacement="start"
          value={props.name}
          label={props.name}
          control={
            <Radio
              sx={{
                color: theme.palette.secondary.contrastText,
                "&.Mui-checked": {
                  color: theme.palette.secondary.dark,
                },
              }}
            />
          }
        ></FormControlLabel>
      </ThemeProvider>
    </div>
  );
};

export default CardListItem;
