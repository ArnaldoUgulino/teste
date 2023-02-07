import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      body: {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg: "transaparent",
        fontFamily: "Roboto",
      },
      fonts: {
        heading: `'Roboto', 'Open Sans', sans-serif`,
        body: `'Roboto', 'Open Sans', sans-serif`,
      },
    }),
  },
});
