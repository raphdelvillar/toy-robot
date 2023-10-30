import React, { useRef, useEffect } from "react";
import { Form } from "@remix-run/react";
import { Input } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
const UserInput = ({ data }) => {
    let $form = useRef(null);
    
    const displayReport = (data) => {
        const { robot } = data;
        if (robot && !robot.hasOwnProperty("errors")) {
            return `The robot is currently at ${robot.xAxisLocation},${robot.yAxisLocation} facing ${robot.currentDirection}`;
        }
        return `Robot is not placed yet`;
    }

    return (
        <div className="input-container">
            <div className="flex">
                <Chip color="warning" variant="shadow">COMMAND LIST: [PLACE X,Y,F] [MOVE] [LEFT] [RIGHT]</Chip>
                <Spacer x={2} />
                <Chip color="primary" variant="shadow">REPORT: {displayReport(data)}</Chip>
            </div>
            <Spacer x={4} />
            <Form method="POST" ref={$form}>
                <Input
                    isClearable
                    name="command"
                    placeholder="Command"
                    description="Type your command here and press enter"
                />
            </Form>
        </div>
    )
}

export default UserInput;