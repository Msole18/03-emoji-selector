import React, { useState } from 'react';
import stylesCLasses from "./EmojiSearch.module.css";

const EmojiSearch = ({ onSearch }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
      setValue(e.target.value);
      onSearch(e);
      
    }

  return (
    <input type='text' className={stylesCLasses.search} onChange={handleChange} value={value}/>
  )
}

export default EmojiSearch;