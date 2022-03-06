import React from "react";

function AlgoInAction(props) {
    return ( 
        <React.Fragment>
            {props.getAlgo.algo}
            {props.getAlgo.element}

{/*         {JSON.parse(props.getAlgo)}
 */}
        </React.Fragment>
     );
}

export default AlgoInAction;