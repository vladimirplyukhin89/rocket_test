import { FC, useEffect, useState } from "react";

interface Checkup {
	text: string;
}

export const CheckupList: FC = () => {
	const [checkups, setCheckups] = useState<Checkup[]>([]);

	useEffect(() => {
		const checkupsFromDB: Checkup[] = [
			{ text: "Check-up для мужчин" },
			{ text: "Гормональный скрининг" },
			{ text: "Свободный тестостерон" },
			{ text: "Глобулин, связывающий половые гормоны" },
		];

		setCheckups(checkupsFromDB);
	}, []);

	return (
		<ul>
			{checkups.map(({ text }, index) => (
				<li key={index}>{text}</li>
			))}
		</ul>
	);
};
