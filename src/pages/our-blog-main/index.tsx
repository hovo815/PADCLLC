import React from "react";

import OurBlogTitleContent from "@components/our-blog-title-contant/index";
import NewsCard from "@components/news-card/index";
import "./our-blog-main.scss";



const   OurBlogComponents:React.FC =() =>{
    return (
        <>
            <OurBlogTitleContent></OurBlogTitleContent>
            <div className="ourBlog-card">
                <NewsCard></NewsCard>
            </div>
        </>
    )
}

export default OurBlogComponents