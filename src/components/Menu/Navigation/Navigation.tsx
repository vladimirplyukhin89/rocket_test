import { FC } from "react";

import Layout from "../../Layout";
import Button from "../../../UI/Button";
import "./Navigation.css";

const list: string[] = [
	"О клинике",
	"Услуги",
	"Специалисты",
	"Цены",
	"Контакты",
];

interface IProps {
	isOpen: boolean;
}

export const Navigation: FC<IProps> = ({ isOpen }) => {
	return (
		<div className={`navigation ${isOpen ? "isOpen" : ""}`}>
			<Layout>
				<nav className="navigation__wrapper">
					<ul className="navigation__links">
						{list.map((item: string, index: number) => (
							<li key={index}>
								<span className="navigation__link">{item}</span>
							</li>
						))}
					</ul>
				</nav>
				<Button
					type="button"
					className="navigation__btn"
					text="Записаться на прием"
				/>
			</Layout>
		</div>
	);
};
