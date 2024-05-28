import Link from "next/link";
import "./asideBar.css"
import Button from "../global/formgroup/button/Button";

export default function AsideBar() {
    return (
        <aside className="account-bar">
        <div className="container">
            <div className="profile-container">
                <div className="profile">
                    <img src="/images/bruno.svg" alt="" />
                    <h5>William Hägg</h5>
                    <p>William@domain.com</p>
                </div>
                <div className="nav-holder">
                    <Link href="/accountdetails"><Button className="btn-theme" title="Account details" /></Link>
                    <Link href="notifications">Notifications</Link>
                    <Link href="#">Sign out</Link>
                </div>
            </div>
        </div>
    </aside>  
     );
  }
  