import React from 'react';
// import {Link} from 'gatsby'
import Layout from '../components/layout';
import Gallery from '../components/gallery';
import images from '../components/art-gallery-image-list';



function art() {
    return (
        <Layout title="Art">
            <Gallery images={images.slice().reverse()} />
        </Layout>
    )
}

export default art
