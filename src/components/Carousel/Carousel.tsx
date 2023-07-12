import { FC, useEffect, useState, useContext } from "react";

import CheckupList from "./CheckupList";
import Layout from "../Layout";
import Button from "../../UI/Button";
import CarouselNavigation from "./CarouselNavigation";
import { modalContext } from "../../context";
import "./Carousel.css";

interface Checkup {
	text: string;
}

interface CheckupListData {
	title: string;
	subtitle: string;
	value: Checkup[];
	description?: string;
	currentPrice: string;
	previousPrice: string;
	id: number;
}

const checkupsFromDB: CheckupListData[] = [
	{
		title: "Check-up",
		subtitle: "для мужчин 1",
		value: [
			{ text: "Check-up для мужчин 1" },
			{ text: "Гормональный скрининг 1" },
			{ text: "Свободный тестостерон 1" },
			{ text: "Глобулин, связывающий половые гормоны 1" },
		],
		description:
			"Комплексное медицинское исследование для мужчин, включающее гормональный скрининг и проверку уровня свободного тестостерона и глобулина, связывающего половые гормоны.",
		currentPrice: "1800₽",
		previousPrice: "2500₽",
		id: 1,
	},
	{
		title: "Check-up",
		subtitle: "для мужчин 2",
		value: [
			{ text: "Check-up для мужчин 2" },
			{ text: "Гормональный скрининг 2" },
			{ text: "Свободный тестостерон 2" },
			{ text: "Глобулин, связывающий половые гормоны 2" },
		],
		description:
			"Комплексное медицинское исследование для мужчин, включающее гормональный скрининг и проверку уровня свободного тестостерона и глобулина, связывающего половые гормоны.",
		currentPrice: "2800₽",
		previousPrice: "3500₽",
		id: 2,
	},
	{
		title: "Check-up",
		subtitle: "для мужчин 3",
		value: [
			{ text: "Check-up для мужчин 3" },
			{ text: "Гормональный скрининг 3" },
			{ text: "Свободный тестостерон 3" },
			{ text: "Глобулин, связывающий половые гормоны 3" },
		],
		description:
			"Комплексное медицинское исследование для мужчин, включающее гормональный скрининг и проверку уровня свободного тестостерона и глобулина, связывающего половые гормоны.",
		currentPrice: "3800₽",
		previousPrice: "4500₽",
		id: 3,
	},
	{
		title: "Check-up",
		subtitle: "для мужчин 4",
		value: [
			{ text: "Check-up для мужчин 4" },
			{ text: "Гормональный скрининг 4" },
			{ text: "Свободный тестостерон 4" },
			{ text: "Глобулин, связывающий половые гормоны 4" },
		],
		description:
			"Комплексное медицинское исследование для мужчин, включающее гормональный скрининг и проверку уровня свободного тестостерона и глобулина, связывающего половые гормоны.",
		currentPrice: "4800₽",
		previousPrice: "5500₽",
		id: 4,
	},
];

const itemsPerPage: number = 1;

export const Carousel: FC<CheckupListData[]> = () => {
	const [checkups, setCheckups] = useState<CheckupListData[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { openModal } = useContext(modalContext);
	const totalPages: number = Math.ceil(checkupsFromDB.length / itemsPerPage);
	const carouselNavigationProps = { currentPage, setCurrentPage, totalPages };

	useEffect(() => {
		const startIndex: number = (currentPage - 1) * itemsPerPage;
		const endIndex: number = startIndex + itemsPerPage;
		setCheckups(checkupsFromDB.slice(startIndex, endIndex));
	}, [currentPage]);

	return (
		<Layout>
			<section className="carousel">
				<div className="carousel__wrapper">
					<div className="carousel__background-image" />
					<div className="carousel__content">
						<CheckupList checkups={checkups} />
						<Button
							text="Записаться"
							className="carousel__btn-register"
							onClick={() =>
								openModal({
									title: "Запись на приём",
								})
							}
						/>
						<Button
							text="Подробнее"
							className="carousel__btn-info"
							onClick={() =>
								openModal({
									title: "Подробнее",
									content:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
								})
							}
						/>
					</div>
				</div>
				<CarouselNavigation {...carouselNavigationProps} />
			</section>
		</Layout>
	);
};
