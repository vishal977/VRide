export const APP_NAME = 'VRide'

//Context
export const CHECK_SIGNED_IN_URL = 'http://localhost:8080/checksignin'
export const LOGIN_URL = 'http://localhost:8080/login'
export const SIGNOUT_URL = 'http://localhost:8080/signout'
export const SIGNUP_URL = 'http://localhost:8080/signup'

//NavigationBar
export const SIGNED_IN_LINKS = ['Home','Create Carpool','My Carpools', 'My Rides', 'Sign Out']
export const SIGNED_OUT_LINKS = ['Home','Sign Up','Contact Us']

//CarpoolFeed
export const CARPOOL_URL = 'http://localhost:8080/carpools'
export const NO_CARPOOLS = 'No available carpools!'
export const DIST_METRES = ' metres away.'
export const DIST_KMS = ' kms away.'

//Create Carpool 
export const SELECT_DAY = ["Select Day",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,27,28,29,30,31]
export const SELECT_MONTH = [
                                {"value": 0, name: "Select Month"}, 
                                {"value": 1, "name": "Jan"},
                                {"value": 2, "name": "Feb"},
                                {"value": 3, "name": "Mar"},
                                {"value": 4, "name": "Apr"},
                                {"value": 5, "name": "May"},
                                {"value": 6, "name": "Jun"},
                                {"value": 7, "name": "Jul"},
                                {"value": 8, "name": "Aug"},
                                {"value": 9, "name": "Sep"},
                                {"value": 10, "name": "Oct"},
                                {"value": 11, "name": "Nov"},
                                {"value": 12, "name": "Dec"}
                            ]
export const SELECT_TOD = ["Time of Day", "AM", "PM"]
export const DATE_FORMAT = 'YYYY-MMY-DD'
export const TIME_FORMAT = 'HH:mm'

//Maps API 
export const API_TOKEN = 'AIzaSyDp7Mg6f15W5wGeWjKClAWQCXuzgWxhjvw';

//Create Carpool
export const CREATE_CARPOOL_URL = "http://localhost:8080/createcarpool";
