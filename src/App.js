import './App.css';
import React,{Component} from 'react';
import Message from './components/SearchBox';
import Welcome from './components/Classstyle';
import NonJSX from './components/NonJSX';
import Archlight from './components/Archlight';
import SearchBox from './components/SearchBar';
import Pacific from './components/Pacific';
import AMC from './components/AMC';

class App extends Component {
  render(){
    return (
      <div className ='App'>
        <div><SearchBox /></div>
        <br/>
        <li>
        <div><Archlight/></div>
        <div><Pacific/></div>
        <div><AMC/></div>
        </li>
        

      </div>
      
    )
      /*<div className="App">
        <div align="centre">
          <form className = "form" id = "SearchMovies">
            <input type ="text" 
            className = "input"
            id = "SearchKey"
            placeholder = "Search Movies"></input>
            <br/>
            <button className = "button_1" onClick={Archlight}>Archlight</button>
            <button className = "button_2" onClick={this.Pacific}>Pacific The..</button>
            <button className = "button_3" onClick={this.AMC}>AMC</button>
          </form>  
        </div>
        </div>*/
  }
}

export default App;

