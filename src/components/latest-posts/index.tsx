import React  from "react";

import "./latest-posts.scss";
import {latestPostsData} from "../../data-progeqts";


const LatestPosts: React.FC = () => {

    return (
        <div className="latestPosts">
            <h2 className="latestPosts-title">Latest Posts</h2>
            {
                latestPostsData.map((item:any)=>{
                    return(
                        <div className="latestPosts-card" key={item.id}>
                            <p className="latestPosts-card-left">{item.number}</p>
                            <div className="">
                                <div  className="latestPosts-card-right">
                                    <p className="latestPosts-card-right-text">{item.text}</p>
                                    <p className="latestPosts-card-right-data">{item.data}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LatestPosts