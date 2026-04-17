import { alpha, brandPrimary, common, green, neutral, red } from "@/constants/colors";

const primaryColors = {
  main: brandPrimary[500],
  light: brandPrimary[300],
  dark: brandPrimary[700],
  contrastText: neutral[800],
};

export const colorSchemes = {
  light: {
    palette: {
      primary: primaryColors,
      secondary: primaryColors,
      text: {
        primary: neutral[800],
        secondary: neutral[600],
        disabled: neutral[400],
        hint: neutral[300],
      },
      background: {
        default: common.white,
        paper: neutral[100],
      },
      action: {
        active: alpha.actionLight,
      },
      up: {
        main: green[800],
        light: green[500],
        dark: green[900],
        contrastText: common.white,
      },
      down: {
        main: red[700],
        light: red[400],
        dark: red[800],
        contrastText: common.white,
      },
      tableBorder: {
        main: neutral[200],
        light: neutral[100],
        dark: neutral[300],
      },
      components: {
        buttonAction: {
          main: brandPrimary[500],
          hover: brandPrimary[300],
          active: brandPrimary[700],
          contrastText: neutral[800],
        },
        buttonNav: {
          main: neutral[800],
          contrastText: neutral[800],
        },
        buttonSoft: {
          main: neutral[100],
          hover: neutral[200],
          contrastText: neutral[800],
        }
      },
      scrollbar: {
        main: neutral[300],
        dark: neutral[400],
      },
      footer: {
        main: neutral[100],
      },
    },
  },
  dark: {
    palette: {
      primary: primaryColors,
      secondary: primaryColors,
      text: {
        primary: neutral[100],
        secondary: neutral[400],
      },
      background: {
        default: neutral[800],
        paper: neutral[700],
      },
      action: {
        active: alpha.actionDark,
      },
      up: {
        main: green[400],
        light: green[300],
        dark: green[700],
        contrastText: common.black,
      },
      down: {
        main: red[500],
        light: red[300],
        dark: red[700],
        contrastText: common.black,
      },
      components: {
        buttonAction: {
          main: brandPrimary[600],
          hover: brandPrimary[500],
          active: brandPrimary[700],
          contrastText: neutral[800],
        },
        buttonNav: {
          main: neutral[300],
          contrastText: neutral[100],
        },
        buttonSoft: {
          main: neutral[100],
          hover: neutral[200],
          contrastText: neutral[800],
        }
      },
      scrollbar: {
        main: neutral[700],
        dark: neutral[600],
      },
      footer: {
        main: neutral[800],
      },
    }
  }
}
