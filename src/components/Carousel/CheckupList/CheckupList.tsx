import { FC } from "react";

import "./CheckupList.css";

interface Checkup {
	text: string;
}

interface CheckupList {
	title: string;
	subtitle: string;
	value: Checkup[];
	description?: string;
	currentPrice: string;
	previousPrice: string;
	id: number;
}

interface IProps {
	checkups: CheckupList[];
}

export const CheckupList: FC<IProps> = ({ checkups }) => {
	return (
		<div className="checkups-list">
			<ul>
				{checkups.map((checkup: CheckupList) => {
					return (
						<li key={checkup.id}>
							<h2 className="checkups-list__title">{checkup.title}</h2>
							<p className="checkups-list__subtitle">{checkup.subtitle}</p>
							<ul>
								{checkup.value.map((info, index) => (
									<li key={index} className="checkup-list__subitem">
										<span className="checkup-list__bullet" />
										{info.text}
									</li>
								))}
							</ul>
							<p className="checkups-list__current-price">
								Всего {checkup.currentPrice}
								<span className="checkups-list__previous-price">
									{checkup.previousPrice}
								</span>
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
