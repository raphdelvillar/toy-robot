import React from "react";
import Robot from "./Robot";
import {Image} from "@nextui-org/react";

const Table = (props) => {
    const { robot, rows, columns } = props;

    return (
        <table border={1} width="50%">
            <tbody>
                {Array(rows)
                    .fill(null)
                    .map((_, index) => (
                        <Row key={index} robot={robot} currentRow={index} columns={columns} />
                    ))}
            </tbody>
        </table>
    );
};

const Row = (props) => {
    const { robot, currentRow, columns } = props;
    return (
        <tr>
            {Array(columns)
                .fill(null)
                .map((_, index) => (
                    <Cell key={index} currentRow={currentRow} currentColumn={index} robot={robot} />
                ))}
        </tr>
    );
};


const Cell = (props) => {
    const { currentRow, currentColumn, robot } = props;

    if (!robot.hasOwnProperty("errors")) {
        if (currentRow == robot.yAxisLocation && currentColumn == robot.xAxisLocation) {
            return (
                <td><center><Robot /></center></td>
            )
        }
    }

    return (
        <td>
            <center><Image height={75} width={75} /></center>
        </td>
    );
};

const Stage = ({ data }) => {
    const { height, width } = data.stage
    return (
        <Table robot={data.robot} rows={height} columns={width} />
    )
}

export default Stage;