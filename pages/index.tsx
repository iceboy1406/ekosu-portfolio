import Container from 'components/layout/Container'
import Navbar from 'components/nav/Navbar'
import AboutSection from 'components/section/AboutSection'
import BannerSection from 'components/section/BannerSection'
import ContactSection from 'components/section/ContactSection'
import ProjectSection from 'components/section/ProjectSection'
import SkillSection from 'components/section/SkillSection'
import { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
    return (
        <Container>
            <Navbar />
            <BannerSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
            <footer className='py-4 text-gray-700 text-xl dark:text-white'>Copyright © 2022. Develop by Eko Susilo</footer>
        </Container>
    )
}

export default Home
