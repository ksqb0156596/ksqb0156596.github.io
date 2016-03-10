/**
 * Created by Administrator on 2016/3/10.
 */
require('../../less/main.less');
var React = require('react');
var ReactDom = require('react-dom');
var swal = require('sweetalert');
require('../../node_modules/sweetalert/dist/sweetalert.css');

var CommentBox = React.createClass({
    getInitialState : function(){
        return {showFlag:false}
    },
    render: function() {
        return (
            <div className="title">
                {this.state.showFlag ? <QRCode /> : ''}
                <h1>马 琨(Ma Kun)</h1>
                <h4>
                    <span className="label label-default">Skill:</span>
                    <span className="skill label label-info">java</span>
                    <span className="skill label label-success">javascript</span>
                    <span className="skill label label-warning">mysql</span>
                    <span className="skill label label-danger">oracle</span>
                </h4>
                <span className="link">Link:</span>
                <ul className="myLink">
                    <li>
                        <span className="fa-stack fa-lg" onClick={this._showLink.bind(null,1)}>
                            <i className="fa fa-circle-o fa-stack-2x"></i>
                            <i className="fa fa-facebook fa-stack-1x"></i>
                        </span>
                    </li>
                    <li>
                        <span className="fa-stack fa-lg" onClick={this._showLink.bind(null,2)}>
                            <i className="fa fa-circle-o fa-stack-2x"></i>
                            <i className="fa fa-github fa-stack-1x"></i>
                        </span>
                    </li>
                    <li>
                        <span className="fa-stack fa-lg" onClick={this._showLink.bind(null,3)}>
                            <i className="fa fa-circle-o fa-stack-2x"></i>
                            <i className="fa fa-wechat fa-stack-1x"></i>
                        </span>
                    </li>
                </ul>
            </div>
        );
    },
    _showLink : function(type){
        switch (type){
            case 1 : window.location.href = "https://www.facebook.com/profile.php?id=100011125991941";break;
            case 2 : window.location.href = "https://github.com/ksqb0156596";break;
            case 3 : swal({title:'',text:'',imageUrl:'../images/qrcode.png',imageSize:'300x300'});break;
        }
    }
});

var QRCode = React.createClass({
    render : function(){
        return <div><img src="../images/qrcode.png" /></div>
    }
});

module.exports = CommentBox;
