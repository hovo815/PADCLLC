import React from 'react';

import "./browse-by-category.scss";
import {rectangle1, rectangle2, rectangle3, rectangle4} from "@assets/img";


const BrowseByCategory: React.FC = () => {
    return (
        <div className="browseByCategory-centre">
            <div className="browseByCategory">
                <h4 className="browseByCategory-title">Browse by category</h4>
                <div className="browseByCategory-container">
                    <div className="browseByCategory-container-button">
                        <div className="browseByCategory-container-button-buttonBg"
                             style={{backgroundImage: `url(${rectangle1})`}}>
                            <p>Technology</p>
                        </div>
                    </div>
                    <div className="browseByCategory-container-button">
                        <div className="browseByCategory-container-button-buttonBg"
                             style={{backgroundImage: `url(${rectangle2})`}}>
                            <p>Design</p>
                        </div>
                    </div>
                </div>
                <div className="browseByCategory-container">
                    <div className="browseByCategory-container-button">
                        <div className="browseByCategory-container-button-buttonBg"
                             style={{backgroundImage: `url(${rectangle3})`}}>
                            <p>QA</p>
                        </div>
                    </div>
                    <div className="browseByCategory-container-button">
                        <div className="browseByCategory-container-button-buttonBg"
                             style={{backgroundImage: `url(${rectangle4})`}}>
                            <p>Business</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseByCategory
