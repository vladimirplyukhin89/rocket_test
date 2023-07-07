import { FC, createContext, Dispatch } from "react";

import useWindowSize from "../hooks";

interface IWindowSize {
	width: number;
	height: number;
}

interface IWindowSizeContext {
	isOpen: boolean;
	setIsOpen: Dispatch<React.SetStateAction<boolean>>;
	size: IWindowSize;
}

interface IContext {
	children: React.ReactNode;
}

export const WindowSizeContext = createContext<IWindowSizeContext>({
	isOpen: false,
	setIsOpen: () => {},
	size: { width: 0, height: 0 },
});

export const WindowSizeProvider: FC<IContext> = ({ children }) => {
	const { isOpen, setIsOpen, size } = useWindowSize();

	return (
		<WindowSizeContext.Provider value={{ isOpen, setIsOpen, size }}>
			{children}
		</WindowSizeContext.Provider>
	);
};
