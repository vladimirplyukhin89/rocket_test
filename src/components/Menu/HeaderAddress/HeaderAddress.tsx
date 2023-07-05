import { FC } from "react";

import { ReactComponent as IconMap } from "./icons/map.svg";
import "./HeaderAddress.css";

export const HeaderAddress: FC = () => {
	return (
		<div className="header-address">
			<IconMap className="header-address__icon" />
			<div className="header-address__wrapper">
				<p className="header-address__city">Ростов-на-Дону</p>
				<p className="header-address__street">ул. Ленина, 2Б</p>
			</div>
		</div>
	);
};
