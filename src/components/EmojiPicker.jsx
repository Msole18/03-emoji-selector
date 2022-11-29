import React, { forwardRef, useState } from 'react';
import { data as emojiList } from './data';

const EmojiPicker = ({props, inputRef}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const EmojiPickerContiner = () => {
        return (
            <div>
                <input />
                <div>
                    {emojiList.map( emoji => (
                        <div>{emoji.symbol}</div>
                    ))}
                </div>
            </div>
        );
    }

  return (
    <div>
        <button onClick={handleClick}>😜</button>
        {isOpen ? <EmojiPickerContiner /> : ''}
    </div>
  )
}

export default forwardRef(EmojiPicker);