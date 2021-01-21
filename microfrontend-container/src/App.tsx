import React from "react";
import ReactDOM from "react-dom";
import {
  extendTheme,
  ChakraProvider,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import "./index.css";

import ComponentA from "microfrontenda/ComponentA";
import ComponentB from "microfrontendb/ComponentB";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
const customTheme = extendTheme({ config });

const H3 = ({ children }) => (
  <Text fontSize="xl" mb={3} fontWeight="bold" textAlign="center">
    {children}
  </Text>
);

const App = () => (
  <ChakraProvider theme={customTheme}>
    <SimpleGrid
      columns={2}
      spacing={5}
    >
      <div>
        <H3>Microfrontend A</H3>
        <ComponentA />
      </div>
      <div>
        <H3>Microfrontend B</H3>
        <ComponentB />
      </div>
    </SimpleGrid>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
