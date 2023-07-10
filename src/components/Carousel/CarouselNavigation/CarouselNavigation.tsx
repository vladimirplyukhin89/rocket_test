import { FC, Dispatch } from "react";

import "./CarouselNavigation.css";

interface IProps {
	currentPage: number;
	setCurrentPage: Dispatch<React.SetStateAction<number>>;
	totalPages: number;
}

export const CarouselNavigation: FC<IProps> = ({
	currentPage,
	setCurrentPage,
	totalPages,
}) => {
	return (
		<div className="carousel__navigation">
			<button
				className="carousel__navigation-btn"
				disabled={currentPage === 1}
				onClick={() => setCurrentPage(currentPage - 1)}
			>
				&lt; Назад
			</button>
			<span className="carousel__navigation-page">
				{currentPage} / {totalPages}
			</span>
			<button
				className="carousel__navigation-btn"
				disabled={currentPage === totalPages}
				onClick={() => setCurrentPage(currentPage + 1)}
			>
				Вперед &gt;
			</button>
		</div>
	);
};
