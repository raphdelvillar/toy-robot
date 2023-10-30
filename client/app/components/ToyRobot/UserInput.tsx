import React, { useRef, useEffect } from "react";
import { Form } from "@remix-run/react";
import { Input } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { useActionData, useNavigation } from "@remix-run/react";

const UserInput = () => {
    let $form = useRef(null);
    let navigation = useNavigation()
    let actionData = useActionData();

    useEffect(() => {
        if (navigation.state === "idle" && actionData?.ok) $form.current?.reset();
    }, [navigation.state, actionData])

    return (
        <div className="input-container">
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