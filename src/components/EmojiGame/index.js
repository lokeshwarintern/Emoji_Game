import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index.css'

// Quick Tip

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// const shuffledEmojisList = () => {
//   const {emojisList} = this.props
//   return emojisList.sort(() => Math.random() - 0.5)
// }

// Write your code here.

class EmojiGame extends Component {
  state = {
    initialEmojiList: [],
    isEmojiDoubleClicked: false,
  }

  addEmoji = id => {
    const {emojisList} = this.props
    const {initialEmojiList} = this.state
    const filterEmojiList = emojisList.filter(eachItem => eachItem.id === id)
    const indexOfObj = initialEmojiList.indexOf(filterEmojiList[0])

    if (indexOfObj === -1) {
      this.setState(prevState => ({
        initialEmojiList: [...prevState.initialEmojiList, filterEmojiList[0]],
      }))
    } else {
      this.setState({isEmojiDoubleClicked: true})
    }
  }

  onClickPlayAgainBtn = () => {
    this.setState({isEmojiDoubleClicked: false, initialEmojiList: []})
  }

  render() {
    const {emojisList} = this.props
    const {initialEmojiList, isEmojiDoubleClicked} = this.state
    const content = isEmojiDoubleClicked ? (
      <WinOrLoseCard
        wonOrLoseImgUrl="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        statusText="You Lose"
        scoreText="Score"
        initialEmojiList={initialEmojiList}
        onClickPlayAgainBtn={this.onClickPlayAgainBtn}
      />
    ) : (
      <ul className="ul-container">
        {emojisList
          .sort(() => Math.random() - 0.5)
          .map(eachItem => (
            <EmojiCard
              key={eachItem.id}
              emoji={eachItem}
              clickEmoji={this.addEmoji}
            />
          ))}
      </ul>
    )
    return (
      <div className="bg-container">
        <NavBar
          initialEmojiList={initialEmojiList}
          isEmojiDoubleClicked={isEmojiDoubleClicked}
        />

        <div className="emoji-list-card">
          {initialEmojiList.length === emojisList.length ? (
            <WinOrLoseCard
              wonOrLoseImgUrl="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              statusText="You Won"
              scoreText="Best Score"
              initialEmojiList={initialEmojiList}
              onClickPlayAgainBtn={this.onClickPlayAgainBtn}
            />
          ) : (
            content
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
