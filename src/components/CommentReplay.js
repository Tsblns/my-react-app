import React,{useState} from "react";

const CommentReplay = (props) => { //Function input
    //Function logic (Javascript)
    const [isLiked, setIsLiked] = useState(false);
    return (
        //What you want to render (JSX)
        <div className="comment-replay">
            <h5>{props.name}</h5>
            <p>{props.comment}</p>
            <p>{isLiked ? "Liked" : "Like"}</p>
        </div>
    )
};

export default CommentReplay;