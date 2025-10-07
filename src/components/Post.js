import React,{useState}from "react";



const Post = (props) => {

    const [isLiked, setisLiked] = useState(false);
    return (
        <div className="post"> 
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <button 
                onClick = { () => {
                setisLiked(!isLiked)
            }}>
                {isLiked ? "Liked":"Like"}
            </button>
        </div>
    )
}