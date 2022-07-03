import SectionLabel from 'components/text/SectionLabel'
import SectionTitle from 'components/text/SectionTitle'
import React from 'react'
import contentData from 'store/contentData'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'
const ContactSection = () => {
    return (
        <section className="py-12 flex flex-col gap-6" id='contact'>
            <div className="">
                <SectionLabel value={contentData.contactSection.label} />
                <SectionTitle value={contentData.contactSection.title} />
            </div>
            <div className="flex flex-col gap-4">
                <a
                    className="text-2xl text-gray-600 dark:text-white"
                    href={`mailto:${contentData.contactSection.email}`}
                >
                    {contentData.contactSection.email}
                </a>
                <div className="flex gap-4">
                    <a
                        href={contentData.contactSection.linkedin}
                        target="_blank"
                        className="text-4xl text-gray-600 dark:text-white"
                        rel="noreferrer"
                    >
                        <BsLinkedin title='Linkedin' />
                    </a>
                    <a
                        href={contentData.contactSection.github}
                        target="_blank"
                        className="text-4xl text-gray-600 dark:text-white"
                        rel="noreferrer"
                    >
                        <BsGithub title='Github' />
                    </a>
                    <a
                        href={contentData.contactSection.facebook}
                        target="_blank"
                        className="text-4xl text-gray-600 dark:text-white"
                        rel="noreferrer"
                    >
                        <BsFacebook title='Facebook' />
                    </a>
                    <a
                        href={contentData.contactSection.discord}
                        target="_blank"
                        className="text-4xl text-gray-600 dark:text-white"
                        rel="noreferrer"
                    >
                        <SiDiscord title='Discord' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
