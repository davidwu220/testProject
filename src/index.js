import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return (
        <div>
            <h2 className="text-center">
                {props.headerMessage}
            </h2>
            <div>
                ...
            </div>
        </div>
    );
};

// Can actually obmit the .isRequired because it has a default value
App.propTypes = {
    headerMessage: React.PropTypes.string.isRequired
}

App.defaultProps = {
    headerMessage: 'Default message here!'
}

ReactDOM.render(
    <App headerMessage="Hello props!" />,
    document.getElementById('root')
);