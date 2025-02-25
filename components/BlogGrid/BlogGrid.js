import React from 'react';
import Link from 'next/link'

import blogs from '../../api/blogs.js'
import Image from 'next/image.js';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogGrid = (props) => {
    return (
        <section className="blog-section separator-padding">
            <div className="container">
                <div className="blog-items">
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col col-xl-3 col-lg-6 col-md-6 col-12" key={bl}>
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <Image src={blog.screens} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li><i className="icon-calendar"></i> {blog.create_at}</li>
                                            <li><i className="icon-user"></i> {blog.author}</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link> </h2>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="more">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )

}

export default BlogGrid;
