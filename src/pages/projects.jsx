import React from 'react';
import Layout from '../components/layout';
import ProjectGallery from '../components/projectGallery';

function projects() {
    return (
        <Layout title="Projects">
            <section id="projects">
                <h2>Projects</h2>

                <ProjectGallery />
            </section>
        </Layout>
    )
}

export default projects
