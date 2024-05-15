import React from "react";
import {Route, Routes, Link} from 'react-router-dom';

import OurBlogMain from "@pages/our-blog-main";
import OurBlogTwoMain from "@pages/our-blog-two-main";


const App: React.FC = () => {
    return (
        <div>
            <li style={{width: "100px"}}>
                <Link to="/">Home</Link>
            </li>
            <li style={{width: "100px"}}>
                <Link to="/ourBlogMain">Blogs</Link>
            </li>

            <Routes>
                <Route path="/" element={<OurBlogTwoMain/>}/>
                <Route path="/ourBlogMain" element={<OurBlogMain/>}/>
            </Routes>
        </div>
    )
}

export default App