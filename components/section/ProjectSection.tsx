import SectionLabel from 'components/text/SectionLabel'
import SectionTitle from 'components/text/SectionTitle'
import React from 'react'
import contentData from 'store/contentData'
import ProjectCard from 'components/card/ProjectCard'
const ProjectSection = () => {
    return (
        <section id="project" className="flex flex-col gap-6 py-12">
            <div className="flex flex-col gap-1 text-center">
                <SectionLabel value={contentData.projectSection.label} />
                <SectionTitle value={contentData.projectSection.title} />
            </div>
            <div className='columns-1 lg:columns-2 2xl:columns-3 gap-4' 
            >
                {contentData.projectSection.projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        demoUrl={project.demoUrl}
                        description={project.description}
                        preview={project.preview}
                        repoUrl={project.repoUrl}
                        techs={project.techs}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectSection
