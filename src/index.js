import * as React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

class APP extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                document
            </div>
        )
    }
}

ReactDOM.render(<APP />, document.getElementById('root'));