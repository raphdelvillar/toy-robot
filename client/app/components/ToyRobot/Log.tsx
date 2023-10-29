import React from "react";
import { Textarea } from "@nextui-org/react";

const Log = () => {
    return (
        <div>
            <Textarea
                isDisabled
                labelPlacement="outside"
                className="max-w-xs"
            />
        </div>
    )
}

export default Log;