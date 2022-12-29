import React from 'react'
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator, Section, Checklist
} from 'react-landing-page'

const featherCheckmark = <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24" height="24"
  viewBox="0 0 24 24"
  fill="none" stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
  <polyline points="22 4 12 14.01 9 11.01"/>
</svg>

// const Home = () => {
//   return (
//     <div>This is Home</div>
//   )
// }

const Home = props => (
  <Provider>
    <Hero
      color="black"
      bg="white"
      backgroundImage="https://wallpapercave.com/wp/wp4923981.jpg"
    >
        <Heading>BASIC MERN APP</Heading>
        <Subhead>A Project in IT 313</Subhead>
        <CallToAction href="/books" mt={3}>View Books</CallToAction>
        <ScrollDownIndicator/>
    </Hero>
    <Section width={1}
      heading='Tools used'
      subhead='in this project'>
      <Checklist children={[
        'MongoDB',
        'Express',
        'React',
        'Node'
      ]} checkmark={featherCheckmark}/>
    </Section>
  </Provider>
)

export default Home