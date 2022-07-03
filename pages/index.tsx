import Container from 'components/layout/Container'
import Navbar from 'components/nav/Navbar'
import AboutSection from 'components/section/AboutSection'
import BannerSection from 'components/section/BannerSection'
import ContactSection from 'components/section/ContactSection'
import ProjectSection from 'components/section/ProjectSection'
import SkillSection from 'components/section/SkillSection'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import contentData from 'store/contentData'

const Home: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>
                Eko Susilo - A passionate Frontend Developer - Portfolio Website
                </title>
                <meta
                    name="description"
                    content={`My name is Eko Susilo. I am a fresh graduate from SMK N 1 Purwokerto majoring in Software Engineering. I love programming especially in Frontend Dev.`}
                />
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta
                    property="og:title"
                    content="Eko Susilo - A passionate Frontend Developer - Portfolio Website"
                />
                <meta
                    property="og:description"
                    content={`My name is Eko Susilo. I am a fresh graduate from SMK N 1 Purwokerto majoring in Software Engineering. I love programming especially in Frontend Dev.`}
                />
                <meta
                    property="og:url"
                    content="https://ekosusilo.vercel.app/"
                />
                <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/iceboy1406/ekosu-portfolio/main/public/images/screenshot.jpg"
                />
            </Head>
            <Navbar />
            <BannerSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
            <footer className="py-4 text-gray-700 text-xl dark:text-white">
                Copyright © 2022. Develop by Eko Susilo
            </footer>
        </Container>
    )
}

export default Home
