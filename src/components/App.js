import React from 'react';

import Header from "./Header";

class App extends React.Component {
    state = { 
        pageHeader: "Sing Tao Daily icon here"
    };

    componentDidMount() {
        // timers, listeners
    }

    componentWillUnmount() {
        // clean timers, listeners
    }

    render() {
        return (
            <div className="App">
                <Header message={ this.state.pageHeader } />
                <div>
                    ---
                </div>
            </div>
        );
    }
};

// App.defaultProps = {
//     headerMessage: 'Default message here!'
// }

export default App;