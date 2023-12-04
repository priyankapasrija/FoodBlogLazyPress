import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App.jsx";
import "../src/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <NextUIProvider>
        <ParallaxProvider>
          {/* <main className="dark text-foreground bg-background">*/}
          <App />
          {/* </main>*/}
        </ParallaxProvider>
      </NextUIProvider>
    </React.StrictMode>
  </BrowserRouter>
);
