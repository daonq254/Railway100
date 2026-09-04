import React, { useEffect, useState } from 'react';
import CreateButton from '../Components/CreateButton';
import ResultForm from '../Components/ResultForm';
import ModalCreateNewAccount from '../Components/Account/ModalCreateNewAccount';
// import Axios from "axios";
import { addAccountNewAPI, getListAccountAPI } from '../API/AccountApi';
import { getListDepartmentAPI } from '../API/DepartmentAPI';
import { getListPositionAPI } from '../API/PositionAPI';

function AccountContainer(props) {
    // Khai báo State listAccount để quản lý danh sách account
    let [listAccount, setListAccount] = useState([])

    // Khai báo State để quản lý danh sách Department trên hệ thống
    let [listDepartment, setListDepartment] = useState([]);

    // Khai báo State để quản lý danh sách position trên hệ thống
    let [listPosition, setListPosition] = useState([]);

    // Khai báo State quản lý ẩn hiện của modal create new account
    let [showForm, setShowForm] = useState(false)
    // Khai báo hàm callback để xử lý sự kiện nkhi nhấn nút CreateButton
    let onHandleCreateButton = () => {
        // 
        // console.log("click click!");
        setShowForm(true)

    }
    // Khai báo hàm callback onHandleClose xử lý khi nhấn nút close ở modal
    let onHandleClose = () => {
        // 
        setShowForm(false)

    }
    // Khai báo hàm callback xử lý việc thêm mới Account
    let onHandleCreateNewAccount = (account_new) => {
        // 
        // setListAccount([...listAccount, account_new])
        // Lưu dữ liệu vào local storage
        // localStorage.setItem("listAccount", JSON.stringify(listAccount))
        addAccountNewAPI(account_new).then((response) => {
            // 
            setShowForm(false)
            // Load lại danh sách account từ API
            getListAccountAPI().then((listAccountAPI) => {
                setListAccount(listAccountAPI)
            })
        })
    }
    // Khi giao diện được load, phải load dữ liệu listAccount đang lưu ở local storage
    useEffect(() => {
        // Load dữ liệu từ localStorage
        // let listAccount_LocalStorage = JSON.parse(localStorage.getItem("listAccount"))
        // Load dũ liệu từ API danh sách Account
        // Axios.get('http://localhost:8080/api/v1/accounts').then((respsone) => {
        //     console.log(respsone.data);
        //     let listAccount_api = respsone.data
        //     setListAccount(listAccount_api)
        // }).catch((error) => {
        //     console.log(error);
        // })
        getListAccountAPI().then((listAccountAPI) => {
            setListAccount(listAccountAPI)
        })
        // console.log(listAccount_LocalStorage);
        // Load dũ liệu từ API danh sách Department
        // Axios.get('http://localhost:8080/api/v1/departments').then((respsone) => {
        //     console.log(respsone.data);
        //     let listDepartment_api = respsone.data
        //     setListDepartment(listDepartment_api)
        // }).catch((error) => {
        //     console.log(error);
        // })
        getListDepartmentAPI().then((listDepartmentAPI) => {
            setListDepartment(listDepartmentAPI)
        })
        // Load dũ liệu từ API danh sách Position
        // Axios.get('http://localhost:8080/api/v1/possitions').then((respsone) => {
        //     console.log(respsone.data);
        //     let listPosition_api = respsone.data
        //     setListPosition(listPosition_api)
        // }).catch((error) => {
        //     console.log(error);
        // })
        getListPositionAPI().then((listPositionAPI) => {
            setListPosition(listPositionAPI)
        })
        // 
    }, [])
    return (
        <div>
            <CreateButton onHandleCreateButton={onHandleCreateButton} />
            <ModalCreateNewAccount showForm={showForm} onHandleClose={onHandleClose} onHandleCreateNewAccount={onHandleCreateNewAccount} listDepartment={listDepartment} listPosition={listPosition} />
            <ResultForm listAccount={listAccount} />
        </div>
    );
}


export default AccountContainer;