import React from "react";


import {
    backgroundOurBlock,
    rectangleOur
} from "@assets/img";
import "./our-blog-title-contant.scss";


function OurBlogTitleContent() {
    return (
        <>
            <div className="ourBlog-title" style={{backgroundImage: "url(" + backgroundOurBlock + ")"}}>
                <div className="ourBlog-title-context">
                    <h2>OUR BLOG</h2>
                    <img src={`${rectangleOur}`} alt="rectangleOur"/>
                </div>
                <p className="ourBlog-title-text">There are many variations of passages of Lorem Ipsum available</p>
            </div>
        </>
    )
}


export default OurBlogTitleContent