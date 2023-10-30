import React from "react";
import Robot from "./Robot";
import { Image } from "@nextui-org/react";

const Table = (props) => {
    const { robot, rows, columns, invertedCoordinates } = props;
    return (
        <table border={1} width="50%">
            <tbody>
                {Array(rows)
                    .fill(null)
                    .map((_, index) => (
                        <Row key={index} robot={robot} row={index} columns={columns} invertedCoordinates={invertedCoordinates} />
                    ))}
            </tbody>
        </table>
    );
};

const Row = (props) => {
    const { robot, row, columns, invertedCoordinates } = props;

    return (
        <tr>
            {Array(columns)
                .fill(null)
                .map((_, index) => {
                    let currentRow = invertedCoordinates.height[`${row}`];
                    return <Cell key={index} currentRow={currentRow} currentColumn={index} robot={robot} />
                })}
        </tr>
    );
};


const Cell = (props) => {
    const { currentRow, currentColumn, robot } = props;

    if (!robot.hasOwnProperty("errors")) {
        if (currentRow == robot.yAxisLocation && currentColumn == robot.xAxisLocation) {
            return (
                <td><center><Robot direction={robot.currentDirection} /></center></td>
            )
        }
    }

    return (
        <td className={`td-${currentRow}-${currentColumn}`}>
            <center><Image height={75} width={75} /></center>
        </td>
    );
};

const Stage = ({ data }) => {
    const { height, width } = data.stage

    const invertedCoordinates = (height, width) => {
        let invertedHeight = {};
        for (let ctr = 0; ctr < height; ctr++) {
            invertedHeight[ctr] = height - 1 - ctr;
        }

        let invertedWidth = {};
        for (let ctr = 0; ctr < width; ctr++) {
            invertedWidth[ctr] = width - 1 - ctr;
        }

        return {
            "height": invertedHeight,
            "width": invertedWidth
        }
    }

    return (
        <Table robot={data.robot} rows={height} columns={width} invertedCoordinates={invertedCoordinates(height, width)} />
    )
}

export default Stage;