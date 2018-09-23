import React from 'react';
import { connect } from 'react-redux';

import { addNewAvenger } from '../store/actions';

import AvengerForm from '../components/AvengerForm/AvengerForm';

const blankFormValues = {
    name: '',
    nickname: '',
    description: '',
    thumbnail: '',
    img: '',
    movies: [],
  };

class AvengerFormView extends React.Component {
    state = {
        avenger: {
            name: '',
            nickname: '',
            description: '',
            thumbnail: '',
            img: '',
            movies: [],
        },
        isUpdating: false,
    };

    handleChange = event => {
        if (event.target.name === 'movies') {
          const movies = event.target.value.split(', ');
          this.setState({
            avenger: {
              ...this.state.avenger,
              movies, // same as movies: movies
            }
          });
        } else {
          this.setState({
            avenger: {
              ...this.state.avenger,
              [event.target.name]: event.target.value,
            }
          });
        }
    }

    handleAddNewAvenger = event => {
        event.preventDefault();
        console.log('firing')
        this.props.addNewAvenger(this.state.avenger);
        this.props.history.push('/avengers');
    }

    handleUpdateAvenger = avengerId => {
        // axios.put(`http://localhost:5000/avengers/${avengerId}`, this.state.avenger)
        //   .then(response => {
        //     this.setState({
        //       avengersData: response.data, 
        //       isUpdating: false,
        //       avenger: blankFormValues,
        //     });
        //     this.props.history.push(`/avengers/${avengerId}/info`);
        //   });
      }

    render() {
        return (
            <AvengerForm 
              {...this.props} 
              avenger={this.state.avenger} 
              handleAddNewAvenger={this.handleAddNewAvenger}
              handleChange={this.handleChange}
              handleUpdateAvenger={this.handleUpdateAvenger}
              isUpdating={this.state.isUpdating} 
            /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        );
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps, { addNewAvenger })(AvengerFormView);