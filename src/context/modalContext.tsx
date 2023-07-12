import { ReactNode, createContext, useState } from "react";

import Modal from "../UI/Modal";

interface IModalProvider {
	children: ReactNode;
}

interface IModalConfig {
	title: ReactNode | string;
	content?: ReactNode | string | undefined;
}

interface IModalProps {
	openModal: (modalConfig: IModalConfig) => void;
	closeModal: () => void;
}

export const modalContext = createContext<IModalProps>({
	openModal: () => {},
	closeModal: () => {},
});

export const ModalContextProvider = ({ children }: IModalProvider) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [modalContent, setModalContent] = useState<IModalConfig | null>(null);

	const openModal = (modalConfig: IModalConfig): void => {
		setModalContent(modalConfig);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<modalContext.Provider value={{ openModal, closeModal }}>
			{modalOpen && <Modal {...modalContent} />}
			{children}
		</modalContext.Provider>
	);
};
