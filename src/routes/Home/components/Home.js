import React ,{Component} from 'react';
import {View,Text} from 'react-native';
import {Container} from 'native-base';
import MapContainer from './MapContainer';
import HeaderComponent from '../../../comonComponent/HeaderComponent';
import FooterComponent from  '../../../comonComponent/FooterComponent';
import Fare from './Fare';
import Fab from './Fab';
const carMarker = require("../../../assets/img/carMarker.png");


class Home extends Component{
   
 componentDidMount(){
       var rx = this;
     this.props.getCurrentLocation();
     setTimeout(function() {
       rx.props.getNearByDrivers();   
     }, 1000);
 }
     render(){
      
        const region ={
        latitude :3.146642,
         longitude:101.695845,
         longitudeDelta:0.0922,
         latitudeDelta:0.0421

        }
         return(
           <Container>
               <HeaderComponent/>
               {this.props.region.latitude &&
               <MapContainer region={this.props.region}
               getImputData={this.props.getImputData}
               toggleSearchResultModal={this.props.toggleSearchResultModal}
               getAddressPredictions={this.props.getAddressPredictions}
               predictions={this.props.predictions}
               resultTypes={this.props.resultTypes}
               getSelectedAddress= {this.props.getSelectedAddress}
               selectedAddress={this.props.selectedAddress}
               carMarker={carMarker}
               nearByDrivers={this.props.nearByDrivers}
               />
            }
           <Fab onPressAction={()=>this.props.bookCar()}/>
            {this.props.fare &&
			  <Fare fare={this.props.fare} />
			}
            <FooterComponent/>
          
            </Container>
         )
     }
}
export default Home;