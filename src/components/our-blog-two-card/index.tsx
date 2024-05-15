import React from "react";
import {useNavigate} from 'react-router';

import {
    rectangleIcon,
    InstagramIcon,
    linkedinIcon,
    facebookIcon,
    twitterIcon
} from "@assets/index";
import ButtonNewsCard from "@components/button-news-card";
import SkeletonsTwo from "@components/skeletons-two";
import {useAppSelector} from "@hooks/index";
import "./our-blog-two-card.scss";



const OurBlogTwoCard: React.FC = () => {
    const navigate = useNavigate();
    const cardData = useAppSelector(state => state.counter.card)
    console.log(cardData, "cardData")

    function routingPage() {
        navigate("/ourBlogMain")
    }

    return (
        <div>
            {cardData && cardData?.map((item: any) => {
                return (
                    <div key={item.id} className="ourBlogTwoCardmobile-card">
                        <div>
                            <div key={item.id} className="ourBlogTwoCard-card-newsCard">
                                <div className="ourBlogTwoCard-centre">
                                    <div className="ourBlogTwoCard-card-newsCard-img"
                                         style={{backgroundImage: `url(${item.imgCard})`}}>
                                    </div>
                                </div>
                                <div className="ourBlogTwoCard-card-newsCard-about">
                                    <h4 className="ourBlogTwoCard-card-newsCard-about-title">{item.titleCard1}</h4>
                                    <p className="ourBlogTwoCard-card-newsCard-about-text">{item.textCard1.substring(0, 108)}...</p>
                                    <div className="ourBlogTwoCard-card-newsCard-about-more">
                                        <div className="ourBlogTwoCard-card-newsCard-about-more-icon">
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
                                        <div className="ourBlogTwoCard-card-newsCard-about-more-button"
                                             style={{cursor: "pointer"}} onClick={routingPage}>
                                            <ButtonNewsCard dataId={item.id}></ButtonNewsCard>
                                            <img src={`${rectangleIcon}`} alt="rectangleIcon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ourBlogTwoCard-card-newsCard-button">
                                <div className="ourBlogTwoCard-card-newsCard-button-border"></div>
                            </div>
                        </div>
                    </div>
                )
            })}
            {
                !cardData && <SkeletonsTwo></SkeletonsTwo>
            }
        </div>
    )
}

export default OurBlogTwoCard