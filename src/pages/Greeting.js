import React from 'react'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { getGreetingList } from '../redux/greetings/greetings'
import { useState } from 'react'

const Greeting = () => {
  const greetings = useSelector(state => state.greetings)
  const dispatch = useDispatch()
  
  const [greeting, setGreeting] = useState([])

  const handleGreeting = () => {
    dispatch(getGreetingList())
    setGreeting(greetings['greetings'])
  }

  return (
		<div>
			<h1>Greetings App</h1>
				<p>{greeting.greeting}</p>
			<Button onClick={handleGreeting}>Greet</Button>
		</div>
	)
}

export default Greeting