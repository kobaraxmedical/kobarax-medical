import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const BlogDetailsFull =() => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer ftClass={'s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsFull;