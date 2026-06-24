import { useEffect, useState } from 'react'
import FlashCard from './Flashcard'
import caramel from '../assets/Caramel-Iced-Coffee.jpg'
import coldbrew from '../assets/Cold-Brew.jpeg'
import matcha from '../assets/IcedMatcha.jpg'
import capp from '../assets/cappuccino.jpg'
import vanilla from '../assets/iced-vanilla-latte.jpg'
import strawberry from '../assets/strawberry-matcha.jpg'
import chai from '../assets/masala chai.jpg'
import mocha from '../assets/Mocha_Frappuccino.jpg'
import flat from '../assets/Flat-White.jpg'
import american from '../assets/Iced Americano.jpg'
import hojicha from '../assets/iced_hojicha_latte.jpg'
import Affogato from '../assets/Affogato.jpg'
import cortado from '../assets/Cortado.jpg'
import leche from '../assets/CafeConLeche.jpg'
import lait from '../assets/Cafe-Au-Lait.jpg'
import tonic from '../assets/Espresso-Tonic.jpg'
import london from '../assets/London-Fog.jpg'
import dirty from '../assets/dirty-chai-latte.jpg'
import pink from '../assets/PinkDrink.jpg'
import './Flashcard.css'

function FlashcardApp() {
  const cards = [
    { question: 'Made by chilled brewed coffee with ice, milk (or half-and-half), and caramel syrup or sauce', answer: 'Caramel Iced Coffee', image: caramel },
    { question: 'Coffee prepared by steeping coarsely ground beans in cold or room-temperature water for 12 to 24 hours', answer: 'Cold Brew', image: coldbrew },
    { question: 'Creamy, earthy beverage made by whisking high-quality Japanese green tea powder', answer: 'Iced Matcha', image: matcha },
    { question: 'An Italian coffee drink made with equal parts espresso, steamed milk, and milk foam', answer: 'Cappuccino', image: capp },
    { question: 'A refreshing, creamy espresso drink made with freshly brewed espresso, milk, vanilla syrup, and ice', answer: 'Iced Vanilla Latte', image: vanilla },
    { question: 'A vibrant, refreshing, and slightly sweet drink that combines earthy green tea with fruity berry notes', answer: 'Strawberry Matcha Latte', image: strawberry },
    { question: 'A creamy, spiced beverage originating from India', answer: 'Masala Chai Latte', image: chai },
    { question: 'An iconic blended beverage mixing rich mocha sauce, Frappuccino Roast coffee, milk, and ice, topped with whipped cream', answer: 'Mocha Frappuccino', image: mocha },
    { question: 'An espresso-based coffee drink with a strong coffee flavor, made with a double shot of espresso and microfoam', answer: 'Flat White', image: flat },
    { question: 'A simple, refreshing coffee drink made by pouring a shot (or two) of freshly brewed espresso over ice and cold water', answer: 'Iced Americano', image: american },
    { question: 'A smooth, refreshing Japanese beverage made with roasted green tea powder, milk of your choice, and ice', answer: 'Iced Hojicha latte', image: hojicha },
    { question: 'Simple Italian dessert made by pouring hot espresso over a scoop of cold vanilla gelato or ice cream.', answer: 'Affogato', image: Affogato },
    { question: 'Spanish coffee drink made with equal parts espresso and steamed milk, served in a small glass (around 4 oz).', answer: 'Cortado', image: cortado },
    { question: 'A popular morning beverage originating in Spain and widely enjoyed across Latin America and Hispanic communities.', answer: 'Café con Leche', image: leche },
    { question: '(French for "coffee with milk") is a classic beverage made by combining strong brewed coffee with hot or steamed milk.', answer: 'Café Au Lait', image: lait },
    { question: 'A trendy, effervescent coffee drink made by pouring a shot of espresso over chilled tonic water and ice, often garnished with a slice of lime or rosemary.', answer: 'Espresso Tonic', image: tonic },
    { question: 'A cozy, aromatic tea latte made with Earl Grey tea, steamed milk, vanilla syrup, and a hint of lavender', answer: 'London Fog', image: london },
    { question: 'A popular fusion beverage that adds a kick of caffeine to a spiced tea latte by mixing a shot of espresso into masala chai and steamed milk', answer: 'Dirty Chai Latte', image: dirty },
    { question: 'Fruity, creamy, and highly caffeinated refresher made by combining a Strawberry Açaí base with creamy coconut milk and freeze-dried strawberries over ice', answer: 'Pink Drink', image: pink },
  ]

  const [index, setIndex] = useState(0)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  useEffect(() => {
    const storedCurrent = Number(localStorage.getItem('brewcards-current-streak') || 0)
    const storedLongest = Number(localStorage.getItem('brewcards-longest-streak') || 0)
    setCurrentStreak(storedCurrent)
    setLongestStreak(storedLongest)
  }, [])

  useEffect(() => {
    localStorage.setItem('brewcards-current-streak', String(currentStreak))
    localStorage.setItem('brewcards-longest-streak', String(longestStreak))
  }, [currentStreak, longestStreak])

  const goNext = () => {
    setIndex(i => (i + 1) % cards.length)
    setFeedback('')
    setGuess('')
  }

  const goPrev = () => {
    setIndex(i => (i - 1 + cards.length) % cards.length)
    setFeedback('')
    setGuess('')
  }

  const handleSubmit = event => {
    event.preventDefault()
    const normalizedGuess = guess.trim().toLowerCase()

    if (!normalizedGuess) {
      setFeedback('Try entering your best guess before submitting.')
      return
    }

    if (normalizedGuess === cards[index].answer.toLowerCase()) {
      const nextStreak = currentStreak + 1
      setCurrentStreak(nextStreak)
      setLongestStreak(prev => Math.max(prev, nextStreak))
      setFeedback('Nice work! That answer is correct.')
    } else {
      setCurrentStreak(0)
      setFeedback('Not quite right — streak reset. Try again!')
    }
  }

  const current = cards[index]

  return (
    <section className="flashcard-app">
      <div className="flashcard-header">
        <p className="card-count">Card {index + 1} / {cards.length}</p>
        <p className="streak-summary">Current streak: {currentStreak} · Longest streak: {longestStreak}</p>
        <p className="flip-hint">Tap the card to flip and reveal the answer.</p>
      </div>

      <FlashCard key={index} question={current.question} answer={current.answer} image={current.image} />

      <div className="nav-row">
        <button type="button" className="nav-button" onClick={goPrev}>Previous</button>
        <span className="nav-progress">Flip the card to check your answer</span>
        <button type="button" className="nav-button" onClick={goNext}>Next</button>
      </div>

      <form className="guess-form" onSubmit={handleSubmit}>
        <label className="guess-label" htmlFor="guess-input">Guess the answer</label>
        <input
          id="guess-input"
          className="guess-input"
          type="text"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          placeholder="Place the answer here..."
        />
        <div className="form-actions">
          <button className="submit-btn" type="submit">Submit Guess</button>
        </div>
        {feedback && <p className="feedback">{feedback}</p>}
      </form>
    </section>
  )
}

export default FlashcardApp;
