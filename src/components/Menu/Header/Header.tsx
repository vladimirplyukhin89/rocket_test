import { Dispatch, FC } from "react";

import { ReactComponent as IconLogo } from "../../../assets/logo.svg";
import Layout from "../../Layout";
import HeaderBtn from "../HeaderBtn";
import "./Header.css";

interface IProps {
	isOpen: boolean;
	setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const Header: FC<IProps> = ({ isOpen, setIsOpen }) => {
	return (
		<div className="header">
			<Layout>
				<header className="header__wrapper">
					<div className="header__logo-container">
						<HeaderBtn isOpen={isOpen} setIsOpen={setIsOpen} />
						<IconLogo className="header__logo" />
					</div>
					<div className="header__contact-info">
						<a href="tel:+78630000000" className="header__phone">
							+7(863) 000 00 00
						</a>
						<p className="header__location">Ростов-на-Дону</p>
					</div>
				</header>
			</Layout>
		</div>
	);
};
