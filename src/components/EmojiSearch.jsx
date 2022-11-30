import React, { useState } from 'react';

const EmojiSearch = ({ onSearch }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
      console.log('handleChange IN: ' + value)
      setValue(e.target.value);
      console.log('handleChange OUT: ' + value)
      onSearch(e);
      
    }

  return (
    <input type='text' onChange={handleChange} value={value}/>
  )
}

export default EmojiSearch;