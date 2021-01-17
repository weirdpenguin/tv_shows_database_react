import React from 'react';
import SortOutShow from '../models/SortOutShow';

class RenderShowsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        }
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=battlestar-galactica')
            .then(response => response.json())
            .then(
                (show) => {
                    this.setState({
                        isLoaded: true,
                        list: show
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, list } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if  (!isLoaded) {
            return <div>Loading</div>;
        } else {
            return (
                <SortOutShow showsList={list}/>
            );
        }
    }
}

export default RenderShowsList;