import React from "react";
import { Input } from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";

const UserInput = () => {
    return (
        <div>
            <div className="flex">
                <Chip>PLACE X,Y,F</Chip>
                <Spacer x={2} />
                <Chip>MOVE</Chip>
                <Spacer x={2} />
                <Chip>LEFT</Chip>
                <Spacer x={2} />
                <Chip>RIGHT</Chip>
            </div>
            <Spacer x={4} />
            <Input placeholder="Enter your command here" />
        </div>
    )
}

export default UserInput;