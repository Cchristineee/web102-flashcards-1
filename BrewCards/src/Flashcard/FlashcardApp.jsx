import { useState } from 'react'
import FlashCard from "./Flashcard";
import caramel from "../assets/Caramel-Iced-Coffee.jpg";
import coldbrew from "../assets/Cold-Brew.jpeg";
import matcha from "../assets/IcedMatcha.jpg";
import capp from "../assets/cappuccino.jpg";
import vanilla from "../assets/iced-vanilla-latte.jpg";
import strawberry from "../assets/strawberry-matcha.jpg";
import chai from "../assets/masala chai.jpg";
import mocha from "../assets/Mocha_Frappuccino.jpg";
import flat from "../assets/Flat-White.jpg";
import american from "../assets/Iced Americano.jpg";
import './Flashcard.css'

function FlashcardApp () {
	const cards = [
		{ question: 'Made by chilled brewed coffee with ice, milk (or half-and-half), and caramel syrup or sauce', answer: 'Caramel Iced Coffee', image: caramel },
		{ question: 'Coffee prepared by steeping coarsely ground beans in cold or room-temperature water for 12 to 24 hours', answer: 'Cold Brew', image: coldbrew },
		{ question: 'Creamy, earthy beverage made by whisking high-quality Japanese green tea powder', answer: 'Iced Matcha', image: matcha },
		{ question: 'An Italian coffee drink made with equal parts espresso, steamed milk, and milk foam', answer: 'Cappuccino', image: capp },
		{ question: 'A refreshing, creamy espresso drink made with freshly brewed espresso, milk, vanilla syrup, and ice', answer: 'Iced Vanilla Latte', image: vanilla },
        { question: 'A vibrant, refreshing, and slightly sweet drink that combines earthy green tea with fruity berry notes', answer: 'Strawberry Matcha Latte', image: strawberry },
        { question: 'A creamy, spiced beverage originating from India', answer: 'Masala Chai Latte', image: chai },
        { question: 'An iconic blended beverage mixing rich mocha sauce, Frappuccino Roast coffee, milk, and ice, topped with whipped cream', answer: 'Mocha Frappuccino', image: mocha},
		{ question: 'An espresso-based coffee drink with a strong coffee flavor, made with a double shot of espresso and microfoam', answer: 'Flat White', image: flat},
		{ question: 'A simple, refreshing coffee drink made by pouring a shot (or two) of freshly brewed espresso over ice and cold water', answer: 'Iced Americano', image: american}
	];

	const [index, setIndex] = useState(0)

    /* Added next and prevoius to go thru flash cards */
	const goNext = () => setIndex(i => (i + 1) % cards.length)
	const goPrev = () => setIndex(i => (i - 1 + cards.length) % cards.length)

	const current = cards[index]

	return (
		<div className="flashcard-app">
			<div className="nav-top">
				<button className="nav-button" onClick={goPrev} aria-label="Previous card">←</button>
			</div>

			<FlashCard key={index} question={current.question} answer={current.answer} image={current.image} />

			<div className="nav-bottom">
				<button className="nav-button" onClick={goNext} aria-label="Next card">→</button>
			</div>
		</div>
	)
}

export default FlashcardApp;