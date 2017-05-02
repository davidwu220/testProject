import React from 'react';
import axios from 'axios';
import Header from './Header';
import PatentsPreview from './PatentsPreview';


const host = 'http://www.patentsview.org/api/patents/query?q=';


class App extends React.Component {
    state = {
        pageHeader: 'Patents View',
        patents: []
    };

    // Making sure the DOM is ready
    componentDidMount() {
        // ajax calls, set timers, listeners
        axios.get(host + '{"_gte":{"patent_date":"2007-01-04"}}')
            .then((response) => {
                this.setState({
                    patents: response.data.patents
                });
            })
            .catch(console.error);
    }

    componentWillUnmount() {
        // clear timers, listeners
    }

    render() {
        return (
            <div className='App'>
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.patents.map((patent) =>
                        <PatentsPreview key={patent.patent_id} {...patent} />
                    )}
                </div>
            </div>
        );
    }
};

export default App;