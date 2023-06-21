import React from 'react'

const Hero = () => {
  return (
    <section className='mt-10'>
      <ul className='flex justify-center items-center my-3'>
        <li className='mr-3'><button className='language_btn'>English</button></li>
        <li><button className='language_btn'>Spanish</button></li>
      </ul>

      <div className='mx-36 grid grid-cols-2'>

        {/* Input Text */}
        <div className='bg-gray-200 rounded-t-lg mr-3'>
          <form action="">
            <textarea
              cols="20" rows="10"
              className='text_area'
              required
              placeholder='Enter your text and let the magic begin!'
              maxLength={250}
            />
            <button type='submit' className='github_btn'>Wizardize</button>
          </form>
        </div>

        {/* Result */}
        <div className='bg-gray-200 rounded-t-lg h-full'>
          <p>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero