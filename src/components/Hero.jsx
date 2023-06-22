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

      <div className='md:mx-36 sm:mx-6 grid grid-cols-2'>
        <div className='bg-gray-200 rounded-t-lg mr-3'>
          <form onSubmit={handleFormSubmit}>
            <div className='flex justify-center'>
              <textarea
                cols='20'
                rows='10'
                className='text_area overflow-auto'
                required
                placeholder='Enter your text and let the magic begin!'
                maxLength={300}
                value={inputText}
                onChange={handleInputChange}
              />
            </div>
            <div className='flex justify-center bg-gray-200'>
              <button type='submit' className='github_btn mb-2'>Wizardize</button>
            </div>
          </form>
        </div>
        <div className='bg-gray-200 rounded-t-lg h-full overflow-auto'>
          <p className='text_area whitespace-pre-line'>{outputText}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
