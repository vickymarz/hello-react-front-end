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
		<>
			<h1>Greetings App</h1>
			<ul>
				<li>{greeting.greeting}</li>
			</ul>
			<Button onClick={handleGreeting} />
		</>
	)
}

export default Greeting