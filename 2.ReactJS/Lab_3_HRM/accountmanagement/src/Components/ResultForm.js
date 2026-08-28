import React from 'react';
import ResultFormItem from './ResultFormItem';
import { Table } from "reactstrap";
function ResultForm(props) {
    let { listAccount } = props
    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Cretate Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ResultFormItem listAccount={listAccount} />

                </tbody>
            </Table>


        </>
    );
}

export default ResultForm;