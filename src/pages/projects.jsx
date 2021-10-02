import React from 'react';
import Layout from '../components/layout';
import Gallery from '../components/gallery';
import images from '../components/project-gallery-image-list';
import ProjectGallery from '../components/projectGallery';

function projects() {
    return (
        <Layout>
            <section id="projects">
                <h2>Projects</h2>

                <ProjectGallery />
            </section>
        </Layout>
    )
}

export default projects
