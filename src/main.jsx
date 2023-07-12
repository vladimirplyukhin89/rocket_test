import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { WindowSizeProvider } from "./context";
import { ModalContextProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ModalContextProvider>
			<WindowSizeProvider>
				<App />
			</WindowSizeProvider>
		</ModalContextProvider>
	</React.StrictMode>
);
