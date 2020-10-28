import { Palette } from "@material-ui/core/styles/createPalette";
import { green } from "@material-ui/core/colors";
import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
    interface Theme {
        status: {
            danger: React.CSSProperties["color"];
        };
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties["color"];
        };
    }
}

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        neutral: Palette["primary"];
    }
    interface PaletteOptions {
        neutral: PaletteOptions["primary"];
    }
}

const theme = createMuiTheme({
    status: {
        danger: "#e53e3e",
    },
    palette: {
        neutral: {
            main: "#5c6ac4",
        },
    },
});

export default theme;