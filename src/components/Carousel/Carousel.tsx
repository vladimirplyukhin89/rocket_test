import { FC, useEffect, useState } from "react";

import CheckupList from "./CheckupList";
import Layout from "../Layout";
import Button from "../../UI/Button";
import CarouselNavigation from "./CarouselNavigation";
import "./Carousel.css";

interface Checkup {
	text: string;
}

interface CheckupListData {
	title: string;
	value: Checkup[];
	description?: string;
	currentPrice: string;
	previousPrice: string;
	id: number;
}

const checkupsFromDB: CheckupListData[] = [
	{
		title: "Check-up для мужчин 1",
		value: [
			{ text: "Check-up для мужчин 1" },
			{ text: "Гормональный скрининг 1" },
			{ text: "Свободный тестостерон 1" },
			{ text: "Глобулин, связывающий половые гормоны 1" },
		],
		description:
			"Комплексное медицинское исследование для мужчин, включающее гормональный скрининг и проверку уровня свободного тестостерона и глобулина, связывающего половые гормоны.",
		currentPrice: "2800₽",
		previousPrice: "3500₽",
		id: 1,
	},
	{
		title: "Check-up для мужчин 2",
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
		title: "Check-up для мужчин 3",
		value: [
			{ text: "Check-up для мужчин 3" },
			{ text: "Гормональный скрининг 3" },
			{ text: "Свободный тестостерон 3" },
			{ text: "Глобулин, связывающий половые гормоны 3" },
		],
		description:
			"Комплексное медицинское исследование для мужчин, включающее гормональный скрининг и проверку уровня свободного тестостерона и глобулина, связывающего половые гормоны.",
		currentPrice: "2800₽",
		previousPrice: "3500₽",
		id: 3,
	},
	{
		title: "Check-up для мужчин 4",
		value: [
			{ text: "Check-up для мужчин 4" },
			{ text: "Гормональный скрининг 4" },
			{ text: "Свободный тестостерон 4" },
			{ text: "Глобулин, связывающий половые гормоны 4" },
		],
		description:
			"Комплексное медицинское исследование для мужчин, включающее гормональный скрининг и проверку уровня свободного тестостерона и глобулина, связывающего половые гормоны.",
		currentPrice: "2800₽",
		previousPrice: "3500₽",
		id: 4,
	},
];

const itemsPerPage: number = 1;

export const Carousel: FC<CheckupListData[]> = () => {
	const [checkups, setCheckups] = useState<CheckupListData[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
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
				<div className="carousel__background-image" />
				<div className="carousel__wrapper">
					<CheckupList checkups={checkups} />
					<Button text="Записаться"></Button>
					<Button text="Подробнее"></Button>
					<CarouselNavigation {...carouselNavigationProps} />
				</div>
			</section>
		</Layout>
	);
};
