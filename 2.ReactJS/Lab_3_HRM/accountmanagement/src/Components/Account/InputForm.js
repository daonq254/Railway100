import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
function InputForm(props) {
    // Destructuring
    let { onHandleCreateNewAccount } = props

    // Khai báo các state để quản lý dữ liệu cho các ô nhập liệu
    let [Email, setEmail] = useState("")
    let [Username, SetUsername] = useState("");
    let [Fullname, SetFullname] = useState("");
    let [Department, SetDepartment] = useState("");
    let [Postion, SetPostion] = useState("");

    // Hàm xử lý sự kiện khi nhấn nút create
    let handleCreateNewAccount = () => {
        // console.log(`Email: ${Email}`);
        // console.log(`Username: ${Username}`);
        // console.log(`Fullname: ${Fullname}`);
        // console.log(`Department: ${Department}`);
        // console.log(`Postion: ${Postion}`);
        let accountNew = {
            id: 1,
            email: Email,
            username: Username,
            fullname: Fullname,
            department: Department,
            position: Postion,
            createDate: "28/08/2026"
        }
        onHandleCreateNewAccount(accountNew)
    }
    // 
    return (
        <>
            <Form>
                {/* Email */}
                <FormGroup>
                    <Label for="Email">Email: </Label>
                    <Input
                        id="Email"
                        name="Email"
                        placeholder="Input Email"
                        type="email"
                        value={Email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </FormGroup>

                {/* Username */}
                <FormGroup>
                    <Label for="Username">Username: </Label>
                    <Input
                        id="Username"
                        name="Username"
                        placeholder="Input Username"
                        type="text"
                        value={Username}
                        onChange={(event) => {
                            SetUsername(event.target.value);
                        }}

                    />
                </FormGroup>

                {/* Fullname */}
                <FormGroup>
                    <Label for="Fullname">Fullname: </Label>
                    <Input
                        id="Fullname"
                        name="Fullname"
                        placeholder="Input Fullname"
                        type="text"
                        value={Fullname}
                        onChange={(event) => {
                            SetFullname(event.target.value);
                        }}

                    />
                </FormGroup>

                {/* Department */}
                <FormGroup>
                    <Label for="Department">Select a Department: </Label>
                    <Input id="Department" name="Department" type="select"
                        value={Department}
                        onChange={(event) => {
                            SetDepartment(event.target.value);
                        }}
                    >
                        <option value={"Bán hàng"}>Bán hàng</option>
                        <option value={"Bảo vệ"}>Bảo vệ</option>
                        <option value={"Giám đốc"}>Giám đốc</option>
                        <option value={"Kỹ thuật"}>Kỹ thuật</option>
                        <option value={"Marketing"}>Marketing</option>
                    </Input>
                </FormGroup>

                {/* Postion */}
                <FormGroup>
                    <Label for="Postion">Select a Postion: </Label>
                    <Input id="Postion" name="Postion" type="select"
                        value={Postion}
                        onChange={(event) => {
                            SetPostion(event.target.value);
                        }}>
                        <option value={"Dev"}>Dev</option>
                        <option value={"Test"}>Test</option>
                        <option value={"Scrum_Master"}>Scrum_Master</option>
                        <option value={"PM"}>PM</option>
                    </Input>
                </FormGroup>
            </Form>
            {/* Nút xử lý */}
            <Button color="primary" onClick={handleCreateNewAccount}>Create</Button>
            <Button color="danger">Reset</Button>

        </>
    );
}

export default InputForm;