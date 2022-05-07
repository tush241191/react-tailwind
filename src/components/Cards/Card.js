import React from "react";

const Card = (props) => {
  return (<div class="mx-auto bg-white rounded-lg border border-sky-500  shadow-cyan-500/50 drop-shadow-sm shadow-sm..." >
            <div class="container mx-auto px-4">
                {props.children}
            </div>
        </div>
      );
};


export default Card;
