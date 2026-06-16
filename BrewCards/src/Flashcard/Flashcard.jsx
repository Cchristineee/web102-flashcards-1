import { useState } from 'react'
import './Flashcard.css'

function FlashCard ({ question, answer, image }) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleCardClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className='card-front'>
                {image && <img src={image} alt="flashcard" className="card-image" />}
                <h3>Question</h3>
                <p>{question}</p>
            </div>

            <div className='card-back'>
                <h3>Answer</h3>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FlashCard
