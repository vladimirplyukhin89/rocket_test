import { FC } from "react";

import Layout from "../Layout";
import "./Hero.css";

interface IProps {
	title: string;
	subtitle: string;
}

export const Hero: FC<IProps> = ({ title, subtitle }) => {
	return (
		<section className="hero">
			<div className="hero__wrapper">
				<div className="hero__image" />
				<Layout className="layout-background">
					<div className="hero__content">
						<Layout className="layout-reset">
							<h1 className="hero__title">{title}</h1>
							<p className="hero__subtitle">{subtitle}</p>
						</Layout>
					</div>
				</Layout>
			</div>
		</section>
	);
};
