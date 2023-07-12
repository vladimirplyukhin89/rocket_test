import { FC, ReactNode } from "react";

import "./Layout.css";

interface IProps {
	children: ReactNode;
	className?: string;
}

export const Layout: FC<IProps> = ({ children, className }) => {
	return <div className={`layout ${className}`}>{children}</div>;
};
