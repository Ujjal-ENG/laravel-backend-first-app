import "../css/app.css";

import ReactDOM from "react-dom/client";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
);
