import React, {useState} from "react";
import 'react-loading-skeleton/dist/skeleton.css';

import {
    twitterIcon,
    linkedinIcon,
    facebookIcon,
    InstagramIcon,
    rectangleIcon,
} from "@assets/index";
import {useAppSelector} from "@hooks/index";
import Skeletons from "@components/skeletons";
import SearchInput from "@components/search-input";
import NewsCardBig from "@components/news-card-big";
import ButtonNewsCard from "@components/button-news-card";
import BrowseByCategory from "@components/browse-by-category";
import "./news-card.scss";

interface NewsCardData2 {
    id: number,
    imgCard: string,
    titleCard1: string,
    textCard1: string,
    dataCard: string,
}


const NewsCard: React.FC = () => {
    const cardData = useAppSelector(state => state.counter.card)
    const handleScrollToSector = () => {
        const sectorElement = document.getElementById('12');
        if (sectorElement) {
            sectorElement.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className="containerNews">
            <div className="containerNews-card">
                <div className="containerNews-card-left" id="12">
                    <NewsCardBig></NewsCardBig>
                </div>
                <div className="containerNews-card-border"></div>
                <div className="containerNews-card-right">
                    <div className="containerNews-card-right-input">
                        <div className="containerNews-card-right-input-max-width">
                            <SearchInput widthOurBlogTwo="100%"></SearchInput>
                        </div>
                    </div>

                    {/*{cardData?.map((item:{id:number, imgCard:string,titleCard1:string,textCard1:string,dataCard:string,}) => {*/}
                    {/*     {cardData?.map((item:NewsCardData2) => {*/}

                    {cardData?.map((item: any) => {
                        return (
                            <div key={item.id} className="mobile-card">
                                <div className="mobile-card-content">
                                    <div className="containerNews-card-newsCard">
                                        <div className="containerNews-centre">
                                            <div className="containerNews-card-newsCard-img">
                                                <img src={item.imgCard}/>
                                            </div>
                                        </div>
                                        <div className="containerNews-card-newsCard-about">
                                            <h4 className="containerNews-card-newsCard-about-title">{item.titleCard1}</h4>
                                            <p className="containerNews-card-newsCard-about-text">{item.textCard1}</p>
                                            <div className="containerNews-card-newsCard-about-more">
                                                <div className="containerNews-card-newsCard-about-more-icon">
                                                    <p>{item.dataCard}</p>
                                                    <a href="app/src/components/OurBlogComponents/NewsCard"><img
                                                        src={`${facebookIcon}`} alt="facebookIcon"/></a>
                                                    <a href="app/src/components/OurBlogComponents/NewsCard"><img
                                                        src={`${twitterIcon}`} alt="twitterIcon"/></a>
                                                    <a href="app/src/components/OurBlogComponents/NewsCard"><img
                                                        src={`${InstagramIcon}`} alt="InstagramIcon"/></a>
                                                    <a href="app/src/components/OurBlogComponents/NewsCard"><img
                                                        src={`${linkedinIcon}`} alt="LinkedinIcon"/></a>
                                                </div>
                                                <div className="containerNews-card-newsCard-about-more-button"
                                                     onClick={handleScrollToSector}>
                                                    <ButtonNewsCard dataId={item.id}></ButtonNewsCard>
                                                    <img src={`${rectangleIcon}`} alt="rectangleIcon"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="containerNews-card-newsCard-button">
                                        <div className="containerNews-card-newsCard-button-border"></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                    <div className="containerNews-card-right-category-button">
                        <BrowseByCategory></BrowseByCategory>
                    </div>
                    {
                        !cardData && <Skeletons newCardMin></Skeletons>
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsCard