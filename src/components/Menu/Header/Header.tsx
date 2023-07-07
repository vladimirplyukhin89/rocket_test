import { FC } from "react";

import { ReactComponent as IconLogo } from "../../../assets/logo.svg";
import Layout from "../../Layout";
import HeaderBurger from "../HeaderBurger";
import HeaderAddress from "../HeaderAddress";
import Button from "../../../UI/Button";
import HeaderPhone from "../HeaderPhone";
import "./Header.css";

export const Header: FC = () => {
	return (
		<div className="header">
			<Layout>
				<header className="header__wrapper">
					<div className="header__logo-container">
						<HeaderBurger />
						<IconLogo className="header__logo" />
						<HeaderAddress />
					</div>
					<div className="header__contact-info">
						<HeaderPhone />
						<Button
							text="Записаться на прием"
							className="header__contact-btn"
						/>
					</div>
				</header>
			</Layout>
		</div>
	);
};
