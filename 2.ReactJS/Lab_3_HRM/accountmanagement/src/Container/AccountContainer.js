import React, { useEffect, useState } from 'react';
import CreateButton from '../Components/CreateButton';
import ResultForm from '../Components/ResultForm';
import ModalCreateNewAccount from '../Components/Account/ModalCreateNewAccount';

function AccountContainer(props) {
    // Khai báo State listAccount để quản lý danh sách account
    let [listAccount, setListAccount] = useState([])
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
        setListAccount([...listAccount, account_new])
        // Lưu dữ liệu vào local storage
        localStorage.setItem("listAccount", JSON.stringify(listAccount))
    }
    // Khi giao diện được load, phải load dữ liệu listAccount đang lưu ở local storage
    useEffect(() => {
        // Load dữ liệu từ localStorage
        let listAccount_LocalStorage = JSON.parse(localStorage.getItem("listAccount"))
        setListAccount(listAccount_LocalStorage)

        // console.log(listAccount_LocalStorage);

    }, [])
    return (
        <div>
            <CreateButton onHandleCreateButton={onHandleCreateButton} />
            <ModalCreateNewAccount showForm={showForm} onHandleClose={onHandleClose} onHandleCreateNewAccount={onHandleCreateNewAccount} />
            <ResultForm listAccount={listAccount} />
        </div>
    );
}

export default AccountContainer;