import React, { Component } from 'react';

/*const res =await fetch('http://127.0.0.1:5000/Archlight');
    return res.json*/

class getAMC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[],
            isLoaded: false            
        }
    }
   
    componentDidMount(){
        this.fetchdata();
        
    }

    fetchdata=()=>{
        fetch('http://127.0.0.1:5000/AMC')
        .then(res=>res.json())
        .then(json => {
            this.setState({
                isLoaded : true,
                items: json,
            })
        }) 
       }

    render() {
        return <div>
            <button onClick={()=>this.fetchdata()}>AMC</button>
            <p>{this.state.items}</p>
        </div>
    }
}

export default getAMC
    
