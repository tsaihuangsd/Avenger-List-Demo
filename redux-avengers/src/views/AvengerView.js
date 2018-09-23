import React from 'react';
import { connect } from 'react-redux';

import { getAvengers } from '../store/actions';

import Avenger from '../components/Avenger/Avenger';

class AvengerView extends React.Component {
    componentDidMount() {
        if (this.props.avengersList.length === 0) {
            this.props.getAvengers();
        }
    }

    handleDeleteAvenger = avengerId => {
        // return axios.delete(`http://localhost:5000/avengers/${avengerId}`)
        // .then(response => this.setState({ avengersData: response.data }));
    }

    goToUpdateAvengerForm = (event, id) => {
        // event.preventDefault();
        // const avengerToUpdate = this.state.avengersData.find(avenger => avenger.id == id);
        // this.setState({ isUpdating: true, avenger: avengerToUpdate }, () => this.props.history.push('/avenger-form'));
    }

    render() {
        return (
            <Avenger 
              {...this.props} 
              avengersList={this.props.avengersList} 
              isLoading={this.props.isLoading}
              handleDeleteAvenger={this.handleDeleteAvenger}
              goToUpdateAvengerForm={this.goToUpdateAvengerForm}
            /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        );
    }
}

const mapStateToProps = state => ({
    avengersList: state.avengers,
    isLoading: state.isLoading,
});

export default connect(mapStateToProps, { getAvengers })(AvengerView);