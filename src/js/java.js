/**
 * Created by Administrator on 2016/3/10.
 */
var React = require('react');
var ReactDom = require('react-dom');

var LeftTile = React.createClass({
    getInitialState : function(){
        var data = [
            "test1","test2"
        ];
    },
    render: function(){

    }
});

var UList = React.createClass({
    render : function(){
        var list = this.props.list;
        var li = ''
        for(var i in list){
            li += <li><a href="#">{list[i]}</a></li>;
        }
        var ul = <ul>{li}</ul>;
    }
})