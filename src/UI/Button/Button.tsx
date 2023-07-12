import { FC } from "react";

import "./Button.css";

interface IProps {
	text?: string;
	children?: React.ReactNode | undefined;
	className?: string | undefined;
	type?: "submit" | "reset" | "button";
	disabled?: boolean | undefined;
	onClick?: () => void;
}

export const Button: FC<IProps> = (props) => {
	const { text, children, className, type, disabled, onClick } = props;
	return (
		<button
			type={type ? type : "button"}
			className={`btn ${className}`}
			disabled={disabled}
			onClick={onClick}
		>
			{text ? text : children}
		</button>
	);
};
