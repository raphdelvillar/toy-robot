import React from "react";
import Robot from "./Robot";

const Table = ({ rows, columns }) => {
    return (
        <table border={1} width="50%">
            <tbody>
                {Array(rows)
                    .fill(null)
                    .map((_, index) => (
                        <Row key={index} columns={columns} />
                    ))}
            </tbody>
        </table>
    );
};

const Row = (props) => {
    return (
        <tr>
            {Array(props.columns)
                .fill(null)
                .map((_, index) => (
                    <Cell key={index} />
                ))}
        </tr>
    );
};


const Cell = () => {
    return (
        <td>
            <center><Robot /></center>
        </td>
    );
};
const Stage = ({ stats }) => {
    const { height, width } = stats
    return (
        <Table rows={height} columns={width} />
    )
}

export default Stage;