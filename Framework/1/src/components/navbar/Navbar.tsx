import './navbar.scss'
const Navbar =()=>{
    return(
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" id="logo" className="" />
                <span>JueYao</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <img src="/expand.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notification.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://img.touxiangwu.com/zb_users/upload/2023/08/202308141692003689253434.jpg"
                    alt="" />
                    <span>Amy</span>
                </div>
                <img src="/setting.svg" alt="" className="icon" />
            </div>
        </div>
    )
}
export default Navbar