import { FC, useState } from "react";

import Header from "./Header";
import Navigation from "./Navigation";

export const Menu: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const headerProps = {isOpen, setIsOpen}

	return (
		<>
			<Header {...headerProps} />
			<Navigation isOpen={isOpen} />
		</>
	);
};
