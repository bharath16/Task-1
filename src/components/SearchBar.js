import React, { Component } from 'react';

/*const res =await fetch('http://127.0.0.1:5000/Archlight');
    return res.json*/

class Searchbar extends React.Component{
    /*constructor(){
        super()
        this.state={
            Archlightfilms : 'Films'
        }
    }*/
   
    /*changeMessage(){
        this.setState({
            Archlightfilms : 'Changes in films'
        })
    }*/

    render() {
        return <div>
            <input type ="text" 
            className = "input"
            id = "SearchKey"
            placeholder = "Search Movies"></input>
        </div>
    }
}

export default Searchbar
    
