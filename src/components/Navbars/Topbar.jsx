import React, { useState } from 'react'
import "./Topbar.css"

export default function Topbar() {

    const [user,setUser] = useState(false);

    if (!user) {
        return (
            <div className='topbar'>
                <div className='topbarWrapper'>
                    <div className='topLeft'>
                        SIDEBAR
                    </div>
                    <div className='topRight'>
                        <div className='topButton'>
                            <button id='btn' onClick={() => setUser(!user)}>[เข้าสู่ระบบ]</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    SIDEBAR
                </div>
                <div className='topRight'>
                    <div className='topButton'>
                        <p id='welcome'>ยินดีต้อนรับคุณ : <a href="#" id='username'>admin admin</a></p> {/*"admin admin" should be user name*/}
                    </div>
                    <div className='topButton'>
                        <button id='btn' onClick={() => setUser(!user)}>[ออกจากระบบ]</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
