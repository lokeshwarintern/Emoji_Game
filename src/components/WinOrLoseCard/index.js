import './index.css'

const WinOrLoseCard = props => {
  const {
    initialEmojiList,
    statusText,
    wonOrLoseImgUrl,
    onClickPlayAgainBtn,
    scoreText,
  } = props

  const onClickBtn = () => {
    onClickPlayAgainBtn()
  }

  return (
    <div className="win-or-lose-card">
      <img
        src={wonOrLoseImgUrl}
        className="win-or-lose-img"
        alt="win or lose"
      />
      <h1 className="status-text">{statusText}</h1>
      <p className="score-ele">{scoreText}</p>
      <p className="result-ele">{initialEmojiList.length}/12</p>
      <button type="button" className="btn-ele" onClick={onClickBtn}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
