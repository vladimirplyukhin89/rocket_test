import { useEffect, useState } from "react";

interface IWindowSize {
	width: number;
	height: number;
}

interface IWindowSizeHook {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	size: IWindowSize;
	setSize: React.Dispatch<React.SetStateAction<IWindowSize>>;
}

export const useWindowSize = (): IWindowSizeHook => {
	const [isOpen, setIsOpen] = useState(() => {
		const value = localStorage.getItem("isOpen");
		return value !== null ? JSON.parse(value) : false;
	});

	const [size, setSize] = useState<IWindowSize>({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		localStorage.setItem("isOpen", JSON.stringify(isOpen));
	}, [isOpen]);

	useEffect(() => {
		const handleSize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleSize);
		handleSize();

		return () => {
			window.removeEventListener("resize", handleSize);
		};
	}, []);

	useEffect(() => {
		if (size.width > 768 && isOpen) {
			setIsOpen(false);
		}
	}, [size.width]);

	return { isOpen, setIsOpen, size, setSize };
};
