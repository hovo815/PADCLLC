import React, {FC} from "react";

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import "./skeletons-two.scss";



const   SkeletonsTwo: FC =( ) =>{
    const count = [1, 2, 3, 4,]
    return (
        <div>
                {
                   count.map((item, index) => {
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
        </div>
    )
}

export default SkeletonsTwo

