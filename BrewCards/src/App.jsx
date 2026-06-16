import './App.css'
import FlashCard from './Flashcard/Flashcard'
import FlashcardApp from './Flashcard/FlashcardApp'
export default function App() {
  return (
    <div className="container">
      <h2>Brew Cards</h2>
      <h4>The quiz for caffeine lovers!</h4>
      <h5>Number of Cards: 10</h5>
      <br/>
          <FlashcardApp />
    </div>
  )
}
