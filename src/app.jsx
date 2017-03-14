"use strict";
import React from 'react'
import ReactDOM from 'react-dom'



var SiteList = React.createClass({

  getInitialState: function() {
    //create a temporary storage array to hold sites until I get the db rolling
    return {
      //Name: "", //not sure if I want to add this or not
     // Destination: "", //not sure if I want to add this or not
      sites: [],
      id: 0
    };
  },
  //add a site to the list
  addSite: function(preD) {
    //create a temp sites array until database is set up
    var sitesArray = this.state.sites;

    //if (this.inputSite.value !== "") {
      sitesArray.push(
        {
          text: this.inputSite.value,
        }
      );
    //}

    this.setState({
      sites: sitesArray
    });

    this.inputSite.value = "";

    preD.preventDefault();
  },
 //remvoe a site from the list...can't get this to work yet
  // removeSite: function(index) {
  //   this.setState({
  //       sites: this.state.sites.filter(function (e, i) {
  //       return i !== index;
  //     })
  //   });
  // },



  render: function() {
      return (

      <div>
        <div className="header">
        <form onSubmit={this.addSite}>
          <input ref={(userInput) => this.inputSite = userInput}
          placeholder="Enter Destination">
          </input>
          <button className="button" type="submit">ADD ATTRACTION TO LIST</button>
        </form>
        </div>
        <SitesToVisit entries={this.state.sites}/>
      </div>
      );
    }
});



//need to create the list of places to visit
//should be able to add and remove elements
var SitesToVisit = React.createClass({

  render: function(props) {

    var todoEntries = this.props.entries;

    function createTasks(site) {

      return <li key={site.key}>{site.text}</li>

    }
 
    var siteVisits = todoEntries.map(createTasks);

//create the list items...can't seem to get remove to work, need to refactor
    return (
      <ol className="siteVisits">
        <span>{siteVisits}</span>
      </ol>
    );


  }
});


ReactDOM.render(

  <SiteList/>,
  document.getElementById('travelapp')

);