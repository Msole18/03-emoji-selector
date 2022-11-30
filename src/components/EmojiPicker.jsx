import React, { forwardRef, useState } from 'react';
import { data as emojiList } from './data';
// import EmojiSearch from './EmojiSearch';
import EmojiPickerContiner from './EmojiPickerContiner';

const EmojiPicker = ({props, inputRef}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
        <button onClick={handleClick}>😜</button>
        {isOpen ? (<EmojiPickerContiner />) : ('')}
    </div>
  )
}

export default forwardRef(EmojiPicker);