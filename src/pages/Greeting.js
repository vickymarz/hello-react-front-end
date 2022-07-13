import React from 'react'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { getGreetingList } from '../redux/greetings/greetings'
import { useState } from 'react'

const Greeting = () => {
  const greetings = useSelector(state => state.greetings)
  const dispatch = useDispatch()
  
  // const [greeting, setGreeting] = useState('')

  // const handleGreeting = () => {
  //   setGreeting(greetings['greetings'])
  // }

  console.log(greetings);
  return (
		<div className='greeting'>
			<h1>Greetings App</h1>
			<p>{greetings}</p>
			<Button className='btn' onClick={() => dispatch(getGreetingList())}>Greet</Button>
		</div>
	)
}

export default Greeting