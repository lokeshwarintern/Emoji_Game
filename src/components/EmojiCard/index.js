import './index.css'

const EmojiCard = props => {
  const {emoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emoji

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
