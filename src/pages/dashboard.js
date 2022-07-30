// css linking
import "../css/dashboard/layout_positioning.css";
import "../css/dashboard/flex_box.css";
import "../css/dashboard/overView.css";
import "../css/dashboard/SeondToLast.css";

// images



// includes 
import SideNav from "../include/SideNav";
import Charts from "../include/chart";
import Pchart from "../include/barChart";

function Dash(){
    return (
        //container box holds every details about the dashboard
        <div className="container_box"> 
 

            <SideNav></SideNav>


            <div className="right_content">
                {/* start of right_layout */}
                
                <div className="header">
                    <div className="left">
                        <p>welcome to your dashboard</p>
                        <h3>Ayomide Matins</h3>
                    </div>
                    <div className="searchBar">
                        <div className="bar">
                            <div className="icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                            <div className="userInput"><input placeholder="Search Dashboard"></input></div>
                        </div>
                    </div>
                </div>


                {/* boxes */}
                {/* the css code is located in css/dashbaord/flex_box.css */}
                <div className="row">
                    <div className="column">
                        <div className="box_one">
                            <div className="list_one"> <i class="fa-solid fa-circle-check"></i></div>
                            <div className="list_two">
                                <p>Drone Model used in last flight</p>
                                <h3>Nova One</h3>
                                <div className="divided"></div>
                                <p className="last">Last flight on july 11, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box_two">
                                <div className="list_one"> <i class="fa-solid fa-circle-check"></i></div>
                                <div className="list_two">
                                    <p>Activity carried out</p>
                                    <h3>Field Management</h3>
                                    <div className="divided"></div>
                                    <p className="last">carried out on july 11, 2022</p>
                                </div>
                            </div>
                    </div>

                    <div className="column">
                        <div className="box_three">
                            <div className="list_one"> <i class="fa-solid fa-circle-check"></i></div>
                            <div className="list_two">
                                <p>Distance travelied in last flight</p>
                                <h3>60km</h3>
                                <div className="divided"></div>
                                <p>Last inspected on july 11, 2022</p>
                            </div>
                        </div>
                    </div>

                </div>



                {/* this area containes the chart codes */}
                <Charts></Charts>



                {/* under the css properties of SeondToLast.css */}
                <div className="SeondToLast">
                    <div className="rows">
                        <div className="container extends">
                            <center><h3>Last Flight Data</h3></center>
                            <div className="row_list">
                                <div className="column_left">
                                    <Pchart></Pchart>
                                </div>
                            </div>
                        </div>

                        <div className="container extend2">
                           <center><h3>Available Service</h3></center>
                           <div className="leftContent">
                             <div id="moveball"><div id="ball"></div></div><div className="text"><p>Field Management</p></div>
                           </div>
                           <div className="rightContent">
                             <div id="moveball"><div id="ball"></div></div><div className="text"><p>Security Inspection</p></div>
                           </div>
                           <div className="leftContent">
                             <div id="moveball"><div id="ball"></div></div><div className="text"><p>Weed Dispersion</p></div>
                           </div>
                           <div className="rightContent">
                             <div id="moveball"><div id="ball"></div></div><div className="text"><p>Real Estate Inspection</p></div>
                           </div>
                        </div>

                        {/* <div className="container">
                            
                        </div> */}
                    </div>
                </div>



                {/* end of right layout */}
            </div>
        </div>
    );
}


export default Dash;