import React from "react";

import SearchInput from "@components/search-input";
import LatestPosts from "@components/latest-posts";
import OurBlogTwoCard from "@components/our-blog-two-card";
import BrowseByCategory from "@components/browse-by-category";
import OurBlogTitleContent from "@components/our-blog-title-contant";
import "./our-blog-two-main.scss";



const OurBlogTwoComponents: React.FC = () => {
    return (
        <>
            <OurBlogTitleContent></OurBlogTitleContent>
            <div className="OurBlogTwoMain">
                <div className="OurBlogTwoMain-container">
                    <div className="OurBlogTwoMain-container-block">
                        <div className="OurBlogTwoMain-container-block-button">
                            <div className="OurBlogTwoMain-container-block-button-max-width">
                                <BrowseByCategory></BrowseByCategory>
                            </div>
                            <div className="OurBlogTwoMain-container-block-button-centre">
                                <div className="OurBlogTwoMain-container-block-button-border"></div>
                            </div>
                            <div className="OurBlogTwoMain-container-block-button-centre2">
                                <div className="OurBlogTwoMain-container-block-button-border2"></div>
                            </div>
                            <div className="OurBlogTwoMain-container-block-button-latestPostsCentre">
                                <div className="OurBlogTwoMain-container-block-button-latestPosts">
                                    <LatestPosts></LatestPosts>
                                </div>
                            </div>
                        </div>
                        <div className="OurBlogTwoMain-container-middle-border"></div>
                        <div className="OurBlogTwoMain-container-block-cards">
                            <div className="OurBlogTwoMain-container-input">
                                <div className="OurBlogTwoMain-container-input-max-width">
                                    <SearchInput widthOurBlogTwo="100%"></SearchInput>
                                </div>
                            </div>
                            <OurBlogTwoCard></OurBlogTwoCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurBlogTwoComponents