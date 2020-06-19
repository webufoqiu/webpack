'use strict';
import React from 'react';
import ReactDom from 'react-dom';

class Mylist extends React.Component {

    render() {
        return <div>List Text</div>
    }

}
ReactDom.render(
    <Mylist />,
    document.getElementById("root")
);
