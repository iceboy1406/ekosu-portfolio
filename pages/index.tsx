import Container from 'components/layout/Container'
import AboutSection from 'components/section/AboutSection'
import BannerSection from 'components/section/BannerSection'
import ProjectSection from 'components/section/ProjectSection'
import SkillSection from 'components/section/SkillSection'
import { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
    return (
        <Container>
            <BannerSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
        </Container>
    )
}

export default Home
