import './detail.css'
import React from "react";
import Detail from "./detail";

class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked1:true,
        isChecked2:false,
      };
    }
    toggleChange1 = () => {
        
        if(!this.state.isChecked1){
            this.setState({
                isChecked1:!this.state.isChecked1,
                isChecked2:false
            })
        }
    }
    toggleChange2 = () => {
        
        if(!this.state.isChecked2){
            this.setState({
                isChecked2:!this.state.isChecked2,
                isChecked1:false
            })
        }
    }
    render() {
      return (
        <div>
          <h4>New Post</h4>
          
          <input type="checkbox"
            checked={this.state.isChecked1}
            onChange={this.toggleChange1}
          />
          <label>Question</label>
          <input type="checkbox"
            checked={this.state.isChecked2}
            onChange={this.toggleChange2}            
          />
          <label>Article</label>
        <h4>What do you want to ask or share</h4>
        
        <Detail choosen={this.state.isChecked1}></Detail>
        </div>
        
      );
    }
  }
  
export default Checkbox