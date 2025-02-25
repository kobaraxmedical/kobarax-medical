import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import BlogGrid from '../../components/BlogGrid/BlogGrid.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'

const BlogPageGrid = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} />
            <div className="blog-grid-page">
                <BlogGrid />
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPageGrid;

