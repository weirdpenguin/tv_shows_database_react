import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import RenderShow from '../components/RenderShow';

class SortOutShow extends React.Component {
    render() {
        const showsList = this.props.showsList;

        return (
            <div>
                {showsList.map(show => (
                    <div key={show.show.id}>
                        <Link to={'/shows/' + show.show.id}>{show.show.name}</Link>
                        <br />
                        <span>status: {show.show.status}</span>
                        <br />
                        <span>premiered: {show.show.premiered}</span> {/* проверка */}
                        <img src={show.show.image.medium} alt='poster' />
                    </div>
                ))}
            </div>
        );
    };
}

SortOutShow.propTypes = {
    showsList: PropTypes.array
};

SortOutShow.defaultProps = {
    showsList: []
};

export default SortOutShow;