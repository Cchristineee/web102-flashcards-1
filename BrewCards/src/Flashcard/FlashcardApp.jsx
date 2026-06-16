import { useState } from 'react'
import FlashCard from "./Flashcard";
import caramel from "../assets/Caramel-Iced-Coffee.jpg";
import coldbrew from "../assets/Cold-Brew.jpeg";
import matcha from "../assets/IcedMatcha.jpg";
import capp from "../assets/cappuccino.jpg";
import vanilla from "../assets/iced-vanilla-latte.jpg";
import './Flashcard.css'

function FlashcardApp () {
	const cards = [
		{ question: 'Name this drink', answer: 'Caramel Iced Coffee', image: caramel },
		{ question: 'Name this drink', answer: 'Cold Brew', image: coldbrew },
		{ question: 'Name this drink', answer: 'Iced Matcha', image: matcha },
		{ question: 'Name this drink', answer: 'Cappuccino', image: capp },
		{ question: 'Name this drink', answer: 'Iced Vanilla Latte', image: vanilla }
	];

	const [index, setIndex] = useState(0)

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