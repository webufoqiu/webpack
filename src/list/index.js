'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import '../css/main.less';
import logo from '../images/logo.gif';

class Mylist extends React.Component {

    render() {
        return <div className="main-text">
            List Text  <img src = { logo } />
            </div>
    }

}
ReactDom.render(
    <Mylist />,
    document.getElementById("root")
);
