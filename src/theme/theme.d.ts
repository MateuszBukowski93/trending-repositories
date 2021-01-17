import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      tertiary: string;
      gray: string;
      grayLight: string;
      grayDark: string;
      white: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    screenSizeWidth: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    borderRadius: string;
  }
}
