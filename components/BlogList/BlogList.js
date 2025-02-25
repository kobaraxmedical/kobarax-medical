import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'

import blogs from '../../api/blogs'
import Image from 'next/image.js';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogList = (props) => {
    return (
        <section className="blog-page-area separator-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="blog-page-left">
                            {blogs.map((blog, bitem) => (
                                <div className={`blog-item  ${blog.blClass}`} key={bitem}>
                                    <div className="blog-img">
                                        <Image src={blog.blogSingleImg} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li><i className="icon-calendar"></i> January 01,2024</li>
                                            <li><i className="icon-user"></i> Admin</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>Mirage Deep Dive Under anding Timin Response</Link></h2>
                                        <p>Dorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliquat enim ad minim veniam, </p>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="btn-style-1">Read More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>

    )

}

export default BlogList;
