import './index.css'

const NavBar = props => {
  const {initialEmojiList, isEmojiDoubleClicked} = props
  const topScore = initialEmojiList.length
  return (
    <nav className="nav-container">
      <div className="logo-text-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {isEmojiDoubleClicked === false ? (
        <div className="result-card">
          <p className="para-ele">Score: {initialEmojiList.length}</p>
          <p className="para-ele">
            Top Score:{' '}
            {topScore > initialEmojiList.length
              ? topScore
              : initialEmojiList.length}
          </p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
