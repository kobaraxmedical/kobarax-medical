import React from 'react';
import Link from 'next/link'
import icon from '/public/images/icon/search.png'
import bimg from '/public/images/best-selling/right-side-img2.png'
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Here.." />
                            <button type="submit"><i><Image src={icon}
                                alt="" /></i></button>
                        </div>
                    </form>
                </div>
                <div className="category-widget widget">
                    <h3>Category</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Surgical Mask</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Safety Guard</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Pharmacy</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Nutritions</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Medkits</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Medicine</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Hand Gloves</Link></li>
                    </ul>
                </div>
                <div className="tag-widget widget">
                    <h3>Popular Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Surgical Mask</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Medkits</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Medicine</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Hand Gloves</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">{"Equipment's"}</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Mirage-Deep-Dive-Under-anding-Timin-Response">Beauty</Link></li>
                    </ul>
                </div>
                <div className="best-selling-right-sidebar">
                    <div className="right-sidebar-text">
                        <div className="small-heading-title">
                            <span>Popular Healthcare</span>
                            <h3>Eye Testing Machine</h3>
                            <Link onClick={ClickHandler} href="/boutique" className="small-btn-style">Achetez maintenant</Link>
                        </div>
                    </div>
                    <div className="left-sidebar-img">
                        <Image src={bimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
