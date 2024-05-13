import React from 'react'
import HeroBlock from '../Components/HeroBlock'
import StatBlock from '../Components/StatBlock'
import WorkWithUs from '../Components/WorkWithUs'
import TeamSection from '../Components/TeamSection'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
        <HeroBlock/>
        <StatBlock/>
        <WorkWithUs/>
        <TeamSection/>
    </>
  )
}

export default Home