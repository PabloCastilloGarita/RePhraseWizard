import React, { useState } from 'react';
import { callRewriteAPI } from '../api/Post';

const Hero = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const output = await callRewriteAPI(inputText);
      setOutputText(output);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <section className='my-10'>
      {/* <ul className='flex justify-center items-center my-3'>
        <li className='mr-3'><button className='language_btn'>English</button></li>
        <li><button className='language_btn'>Spanish</button></li>
      </ul> */}

      <div className='mx-36 grid grid-cols-2'>
        <div className='bg-gray-200 rounded-t-lg mr-3'>
          <form onSubmit={handleFormSubmit}>
            <textarea
              cols='20'
              rows='10'
              className='text_area'
              required
              placeholder='Enter your text and let the magic begin!'
              maxLength={500}
              value={inputText}
              onChange={handleInputChange}
            />
            <button type='submit' className='github_btn'>Wizardize</button>
          </form>
        </div>
        <div className='bg-gray-200 rounded-t-lg h-full'>
          <p className='text_area'>{outputText}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
