import React, { use, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import InputForm from './InputForm';

function ModalCreateNewAccount(props) {
    let { showForm, onHandleClose, onHandleCreateNewAccount, listDepartment, listPosition } = props
    let handleClose = () => {
        onHandleClose();
    }
    return (
        <>
            <Modal isOpen={showForm} >
                <ModalHeader >
                    <h3>Create New Account</h3>
                </ModalHeader>
                <ModalBody>
                    <InputForm onHandleCreateNewAccount={onHandleCreateNewAccount} listDepartment={listDepartment} listPosition={listPosition} />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={handleClose}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ModalCreateNewAccount;