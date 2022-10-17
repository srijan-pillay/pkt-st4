import React from "react";

const base = (props) => {
 
    return(
        <>
            <div className="base">
                <span style={{textDecoration:'none'}}> {props.bookname} </span>    
            </div>
        </>
    );
}
export default base;
