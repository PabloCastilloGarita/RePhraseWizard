import React from 'react'
import { logo } from '../assets'

const Header = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
			<nav className='flex justify-between items-center w-full'>
				<img src={logo} alt="logo" className='h-40 w-52 ml-8 object-contain' />
				<button className='github_btn mr-8'>
					Github
				</button>
			</nav>
			<h1 className='head_text'>Discover the Wizard's Secret <br /> to Perfect Paraphrasing!</h1>
			<h2 className='desc'>
				You no longer need to spend valuable time and energy grappling with complex sentence structures or struggling to find alternative ways to express your ideas. Our advanced algorithm and intuitive interface empower you to seamlessly rephrase any piece of text
			</h2>
		</header>
	)
}

export default Header