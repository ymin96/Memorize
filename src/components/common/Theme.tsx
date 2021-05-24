import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const palette = {
    primary: { main: "#4C85F3" },
    secondary: { main: "#f50057" },
    naver: { main: green[400] },
};

const theme = createMuiTheme({ palette });

export default theme;
