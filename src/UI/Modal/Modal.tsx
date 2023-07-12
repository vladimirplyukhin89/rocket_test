import { FC, useContext, useState } from "react";

import { modalContext } from "../../context";
import Button from "../Button";
import "./Modal.css";

interface IProps {
	title: string;
	content?: string | undefined;
}

export const Modal: FC<IProps> = ({ title, content }) => {
	const { closeModal } = useContext(modalContext);
	const [closing, setClosing] = useState<boolean>(false);

	const modalClasses = closing ? "modal modal_hidden" : "modal";

	const handleClose = () => {
		setClosing(true);

		const closeTimeout = setTimeout(() => {
			closeModal();
			clearTimeout(closeTimeout);
		}, 300);
	};

	return (
		<div className={modalClasses} onClick={handleClose}>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<div className="modal__content-body">
					<span className="modal__btn-close" onClick={handleClose} />
					<h3 className="modal__title">{title}</h3>
					<p className="modal__subtitle">{content}</p>
				</div>
				{typeof content === "undefined" && (
					<form>
						<input
							onChange={() => {}}
							type="text"
							value="Вова"
							placeholder="Имя"
						/>
						<input
							onChange={() => {}}
							type="number"
							value="123"
							placeholder="+7"
						/>
					</form>
				)}
				<Button
					text="ОК"
					className="modal__btn-ok"
					onClick={handleClose}
				></Button>
			</div>
		</div>
	);
};
