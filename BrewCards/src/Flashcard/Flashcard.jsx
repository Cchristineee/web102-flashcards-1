import { useState } from 'react'
import './Flashcard.css'

function FlashCard ({ question, answer, image }) {
        const [isFlipped, setIsFlipped] = useState(false)

        const handleCardClick = () => {
                setIsFlipped(f => !f)
        }

        return (
                <div className="card-container" onClick={handleCardClick}>
                        <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                                <div className="card-front">
                                        {image && <img src={image} alt="flashcard" className="card-image" />}
                                        <h3>Question</h3>
                                        <p>{question}</p>
                                </div>

                                <div className="card-back">
                                        <h3>Answer</h3>
                                        <p>{answer}</p>
                                </div>
                        </div>
                </div>
        )
}

export default FlashCard

