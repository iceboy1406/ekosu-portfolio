import SectionDescription from 'components/text/SectionDescription'
import SectionLabel from 'components/text/SectionLabel'
import SectionTitle from 'components/text/SectionTitle'
import Image from 'next/image'
import React from 'react'
import contentData from 'store/contentData'

const AboutSection = () => {
    return (
        <section
            id="about"
            className="w-full py-20 flex flex-col lg:flex-row lg:justify-between items-center gap-8"
        >
            <div className="flex flex-col gap-6 sm:items-center lg:basis-6/12">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col ga-1">
                        <SectionLabel value={contentData.aboutSection.label} />
                        <SectionTitle value={contentData.aboutSection.title} />
                    </div>
                    <SectionDescription value={contentData.aboutSection?.description ?? ''} />
                </div>
            </div>
            <div className="w-full lg:basis-6/12">
                <Image
                    src={'/images/about-illustration.svg'}
                    width="100%"
                    height={'100%'}
                    layout="responsive"
                    loading="eager"
                    alt='programmer'
                />
            </div>
        </section>
    )
}

export default AboutSection
