/**
 * Created by Administrator on 2016/3/10.
 */
var React = require('react');
var ReactDom = require('react-dom');

var LeftTile = React.createClass({
    getInitialState : function(){
        var title = this.props.title;
        return {title:title};
    },
    render: function(){
        return <UList list={this.state.title}/>;
    }
});

var UList = React.createClass({
    render : function(){
        var list = this.props.list;
        var li = '';
        console.log(list);
        for(var i in list){
            {li = li==''? <ul className="nav nav-sidebar"><li><a href="#">{list[i]}</a></li></ul> : <ul className="nav nav-sidebar">{li}<li><a href="#">{list[i]}</a></li></ul>};
        }
        var ul = li;
        var div1 = <div className="col-sm-3 col-md-2 sidebar">{ul}</div>;
        var div2 = <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"></div>;
        var div = <div className="main">{div1}{div2}</div>;
        return div;
    }
});

module .exports = LeftTile;