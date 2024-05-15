import React, {useEffect, useState} from "react";

import {newsCardData} from "../../data-progeqts";
import {useAppDispatch} from "@hooks/index";
import {searchLine} from "@assets/index";
import {CardData} from "@services/index";
import "./search-input.scss";

interface WidthOurBlogTwo {
    widthOurBlogTwo: string
}

const SearchInput: React.FC<WidthOurBlogTwo> = ({widthOurBlogTwo}) => {
    const [vale, setVale] = useState("")
    const appDispatch = useAppDispatch();


    useEffect(() => {
        // appDispatch(CardData(undefined))
        appDispatch(CardData(newsCardData.filter((item:any) => item.titleCard1.toLowerCase().includes(vale.toLowerCase()))))
    }, [vale])
    console.log(vale)


    return (
        <>
            <div className="searchInput">
                <div className="searchInput-container" style={{width: `${widthOurBlogTwo}`}}>
                    <div className="searchInput-container-img">
                        <img src={`${searchLine}`} alt="searchLine"/>
                    </div>
                    <input placeholder="Search" onChange={(event) => setVale(event.target.value)}/>
                </div>
            </div>
        </>
    )
}


export default SearchInput