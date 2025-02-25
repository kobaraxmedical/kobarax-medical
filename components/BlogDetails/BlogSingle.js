import Image from 'next/image.js';
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react';

import author from '/public/images/blog-single/author.png'
import blog1 from '/public/images/blog-single/img-1.jpg'
import blog2 from '/public/images/blog-single/img-2.jpg'
import tag from '/public/images/icon/tags.png'

import blogs from '../../api/blogs';
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'

const BlogSingle = (props) => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog-single-page-area separator-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="blog-single-wrap">
                            <div className="blog-single-text">
                                <div className="blog-img">
                                    <Image src={BlogDetails?.blogSingleImg} alt="" />
                                </div>
                                <ul>
                                    <li><i className="icon-calendar"></i>{BlogDetails?.create_at}</li>
                                    <li><i className="icon-user"></i> {BlogDetails?.author}</li>
                                </ul>
                                <p>Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec quam ut tortor efficitur consectetur sed vitae nisi. Phasellus convallis vulputate euismod. Pellentesque lacinia rutrum libero, sit amet aliquam ante viverra a. Ut sem ipsum, tempor nec rutrum in, gravida eu ipsum.</p>
                            </div>
                            <blockquote>
                                “ Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante. ”
                            </blockquote>
                            <div className="blog-single-text-wrap">
                                <p>With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter</p>

                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <h4>Why choose product?</h4>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur elit.</li>
                                            <li>Mauris quis sapien sit amet mauris luctus</li>
                                            <li>Duis dictum lorem sed feugiat fringilla.</li>
                                            <li>In condimentum turpis eu tellus ultricies.</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <h4>Make Sleep a Priority</h4>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur elit.</li>
                                            <li>Mauris quis sapien sit amet mauris luctus</li>
                                            <li>Duis dictum lorem sed feugiat fringilla.</li>
                                            <li>In condimentum turpis eu tellus ultricies.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-img">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-6">
                                        <Image src={blog1} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-6">
                                        <Image src={blog2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="tag-share-wrap">
                                <div className="tag-share">
                                    <i><Image src={tag} alt="" /></i>
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Safety Guard</Link></li>
                                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Pharmacy</Link></li>
                                    </ul>
                                </div>
                                <div className="tag-share-social">
                                    <ul>
                                        <li>Share This Post</li>
                                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">fb</Link></li>
                                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">in</Link></li>
                                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">tw</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="author-avatar"><Image src={author} alt="" /></div>
                                <div className="author-content">
                                    <a className="author-name" href="blog-single.html">Jon William / Admin</a>
                                    <p>Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique.</p>
                                </div>
                            </div>
                            <div className="comment-respond">
                                <div className="comment-respond-inner">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <form className="comment-form" onSubmit={submitHandler}>
                                        <div className="form-textarea">
                                            <textarea id="comment" placeholder="Comment here"></textarea>
                                        </div>
                                        <div className="form-inputs">
                                            <div className="form-field">
                                                <input type="text" placeholder="Name*" />
                                            </div>
                                            <div className="form-field">
                                                <input type="email" placeholder="Email*" />
                                            </div>
                                            <div className="form-field">
                                                <input type="url" placeholder="Website URL" />
                                            </div>
                                        </div>
                                        <div className="form-submit">
                                            <input id="submit" value="Post Comment" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
