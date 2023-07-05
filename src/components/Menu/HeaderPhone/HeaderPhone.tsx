import { FC } from "react";

import { ReactComponent as IconWhatsApp } from "./icons/whatsapp.svg";
import "./HeaderPhone.css";

export const HeaderPhone: FC = () => {
	return (
		<>
			<a href="tel:+78630000000" className="header-phone">
				<IconWhatsApp className="header-phone__icon" />
				<span className="header-phone__phone">+7(863) 000 00 00</span>
			</a>
			<p className="header-phone__location">Ростов-на-Дону</p>
		</>
	);
};
