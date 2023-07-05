import { FC, SVGProps } from "react";

import Layout from "../Layout";
import { ReactComponent as IconLogo } from "../../assets/logo.svg";
import { ReactComponent as IconInstagram } from "./icons/instagram.svg";
import { ReactComponent as IconWhatsup } from "./icons/whatsup.svg";
import { ReactComponent as IconTelegram } from "./icons/telegram.svg";
import "./Footer.css";

interface IconProps {
	Icon: FC<
		SVGProps<SVGSVGElement> & {
			title?: string | undefined;
		}
	>;
	alt: string;
}

const list: string[] = [
	"О клинике",
	"Услуги",
	"Специалисты",
	"Цены",
	"Контакты",
];

const icons: IconProps[] = [
	{ Icon: IconInstagram, alt: "instagram" },
	{ Icon: IconWhatsup, alt: "whatsup" },
	{ Icon: IconTelegram, alt: "telegram" },
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
						{icons.map(({ Icon }, index: number) => (
							<li className="footer__icon" key={index}>
								<Icon className="footer__icon-image" />
							</li>
						))}
					</ul>
				</div>
			</Layout>
		</footer>
	);
};
