import React from 'react';
import { withRouter } from 'react-router';

class RenderShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: null
        }
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/shows/' + this.props.match.params.id)
            .then(response => response.json())
            .then(
                (show) => {
                    this.setState({
                        show: show
                    });
                }
            );
    }

    render() {
        const show = this.state.show;
        return(
            (show === null)
                ? <div>Loading</div>
                : <div>
                    <h1>{show.name}</h1>
                    <span>{show.status}</span>
                    <span>{show.premiered}</span>
                    {show.summary}
                    <img src={show.image.original} alt='poster' />
                  </div>
        );
    };
}

export default withRouter(RenderShow);