import React from "react";
import "./style.css";

function Title(props){
	console.log(props);
	return <div className="title">{props.title}</div>;
}

export default Title;