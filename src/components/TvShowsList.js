import React from 'react';

class TvShowsList extends React.Component {
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
        console.log(list);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if  (!isLoaded) {
            return <div>Loading</div>;
        } else {
            return (
                <ul>
                    {list.map(show => (
                        <li key={show.show.id}>
                            {show.show.url} {show.show.name}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default TvShowsList;