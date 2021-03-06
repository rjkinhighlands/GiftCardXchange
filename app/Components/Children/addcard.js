// Include React 
var React = require('react');
var axios = require('axios');
var cookie = require('react-cookie');

var helpers = require("../utils/helpers");

// This is the form component. 
var AddCard = React.createClass({

  componentDidMount: function(){
    
    var email = cookie.load('email')
    console.log(email)

  },

  // handleChange functions for each add card form field
  handleStoreNameChange: function(e){
    // console.log(e.target.value);

    this.setState({storeName: e.target.value});

  },


  handleCardBalanceChange: function(e){
        // console.log(e.target.value);
    // console.log(e);
    this.setState({cardBalance: e.target.value});
  },


  handleRedeemCodeChange: function(e){
        
    //     console.log(e.target.value);
    // // console.log(e);
    this.setState({redeemCode: e.target.value});
  },





  // This function will respond to the user input 
  // Custom (developer created)
  handleChange: function(event){

      // Here we create syntax to capture any change in text to the query terms (pre-search).
      // See this Stack Overflow answer for more details: 
      // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

  },

  // When a user submits... 
  // Custom (developer created)
  handleClick: function(){

    // preventing the form from trying to submit itself
    event.preventDefault();

    // console.log("CLICK");

    // console.log(this.state.storeName+" "+this.state.cardBalance+" "+this.state.redeemCode);
    helpers.addCard(this.state.storeName, this.state.cardBalance, this.state.redeemCode);




  },


  // Here we render the function
  render: function(){

    return(
  


        <div className="panel panel-primary" id="addcard">
              <div className="panel-heading" id="addcardhead">

              <h3 className="panel-title"><b>Add Gift Card</b></h3>

              </div>
              <div className="panel-body" id="addcardbody">
              <form onSubmit={this.handleClick}>
                 <div className="form-group">
                    <label htmlFor="">Store Name</label>
                    <input
                      type="text"
                      placeholder="Store Name"
                      // value={this.state.StoreName}
                      className="form-control"
                      id="storeName"
                      onChange={this.handleStoreNameChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                      <label htmlFor="">Card Balance</label>
                      <input
                      type="text"
                      placeholder="Balance"
                      // value={this.state.CardBalance}
                      className="form-control"
                      id="cardBalance"
                      onChange={this.handleCardBalanceChange}
                      required
                    /> 
                  </div>

                  <div className="form-group">
                      <label htmlFor="">Redemption Code</label>
                      <input
                      type="text"
                      placeholder="Redemption"
                      className="form-control"
                      id="redeemCode"
                      onChange={this.handleRedeemCodeChange}
                      required
                    /> 
                  </div>
                 <br></br>
                 <button type="submit" className="btn btn-primary" id="addCardBtn" onClick={this.handleClick}>Add Card</button>
 

              </form>

              </div>
              
              
          </div>
             


    )
  }
});

// Export the component back for use in other files
module.exports = AddCard;