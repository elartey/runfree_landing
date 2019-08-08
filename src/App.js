import React from "react";
import "./App.css";
import Header from "./components/Header";
import Basicdetail from "./components/BasicDetailsForm"
import Dependantdetail from "./components/DependantForm"
import Pictureuploaddetail from "./components/PictureUpload"
import Landing from "./components/Landing";
import Terms from "./components/Terms";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, fas);

const App = () => (
  <body className="js">
   <Header />
    <section class="home-area v3">
        <div class="Modern-Slider">
            <div class="item">
                <div class="img-fill">
                    <img src="assets/img/v3home.png" alt="jigsawlab" />
                    <div class="info">
                        <div class="container">
                            <div class="row" style={{marginTop: "-26px"}}>

                                <div class="col-sm-6 slider-content-area text-left">
                                    <div class="v3 welcome-text">
                                        <h1 style={{fontSize: "46px"}}>Day Kare Ambulance</h1>
                                        <h2>Health Care Solutions</h2>
                                        <h4>* By Filling the Membership Application, you agree to the terms and conditions of the membership application which can be found when you click on the button below.
                                        </h4>
                                        <a href="#openModal" tabindex="1" accesskey="1" class="read-more" id="link1"
                                            onclick="document.getElementById('openModal').style.display='block';return true;">Read Terms & Conditions
                                            </a>

                                    </div>
                                </div>
                               <Basicdetail />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Terms />
  </body>
);

export default App;
