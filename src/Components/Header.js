import React from "react";


function header(props) {
    return (
        <div>
            <h1>Ok Google, How are you doing ? { props.msg1}</h1>
        </div>
    );
};

export default header;