import React from "react";
import {Image} from "@nextui-org/react";
import robotImg from "../../assets/robot.png";

const Robot = (props) => {
    const { direction } = props;
    
    return (
        <Image className={`robot-${direction.toLowerCase()}`} src={robotImg} height={75} width={75} />
    )
}

export default Robot;