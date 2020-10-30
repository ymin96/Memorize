import "@material-ui/core/styles";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        naver: Palette["primary"];
    }
    interface PaletteOptions {
        naver: PaletteOptions["primary"];
    }
}
