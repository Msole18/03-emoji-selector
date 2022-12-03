import React, { useRef } from 'react';
import EmojiPicker from "./EmojiPicker";


const EmojiApp = () => {
  const inputRef = useRef(null);

  return (
    <div >
      <input ref={inputRef} />
      <EmojiPicker ref={inputRef} />
    </div>
  );
}

export default EmojiApp;