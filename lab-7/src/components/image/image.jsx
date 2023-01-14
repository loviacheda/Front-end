import React, {useState} from "react";

function Image() {
    const width = 650;
    const [addBtnDisabled, setAddBtnDisabled] = useState(false);
    const [boostBtnDisabled, setBoostBtnDisabled] = useState(true);
    const [diminishBtnDisabled, setDiminishBtnDisabled] = useState(true);
    const [deleteBtnDisabled, setDeleteBtnDisabled] = useState(true);
    const [imgWidth, setImageWidth] = useState(width);

    function add_Image(){
        setAddBtnDisabled(true);
        setBoostBtnDisabled(false);
        setDeleteBtnDisabled(false);
        setDiminishBtnDisabled(false);
    }

    function boost_Image() {
        setImageWidth(800);
        setBoostBtnDisabled(true);
        setDiminishBtnDisabled(false);
    }

    function diminish_Image(){
        setImageWidth(450);
        setDiminishBtnDisabled(true);
        setBoostBtnDisabled(false);
    }

    function delete_Image(){
        setAddBtnDisabled(false);
        setDeleteBtnDisabled(true);
        setBoostBtnDisabled(true);
        setDiminishBtnDisabled(true);
    }


    return (
        <div>
            <a href="https://mandry.club/mista/parizh/" id="picture" className="visibilityOfImage">
                <img hidden={!addBtnDisabled}
                    src="https://loveincorporated.blob.core.windows.net/contentimages/main/b1d3dde9-b831-484b-a748-183e86e981ed-shutterstock390084601-nerify.jpg"
                    alt="Весняний Париж" width={imgWidth} id="imageNormal"/>
            </a>
            <div className="buttons-container">
                <input type="button" value="Add" disabled={addBtnDisabled} onClick={add_Image}/>
                <input type="button" value="Boost" disabled={boostBtnDisabled} onClick={boost_Image}/>
                <input type="button" value="Diminish" disabled={diminishBtnDisabled} onClick={diminish_Image}/>
                <input type="button" value="Delete" disabled={deleteBtnDisabled} onClick={delete_Image}/>
            </div>
        </div>
    )
}

export default Image;
