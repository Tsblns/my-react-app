import React from "react";
const Photos = (props) => {

    const myImageTags = props.links.map((photoLink) => {
        return (
            <img  src={photoLink} alt="photo" />
        )
    })

    return (
        <div>
            <h3>Photos</h3>
            {myImageTags}
        </div>
    )
}
export default Photos;