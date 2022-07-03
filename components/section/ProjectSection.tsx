import SectionLabel from 'components/text/SectionLabel'
import SectionTitle from 'components/text/SectionTitle'
import React from 'react'
import Masonry from 'react-masonry-css'
import contentData from 'store/contentData'
import ProjectCard from 'components/card/ProjectCard'
const ProjectSection = () => {
    return (
        <section id="project" className="flex flex-col gap-6 py-20">
            <div className="flex flex-col gap-1 text-center">
                <SectionLabel value={contentData.projectSection.label} />
                <SectionTitle value={contentData.projectSection.title} />
            </div>
            <Masonry
                breakpointCols={{ default: 3, 1536: 2, 1024: 1 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
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
            </Masonry>
        </section>
    )
}

export default ProjectSection
