import React from "react";
import data from "../../services/data.js"
import "./styles/userstyles.css"; 
import rating from "./rating.png"
import scrum from "./scrum.png"
import manClimbing from "./man-climbing-stairs.png"
import knowledge from "./idea.png"
import proficient from "./interest-rate.png"
import search from "./search.png"
import "rc-tooltip/assets/bootstrap.css";
// import {FaAccessibleIcon} from "react-icons/fa";



export default class Home extends React.Component {

    state = {
        userData : [],
        userName:"",
        loader: true,
        deafultPage: true,
        master: [],
        expert: [],
        proficient:[],
        beginner :[],
        noExp :[],
        toolTipExpert : "Expeirenced engough to perform without supervision."  ,
        skillsStyle : {"display":"flex","flex-direction":"row","align-item":"center"}
        }

    componentDidMount(){
        this.handleTracking()
        }

    handleTracking(name){
        //deafult username
        if(name){
        data(name).then((result)=>{
            this.setState({
                deafultPage: false,
                userData : result,
                expert : result?.strengths?.filter((res) => { 
                    return res.proficiency == "expert" 
                }),
                proficient : result?.strengths?.filter((res) => { 
                    return res.proficiency == "proficient" 
                }),
                beginner : result?.strengths?.filter((res) => { 
                    return res.proficiency == "novice" 
                }),
                noExp : result?.strengths?.filter((res) => { 
                    return res.proficiency == "no-experience-interested" 
                }),
                master : result?.strengths?.filter((res) => { 
                    return res.proficiency == "master" 
                }),
                loader: false
            })
        })}
    }

    setName(name){
        this.setState({
            userName : name,
        })
    }
    

    render(){
        return(
            
            this.state.deafultPage? 
            (<form>
                  <input type="text" placeholder="Enter User Name" style ={{backgroundColor: "transparent",borderColor:"white",color:"white"}} onChange={(e) => this.setName(e.target.value)} />
                <input type="button" value= "Submit" style ={{backgroundColor: "transparent" ,borderColor:"white",color:"white"}} onClick={(e) => this.handleTracking(this.state.userName)}/>
              </form>)
            :
            // check if request is returned ot not
            (this.state.loader ? null :
            
            <div>
                <div className="hex">
                    <div className="hex-background"> 
                        <img src = {this.state.userData.person.picture} alt = {this.state.userData.person.name} ></img>
                    </div>
                </div>
                <div className="userName">
                    <h2>{this.state.userData.person.name}</h2>
                </div>
                    <div className="skills">
                        <h3>
                            Skills and Interests:
                        </h3>
                        </div>
                        <div style ={this.state.skillsStyle}>
                        <img src = {scrum} className="cycleIcon"></img>
                        <span>Master/Influencer:</span>
                        </div>
                        {
                            this.state.master.length > 0 ?
                            this.state.master.map((job,index) => {
                                    return(
                                    <button id={index} className="skillButton"> {job.name}</button>)
                            })
                            : <span className="skillButton"> [Empty] </span>
                        }         
                        <div style ={this.state.skillsStyle}>
                        <img src = {rating} className="cycleIcon"></img>
                        <span>Expert:</span>
                        </div>
                        {
                            this.state.expert.length > 0 ?
                            this.state.expert.map((job,index) => {
                                    return(
                                    <button id={index} className="skillButton"> {job.name}</button>)
                            })
                            : <span className="skillButton"> [Empty] </span>
                        }         
                        <div style ={this.state.skillsStyle}>
                        <img src = {proficient} className="cycleIcon"></img>
                        <span>Proficient:</span>
                        </div>
                        {
                            this.state.proficient.length >0?
                            this.state.proficient.map((job,index) => {
                                    return(
                                    <button id={index} className="skillButton"> {job.name}</button>)
                            })
                            : <span > [Empty] </span>
                        }       
                        <div style ={this.state.skillsStyle}>
                        <img src = {manClimbing} className="cycleIcon"></img>
                        <span>Beginner:</span>
                        </div>
                        {
                            this.state.beginner.length > 0 ?
                            this.state.beginner.map((job,index) => {
                                    return(
                                    <button id={index} className="skillButton"> {job.name}</button>)
                            })
                            : <span className="skillButton"> [Empty] </span>
                        }     
                         <div style ={this.state.skillsStyle}>
                        <img src = {knowledge} className="cycleIcon"></img>
                        <span>No experience, but interested: </span>
                        </div>
                        {
                            this.state.noExp.length > 0 ?
                            this.state.noExp.map((job,index) => {
                                    return(
                                    <button id={index} className="skillButton"> {job.name}</button>)
                            })
                            : <span className="skillButton"> [Empty] </span>
                        }                          
                        </div>
        ))
    }
}