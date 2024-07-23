import React from "react";

const TextInput: React.FC<any> = (props) => {
  return (
    <input
      className="h-7 p-2.5 mb-2.5"
      {...props}
    />
  );
}

export default TextInput;
