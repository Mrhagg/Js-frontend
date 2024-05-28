import Link from "next/link";
import "./header.css";
import Button from "../global/formgroup/button/Button";
import { cookies } from "next/headers";



      export default function Header() {
        const isSignedIn = cookies().get('Authorization')

        return (
            <header>
            <div className="container">
            <Link className="logo" href="/"><img src="images/logo-light.svg" alt="" /></Link>
                <nav className="menu">
                        <ul>
                            <li><Link className="menu-link" href="/">Overview</Link></li>
                            

                            {isSignedIn ? 
                            ( <li><Link className="menu-link" href="/courses">Courses</Link></li>)
                            :
                            ( <li><Link className="menu-link" href="">Featues</Link></li>)
                            }
                            
                            <li><Link className="menu-link" href="">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="account-buttons">


                        {isSignedIn 
                        ? ( 
                            <div className="profile">
                                <div className="profile-image">
                                    <Link href="/account/details">
                                        <img src="images/bruno.svg" alt="" />
                                    </Link> 

                                </div>
                            </div>
                        )
                         : (
                        <>
                            <Link href="/signin"><Button className="btn-theme" title="Sign In" /></Link>
                            <Link href="/signup"><Button className="btn-gray" title="Sign up" /></Link>
                        </>
                         )
                        }
                    </div>
                </div>
        </header>
        );
      }
   
   

   
   
   
  
  