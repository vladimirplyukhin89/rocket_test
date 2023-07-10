import { FC } from "react";

interface Checkup {
	text: string;
}

interface CheckupList {
	title: string;
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
			<ul className="checkup-list__items">
				{checkups.map((checkup: CheckupList) => {
					return (
						<li key={checkup.id} className="checkup-list__item">
							<h2 className="checkups-list__title">{checkup.title}</h2>
							<ul className="checkup-list__subitems">
								{checkup.value.map((info, index) => (
									<li key={index} className="checkup-list__subitem">
										{info.text}
									</li>
								))}
							</ul>
							<p className="checkups-list__price">
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
