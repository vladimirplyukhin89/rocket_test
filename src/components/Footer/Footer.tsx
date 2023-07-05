import { FC, SVGProps } from "react";

import Layout from "../Layout";
import { ReactComponent as IconLogo } from "../../assets/logo.svg";
import { ReactComponent as IconInstagram } from "./icons/instagram.svg";
import { ReactComponent as IconWhatsApp } from "./icons/whatsapp.svg";
import { ReactComponent as IconTelegram } from "./icons/telegram.svg";
import "./Footer.css";

interface IconProps {
	Icon: FC<
		SVGProps<SVGSVGElement> & {
			title?: string | undefined;
		}
	>;
	alt: string;
	href: string;
}

const list: string[] = [
	"О клинике",
	"Услуги",
	"Специалисты",
	"Цены",
	"Контакты",
];

const icons: IconProps[] = [
	{ Icon: IconInstagram, alt: "instagram", href: "https://www.instagram.com/" },
	{ Icon: IconWhatsApp, alt: "whatsapp", href: "https://www.whatsapp.com/" },
	{ Icon: IconTelegram, alt: "telegram", href: "https://telegram.org/" },
];

export const Footer: FC = () => {
	return (
		<footer className="footer">
			<Layout>
				<div className="footer__wrapper">
					<div className="footer__content">
						<IconLogo className="footer__icon" />
						<nav>
							<ul className="footer__links">
								{list.map((item: string, index: number) => (
									<li key={index}>
										<span className="footer__link">{item}</span>
									</li>
								))}
							</ul>
						</nav>
					</div>

					<ul className="footer__icons">
						{icons.map(({ Icon, href }, index: number) => (
							<li className="footer__icon" key={index}>
								{Icon && (
									<a href={href} target="_blanc">
										<Icon className="footer__icon-image" />
									</a>
								)}
							</li>
						))}
					</ul>
				</div>
			</Layout>
		</footer>
	);
};
