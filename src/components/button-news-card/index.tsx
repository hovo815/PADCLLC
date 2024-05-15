import {FC} from "react";

import {IdCard} from "@services/index";
import {useAppDispatch} from "@hooks/index";
import "./button-news-card.scss";

type CardId = {
    dataId?: number | undefined | void;
};

const ButtonNewsCard: FC<CardId> = ({dataId}) => {
    const appDispatch = useAppDispatch();

    function click() {
        appDispatch(IdCard(dataId));
    }

    return (
        <div className="buttonNewsCard">
            <button onClick={click}>Read more</button>
        </div>
    );
};

export default ButtonNewsCard;
