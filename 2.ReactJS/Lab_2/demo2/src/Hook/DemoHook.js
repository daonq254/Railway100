import React, { useEffect, useState } from 'react';

function DemoHook(props) {
    // Khai báo state Count để quản lý số lần click vào nút click1
    const [Count1, setCount1] = useState(0)
    const [Count2, setCount2] = useState(0)

    // Hàm xử lý sự kiện khi nhấn nút click 1
    let handleClick1 = () => {
        setCount1(Count1 + 1)
    }
    let handleClick2 = () => {
        setCount2(Count2 + 1)
    }



    //TH1: Khai báo useEffect()
    // useEffect(() => {
    //     console.log("Code 1: ");

    // })
    // TH2
    // useEffect(() => {
    //     console.log("Code 2: ");

    // }, [])
    // 
    // TH3
    useEffect(() => {
        console.log("Code 3: ");

    }, [Count1, Count2])

    // 
    useEffect(() => {
        console.log("Code 4: ");

    }, [Count2])
    return (
        <>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="button" class="btn btn-danger" onClick={handleClick1}>Click 1</button>
                </div>

                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h3>Bạn đã click {Count1} lần</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <button type="button" class="btn btn-danger" onClick={handleClick2}>Click 2</button>
                </div>

                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h3>Bạn đã click {Count2} lần</h3>
                </div>
            </div>
        </>
    );
}

export default DemoHook;