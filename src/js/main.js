var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./home');
var Info = require('./info');
var $ = require('jquery');

var InfoDom = React.createClass({
    getInitialState : function(){
        return {page:<Home getInfo={this._getInfo}/>};
    },
    render : function(){
        return this.state.page;
    },
    _getInfo: function(type){
        var data = ['test1','test2'];
        $('body').attr("class","_info");
        switch (type){
            case 1 : this.setState({page:<Info title={data} />});break;
        }
    }
});



ReactDom.render(
    <InfoDom/>,
    document.getElementById('container')
);