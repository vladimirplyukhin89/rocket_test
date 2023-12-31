import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Menu />
			<Hero
				title="Многопрофильная клиника для детей и взрослых"
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua"
			/>
			<Carousel />
			<Footer />
		</>
	);
}

export default App;
