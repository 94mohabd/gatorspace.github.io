import Link from "next/link";
import React, {useEffect} from "react";
<<<<<<< HEAD
import { Button } from "antd";
=======

>>>>>>> a8a2397ca4fbf2b3c414a85b2d856db23e2baf8a
import PageHeader from "../components/header";
import PageFooter from "../components/footer";
import Landing from "../components/landing";
import HomePage from "../components/homePage";

export default function study(){
    const [sStorage, setSStorage] = React.useState(null);
    const [lStorage, setLStorage] = React.useState(null);
    React.useEffect(() => {
      if (!sessionStorage.getItem('user') && localStorage.getItem('user')) {
        sessionStorage.setItem('user', localStorage.getItem('user'));
      }
      setSStorage(sessionStorage.getItem('user'));
      setLStorage(localStorage.getItem('user'));
    }, [sStorage, lStorage]);
  
return(
    <div>
      <PageHeader isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      <HomePage   isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} /> 
      <Landing    isLoggedIn={{sStorage: sStorage, lStorage: lStorage}} />
      

        <div id="addFreind-content">



        <div class="topnav">
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit">submit</button>
    </form>
  </div>
</div>

<<<<<<< HEAD
<div class= "Study-container">
    <div class = "myStudy" style={{border: " yellow solid 2px", width: "500px",height: "200px"}}>
        My Study 
    </div>
    <div class = "create-group" style={{border: " yellow solid 2px", width: "500px",height: "200px"}}>
    <div id="button-create-group">
                    <Button size={"large"} href="/">
                    create group
                    </Button>
                    <br />
                </div>
    </div>


</div>


    </div>
</div>


);
=======

    </div>
</div>);
>>>>>>> a8a2397ca4fbf2b3c414a85b2d856db23e2baf8a
}