import React from "react";

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

const Row = (columns) => {
    return (
        <tr>
            {Array(5)
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
            <center><h1>O</h1></center>
        </td>
    );
};

const Stage = ({ }: {}) => {
    return (
        <div>
            <center><Table rows={5} columns={5} /></center>
        </div>
    )
}

export default Stage;