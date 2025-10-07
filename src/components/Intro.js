import React from "react";
const Intro = (props) => {

    return(
       <div>
            <p>
                Student at <br>{props.eduction}</br>
            </p>
            <p>
                From <br>{props.city}</br>
            </p>
       </div> 
    )

}
export default Intro;
