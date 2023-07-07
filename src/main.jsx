import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { WindowSizeProvider } from "./context/windowSizeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<WindowSizeProvider>
			<App />
		</WindowSizeProvider>
	</React.StrictMode>
);
