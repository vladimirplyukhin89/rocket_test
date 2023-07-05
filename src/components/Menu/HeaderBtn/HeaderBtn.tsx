import { Dispatch, FC } from "react";

import "./HeaderBtn.css";

interface IProps {
	isOpen: boolean;
	setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderBtn: FC<IProps> = ({ isOpen, setIsOpen }) => {
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
