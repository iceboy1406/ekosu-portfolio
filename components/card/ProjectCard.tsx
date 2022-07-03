import Image from 'next/image'
import React, { FC } from 'react'
import { BsEyeFill, BsGithub } from 'react-icons/bs'
import { Project } from 'store/contentData'
interface ProjectCardProps extends Project {}
const ProjectCard: FC<ProjectCardProps> = ({
    demoUrl,
    description,
    preview,
    repoUrl,
    techs,
    title,
}) => {
    return (
        <div
            className="w-full bg-white shadow-2xl shadow-gray-700/[.1] rounded-xl overflow-hidden group"
            key={title}
        >
            <div className="w-full relative">
                <Image
                    src={preview.url}
                    alt={title + ' project preview'}
                    width="100%"
                    height={`${
                        (preview.originalHeight / preview.originalWidth) * 100
                    }%`}
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={preview.lowresUrl}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4 justify-center items-center">
                    {repoUrl ? (
                        <a
                            title="Go to Repository"
                            href={repoUrl}
                            target="_blank"
                            className="text-4xl text-white"
                            rel="noreferrer"
                        >
                            <BsGithub />
                        </a>
                    ) : (
                        ''
                    )}
                    <a
                        title="Go To Demo"
                        href={demoUrl}
                        target="_blank"
                        className="text-4xl text-white"
                        rel="noreferrer"
                    >
                        <BsEyeFill />
                    </a>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <div className="">
                    <h1 className="text-gray-700 text-2xl font-sans font-semibold">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-600">{description}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {techs.map((tech) => (
                        <p className="px-3 py-1 rounded bg-indigo-400 text-white" key={tech}>
                            {tech}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
