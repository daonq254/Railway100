import React from 'react';
import { useParams } from 'react-router-dom';



function AccountDetail(props) {
    // http://localhost:3000/AccountDetail/5
    let param = useParams();
    let id_param = param.id
    // Call API để lấy thông tin chi tiết của Account theo id_param
    // ...
    return (
        <div>
            This is Account Detail by id = {id_param}
        </div>
    );
}

export default AccountDetail;