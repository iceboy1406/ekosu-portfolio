import ButtonAnchor from 'components/button/ButtonAnchor'
import SectionDescription from 'components/text/SectionDescription'
import SectionLabel from 'components/text/SectionLabel'
import SectionTitle from 'components/text/SectionTitle'
import Image from 'next/image'
import React from 'react'
import { FiDownloadCloud } from 'react-icons/fi'
import contentData from 'store/contentData'

const BannerSection = () => {
    return (
        <section
            id="banner"
            className="w-full py-12 flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-8"
        >
            <div className="flex flex-col gap-6 sm:items-center lg:basis-6/12">
                <div className="flex flex-col gap-1">
                    <SectionLabel value={contentData.bannerSection.label} />
                    <SectionTitle value={contentData.bannerSection.title} />
                    <SectionDescription
                        value={contentData.bannerSection?.description ?? ''}
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:w-full">
                    <ButtonAnchor href="/images/cv.jpg" download>
                        {contentData.bannerSection.downloadButtonCaption}{' '}
                        <FiDownloadCloud className="text-xl" />
                    </ButtonAnchor>
                    <ButtonAnchor
                        href="#about"
                        theme="secondary"
                        onClick={(e) => {
                            e.preventDefault()
                            const targetElement =
                                document.querySelector<HTMLElement>('#about')
                            if (targetElement) {
                                window.scrollTo(
                                    0,
                                    targetElement?.offsetTop - 92
                                )
                            }
                        }}
                    >
                        {contentData.bannerSection.exploreMoreButtonCaption}
                    </ButtonAnchor>
                </div>
            </div>
            <div className="w-full lg:w-[400px] rounded-[50px] overflow-hidden">
                <Image
                    src={'/images/photo-profile.webp'}
                    width="100%"
                    height={'100%'}
                    layout="responsive"
                    loading="eager"
                    alt="photo profile"
                />
            </div>
        </section>
    )
}

export default BannerSection
