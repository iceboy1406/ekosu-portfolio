import CSS from 'components/skill/CSS'
import HTML from 'components/skill/HTML'
import JS from 'components/skill/JS'
import NextJS from 'components/skill/NextJS'
import ReactJS from 'components/skill/ReactJS'
import SASS from 'components/skill/SASS'
import TailwindCSS from 'components/skill/TailwindCSS'
import TS from 'components/skill/TS'
import SectionLabel from 'components/text/SectionLabel'
import SectionTitle from 'components/text/SectionTitle'
import React from 'react'
import contentData from 'store/contentData'

const SkillSection = () => {
    return (
        <section id="skill" className="flex flex-col gap-6 py-12 items-center">
            <article className="flex flex-col gap-1 text-center">
                <SectionLabel value={contentData.skillSection.label} />
                <SectionTitle value={contentData.skillSection.title} />
            </article>
            <div className="flex gap-6 flex-wrap justify-center">
                <HTML className="h-24" />
                <CSS className="h-24 w-24" />
                <JS className="h-24" />
                <TS className="h-24 w-24" />
                <SASS className="h-24" />
                <TailwindCSS className="h-24 w-24" />
                <ReactJS className="h-24" />
                <NextJS className="h-24" />
            </div>
        </section>
    )
}

export default SkillSection
