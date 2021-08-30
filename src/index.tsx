import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// pages
import "./index.css";
import App from "./App";
// third-party
import { Provider } from "react-redux";
import store from "./redux/store";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Roboto",
      },
    },
  },
})

ReactDOM.render(
  <React.StrictMode>    
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();