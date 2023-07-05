import { FC } from "react";

import "./Button.css";

interface IProps {
	text: string;
	className: string;
	type: "submit" | "reset" | "button";
}

export const Button: FC<IProps> = (props) => {
	const { text, className, type } = props;
	return (
		<button type={type} className={`btn ${className}`}>
			{text}
		</button>
	);
};
