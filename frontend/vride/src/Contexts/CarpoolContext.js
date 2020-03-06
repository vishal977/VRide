import React, { Component, createContext } from 'react'
import axios from 'axios';
export const CarpoolContext = createContext();

export default class CarpoolContextProvider extends Component {

    state = {
              carpools:
               [ 
                    {
                        carpoolId: '450',
                        ownerId: '20',
                        carPoolOwner: 'Niranjan V',
                        fromLocation: 'Eechangadu',
                        vehicle: 'Toyota Innova',
                        regno : 'TN 11 GK 1012',
                        noOfSeats: '8'
                    }
                ]
    }

    render() {
        return (
            <CarpoolContext.Provider value = {{...this.state}}>
                { this.props.children }
            </CarpoolContext.Provider>
        )
    }
}

//API CALL 
// const baseURL = "http://localhost:8080/carpools";
//         axios.get(baseURL)
//             .then(res => {
//                 this.setState({
//                     carpools : res
//                 })
//             })
