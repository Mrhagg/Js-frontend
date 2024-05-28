'use client';
import FormGroup from "../components/global/formgroup/FormGroup";
import Button from "../components/global/formgroup/button/Button";
import "./sign-in.css";

export default function SignIn() {
    return (
<main>
    <section className="sign-in">
      <div className="container">
        <div className="grid-container">
            <h1>Welcome Back</h1>
            <p>Don't have an account yet? <a href="#">Sign up here.</a></p>
            <form className="sign-up-form" action="">
                <FormGroup title="Email" placeholder="Enter your email" />
                <FormGroup title="Password" placeholder="Enter your password" />
                <Button className="btn-theme" title="Sign in" />
            </form>
        </div>
      </div>
    </section>
</main>
    );
  }
  