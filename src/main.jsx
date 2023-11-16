import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import '../src/styles/index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <NextUIProvider>
     {/* <main className="dark text-foreground bg-background">*/}
        <App />
       {/* </main>*/}
      </NextUIProvider>
    </React.StrictMode>
    </BrowserRouter>
);
