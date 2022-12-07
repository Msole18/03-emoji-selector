import React, { forwardRef, useState, useRef, useEffect } from 'react';
import EmojiPickerContainer from './EmojiPickerContainer';
import stylesCLasses from "./EmojiPicker.module.css";

const EmojiPicker = (props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!containerRef.current.contains(e.target)) {
        setIsOpen(false);
        // setEmojis([...emojiList]);
      }
    });
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleClickEmoji = (emoji) => {
    const cursorPos = ref.current.selectionStart;
    const text = ref.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice(cursorPos);
    ref.current.value = prev + emoji.symbol + next;
    ref.current.selectionStart = cursorPos + emoji.symbol.length;
    ref.current.selectionEnd = cursorPos + emoji.symbol.length;
    ref.current.focus();
  }

  return (
    <div ref={containerRef} className={stylesCLasses.inputContainer} >
        <button 
          className={stylesCLasses.emojiPickerButton} 
          onClick={handleClick}
        >😜</button>
        {isOpen ? (
          <EmojiPickerContainer 
            onCLickEmoji={handleClickEmoji} 
          />) 
          : ('')
        }
    </div>
  )
}

export default forwardRef(EmojiPicker);