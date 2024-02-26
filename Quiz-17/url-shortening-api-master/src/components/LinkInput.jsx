import React, { useState } from 'react';
import axios from 'axios';
import classes from '../modules/LinkStyles.module.scss';

function LinkInput() {
  const [inputValue, setInputValue] = useState('');
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddLink = () => {
    axios.post('https://ismaelc-bitly.p.rapidapi.com/v3/shorten', {
      url: inputValue
    })
    .then(response => {
      const shortLink = response.data.result_url;
      setLinks([...links, shortLink]);
      setInputValue('');
      setError(null);
    })
    .catch(err => {
      setError('Error');
    });
  };

  return (
    <div className={classes['short-link']}>
      <div>
        <input
          type="text"
          placeholder="Enter your link"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddLink}>Shorten It!</button>
      </div>
      <div className={classes['link-list']}>
        <h2>Links:</h2>
        {error && <p className={classes['error']}>{error}</p>}
        <ul>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default LinkInput;