import { FC, ReactNode } from "react";

import "./Layout.css";

interface IProps {
	children: ReactNode;
}

export const Layout: FC<IProps> = ({ children }) => {
	return <div className="layout">{children}</div>;
};
