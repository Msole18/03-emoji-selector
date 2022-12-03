import React from 'react';
import stylesCLasses from "./EmojiButton.module.css";

const EmojiButton = ({ emoji, onClick }) => {
     const handleClick = () => {
        onClick(emoji)
     }

  return (
    <button className={stylesCLasses.emojiButton} onClick={handleClick}>{emoji.symbol}</button>
  )
}

export default EmojiButton