import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class HelloWorld  extends React.Component{
render(){
    return(
        <h1>My First Tutorial.</h1>
    )
}
}
class Tutorial  extends React.Component{
    render(){
        return(
            <h1 className="myfirst">React JS By Saurabh Sharma .</h1>
        )
    }
    }
    class ReactTutorial  extends React.Component{
        getChildName(){
            return "Anshu";
        }
        constructor(){
          super();
          this.officeName = "Chetu India Pvt ltd";
        }
        render(){
            return(
                <section>
                  <HelloWorld />
                  <Tutorial />  
                  <h1> Two Components are used here </h1>
                  <h1>  {this.getChildName()} </h1>
                  <h1>  {this.officeName} </h1>
                </section>
            )
        }
        }  
    

ReactDOM.render(<ReactTutorial/>,document.getElementById('root'))
