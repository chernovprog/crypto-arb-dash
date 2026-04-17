import { PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';
// Enables TypeScript support for CSS theme variables (theme.vars)
import '@mui/material/themeCssVarsAugmentation';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    action: true;
    nav: true;
    soft: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'thirdParty';
  }

  interface IconButtonPropsVariantOverrides {
    thirdParty: true;
  }
}

declare module '@mui/material/styles' {

  interface TypeText {
    hint?: string;
  }

  interface ButtonActionPalette {
    main: string;
    hover: string;
    active: string;
    contrastText: string;
  }

  interface ButtonNavPalette {
    main: string;
    contrastText: string;
  }

  interface ButtonSoftPalette {
    main: string;
    hover: string;
    contrastText: string;
  }

  interface TableBorder {
    main: string;
    light: string;
    dark: string;
  }

  interface ScrollbarPalette {
    main: string;
    dark: string;
  }

  interface FooterPalette {
    main: string;
  }

  //For use: theme.palette...
  interface Palette {
    components: {
      buttonAction: ButtonActionPalette;
      buttonNav: ButtonNavPalette;
      buttonSoft: ButtonSoftPalette;
    };
    up: PaletteColor;
    down: PaletteColor;
    tableBorder: TableBorder;
    scrollbar: ScrollbarPalette;
    footer: FooterPalette;
  }

  //For configuration: createTheme({ colorSchemes: { light: { palette: ... } } })
  interface PaletteOptions {
    components?: {
      buttonAction?: Partial<ButtonActionPalette>;
      buttonNav?: Partial<ButtonNavPalette>;
      buttonSoft?: Partial<ButtonSoftPalette>;
    };
    up?: SimplePaletteColorOptions;
    down?: SimplePaletteColorOptions;
    tableBorder?: Partial<TableBorder>;
    scrollbar?: Partial<ScrollbarPalette>;
    footer?: Partial<FooterPalette>;
  }
}
