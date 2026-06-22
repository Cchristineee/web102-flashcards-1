import './App.css'
import FlashcardApp from './Flashcard/FlashcardApp'

export default function App() {
  return (
    <div className="container">
      <header className="app-header">
        <div className="intro-copy">
          <p className="eyebrow">Brew Cards</p>
          <h1>The quiz for caffeine lovers</h1>
          <div className="header-meta">
            <span>10 cards</span>
            <span>Current streak: 0</span>
            <span>Longest streak: 0</span>
          </div>
        </div>
      </header>

      <FlashcardApp />
    </div>
  )
}
