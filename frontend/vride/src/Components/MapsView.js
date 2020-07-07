import React, { Component } from 'react'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import { API_TOKEN } from '../Res/constants';

const mapViewSize = {
    width: '800px',
    height: '500px',
    marginLeft: '100px',
    marginTop: '100px'
}

class MapsView extends Component {
    render() {
        return (
            <div>
                 <Map google={this.props.google} 
                    style = { mapViewSize }
                    initialCenter={{
                        lat: 12.988986, 
                        lng: 80.116654}}
                    zoom = { 20 }
                 />
                 <Marker
                    title={'You are here!'}
                    name={'Home'}
                    position={{lat: 12.988986, lng: 80.116654}} />
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey : (API_TOKEN)})(MapsView);


