import { FC, useContext } from "react";

import { WindowSizeContext } from "../../../context/windowSizeContext";
import "./HeaderBurger.css";

export const HeaderBurger: FC = () => {
	const { isOpen, setIsOpen } = useContext(WindowSizeContext);

	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className={`header-btn ${isOpen ? "open" : ""}`}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};
