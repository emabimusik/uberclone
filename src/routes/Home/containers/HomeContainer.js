
import {connect} from 'react-redux';
import Home from '../components/Home';
import {
    //setName
    getCurrentLocation,
    getImputData,
    toggleSearchResultModal,
    getAddressPredictions,
    getSelectedAddress,
    bookCar,
    getNearByDrivers
} from '../modules/home';

const mapStateToProps = (state) => ({
    region :  state.home.region,
    inputData:state.home.inputData ||{},
    resultTypes:state.home.resultTypes||{},
    predictions:state.home.predictions||[],
    selectedAddress:state.home.selectedAddress||{},
    fare:state.home.fare,
    booking: state.home.booking ||{},
    nearByDrivers : state.home.nearByDrivers||[]
});
const mapActionCreators = {
    getCurrentLocation,
    getImputData,
    toggleSearchResultModal,
    getAddressPredictions,
    getSelectedAddress,
    bookCar,
    getNearByDrivers
};

export default connect(mapStateToProps,mapActionCreators)(Home)