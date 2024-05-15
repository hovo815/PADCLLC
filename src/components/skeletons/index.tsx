import React, {FC} from "react";

import Skeleton from 'react-loading-skeleton';
import "./skeletons.scss";

interface CardMainBig {
    newCardMin?: boolean,
    newCardBig?: boolean,
}

const   Skeletons: FC<CardMainBig> =({newCardMin,newCardBig}) =>{
    const count = [1, 2, 3, 4,]
    return (
        <>
            {
                newCardMin && count.map((item, index) => {
                    return (
                        <div className="skeletons-container" key={index}>
                            <div className="skeletons-container-left">
                                <Skeleton count={1} height={"100%"}/>
                            </div>
                            <div className="skeletons-container-right">
                                <div className="skeletons-container-right-margin">
                                    <Skeleton count={1} height={25}/>
                                </div>
                                <div className="skeletons-container-right-margin">
                                    <Skeleton count={1} width={"40%"} height={25}/>
                                </div>
                                <div className="skeletons-container-right-margin">
                                    <Skeleton count={1} height={17}/>
                                </div>
                                <div className="skeletons-container-right-margin">
                                    <Skeleton count={1} height={17}/>
                                </div>
                                <div className="skeletons-container-right-margin">
                                    <Skeleton count={1} width={"50%"} height={17}/>
                                </div>
                                <div className="skeletons-container-right-content">
                                    <div className="skeletons-container-right-content-LogDat">
                                        <div className="skeletons-container-right-content-LogDat-data">
                                            <Skeleton count={1} width={"50%"} height={12}/>
                                        </div>
                                        <div className="skeletons-container-right-content-LogDat-logo">
                                            <Skeleton count={1} width={"50%"} height={12}/>
                                        </div>
                                    </div>
                                    <div className="skeletons-container-right-content-button">
                                        <Skeleton count={1} width={"50%"} height={14}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                newCardBig &&
                <div className="skeletons-newCardBig">
                    <div  className="skeletons-newCardBig-title-1">
                        <Skeleton count={1} height={27} width={"100%"}/>
                        <Skeleton count={1} width={"50%"} height={27} style={{marginTop:"15px"}}/>
                    </div>
                    <div className="skeletons-newCardBig-dataIcon">
                        <div className="skeletons-newCardBig-dataIcon-data">
                            <Skeleton count={1} height={17} width={"60%"}/>
                        </div>
                        <div className="skeletons-newCardBig-dataIcon-icon">
                            <Skeleton count={1} height={17} width={"30%"}/>
                        </div>
                    </div>
                    <div className="skeletons-newCardBig-img">
                        <div className="skeletons-newCardBig-img-container">
                            <Skeleton count={1} height={"100%"} width={"100%"}/>
                        </div>
                    </div>
                    <div className="skeletons-newCardBig-title-2">
                        <Skeleton count={1} height={25} width={"100%"}/>
                    </div>
                    <div className="skeletons-newCardBig-text">
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"30%"} style={{marginTop:"10px"}}/>
                    </div>
                    <div className="skeletons-newCardBig-title-2">
                        <Skeleton count={1} height={25} width={"100%"}/>
                    </div>
                    <div className="skeletons-newCardBig-text">
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"30%"} style={{marginTop:"10px"}}/>
                    </div>
                    <div className="skeletons-newCardBig-img2" >
                        <div className="skeletons-newCardBig-img2-content">
                            <Skeleton count={1} height={"100%"} width={"100%"} style={{marginTop:"10px"}}/>
                        </div>
                    </div>
                    <div className="skeletons-newCardBig-text">
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"100%"} style={{marginTop:"10px"}}/>
                        <Skeleton count={1} height={17} width={"20%"} style={{marginTop:"10px"}}/>
                    </div>
                </div>
            }
        </>
    )
}

export default Skeletons

