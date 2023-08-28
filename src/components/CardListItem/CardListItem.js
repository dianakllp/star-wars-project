import { Avatar, ThemeProvider, Radio, FormControlLabel } from "@mui/material";
import theme from "../../theme";
import './cardListItem.css';

const CardListItem = (props) => {
  return (
    <div >
      <ThemeProvider theme={theme}>
        <Avatar
          src={props.avatar}
          alt="Avatar"
          className="avatar"
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
