import AsideBar from "../components/account/AsideBar";
import CheckBoxGroup from "../components/global/formgroup/CheckBoxGroup";
import FormGroup from "../components/global/formgroup/FormGroup";
import Button from "../components/global/formgroup/button/Button";
import "./notifications.css";

export default function Notifications() {
    return (
        <main className="main-container">
        <AsideBar />
        <section className="content">
          <div className="notifications">
            <h1>Notifications</h1>
            <form className="content-form">
              <FormGroup title="Preferred email for notifications" />
              <div className="checkbox">
                  <CheckBoxGroup title="Subscribe to newsletter" text="Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper." />
                  <CheckBoxGroup title="Use Dark Mode Theme in Application" text="Tortor massa porttitor enim tristique neque fermentum sed." />    
              </div>
              <div className="buttons">
                <Button className="btn-gray" title="Cancle" />
                <Button className="btn-theme" title="Save Changes" />
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }
  