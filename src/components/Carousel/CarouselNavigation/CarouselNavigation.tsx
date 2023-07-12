import { FC, Dispatch } from "react";

import { ReactComponent as IconBack } from "./image/back.svg";
import { ReactComponent as IconForward } from "./image/forward.svg";
import "./CarouselNavigation.css";
import Button from "../../../UI/Button";

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
			<Button
				className="carousel__navigation-back"
				disabled={currentPage === 1}
				onClick={() => setCurrentPage(currentPage - 1)}
			>
				<IconBack />
			</Button>
			<div className="carousel__navigation-page">
				<span>{currentPage}</span>/{totalPages}
			</div>
			<Button
				className="carousel__navigation-forward"
				disabled={currentPage === totalPages}
				onClick={() => setCurrentPage(currentPage + 1)}
			>
				<IconForward />
			</Button>
		</div>
	);
};
