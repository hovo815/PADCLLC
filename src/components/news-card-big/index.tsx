import React, {useEffect, useState} from "react";

import {
    InstagramIcon,
    facebookIcon,
    linkedinIcon,
    twitterIcon
} from "@assets/index"
import {newsCardData} from "../../data-progeqts";
import type {RootState} from "@services/index";
import Skeletons from "@components/skeletons";
import {useAppSelector} from "@hooks/index";
import "./news-card-big.scss";



const NewsCardBig: React.FC = () => {
    const [dataBigCard, setDataBigCard] = useState<any>([]);
    const countId = useAppSelector((state: RootState) => state.counter.value)

    useEffect(() => {
        // setDataBigCard(undefined)
        if (countId === undefined) {
            setDataBigCard(newsCardData.filter((item, index) => index === 0));
        } else {
            setDataBigCard(newsCardData.filter(item => item.id === countId));
        }
    }, [countId]);

    return (
        <>
            {dataBigCard && dataBigCard?.map((item: any) => {
                return (
                    <div key={item.id} className="NewsCardBig">
                        <div className="NewsCardBig-max">
                            <h4 className="NewsCardBig-max-title">{item.titleCard1}</h4>
                            <div className="NewsCardBig-max-data">
                                <p className="NewsCardBig-max-data-text">{item.dataCard}</p>
                                <div className="NewsCardBig-max-data-icon">
                                    <a href="app/src/components/OurBlogComponents/NewsCard"><img src={`${facebookIcon}`}
                                                                                                 alt="facebookIcon"/></a>
                                    <a href="app/src/components/OurBlogComponents/NewsCard"><img src={`${twitterIcon}`}
                                                                                                 alt="twitterIcon"/></a>
                                    <a href="app/src/components/OurBlogComponents/NewsCard"><img
                                        src={`${InstagramIcon}`} alt="InstagramIcon"/></a>
                                    <a href="app/src/components/OurBlogComponents/NewsCard"><img src={`${linkedinIcon}`}
                                                                                                 alt="LinkedinIcon"/></a>
                                </div>
                            </div>
                            <div className="NewsCardBig-max-imgBig">
                                <img src={item.imgCard} alt={item.imgCard}/>
                            </div>
                            <h4 className="NewsCardBig-max-titleCard2">1. {item.titleCard1}</h4>
                            <p className="NewsCardBig-max-textCard1">{item.textCard1}</p>
                            <h4 className="NewsCardBig-max-titleCard3">{item.titleCard2}</h4>
                            <p className="NewsCardBig-max-textCard2">{item.textCard2}</p>
                            <div className="NewsCardBig-max-imgMin">
                                <img src={item.imgCard} alt={item.imgCard}/>
                            </div>
                            <p className="NewsCardBig-max-textCard3">{item.textCard3}</p>
                        </div>
                    </div>
                )
            })}
            {
                !dataBigCard && <Skeletons newCardBig></Skeletons>
            }
        </>
    )
}

export default NewsCardBig