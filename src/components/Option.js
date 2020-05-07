import React from "react";

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleRemoveOneOption(props.optionText)
            }}
        >
            Remove</button>
    </div>
);

export default Option; // same as saying export { Option as default }