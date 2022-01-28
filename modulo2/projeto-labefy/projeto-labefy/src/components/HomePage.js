import React from 'react';



export default class HomePage extends React.Component {
  
 

  render() {
    
    
    
    
    return (
      <div>
        <h1>Home page</h1>
        <button onClick={this.props.goToCreatePLaylist}>Go to Create</button>
      </div>
    )
  }
}