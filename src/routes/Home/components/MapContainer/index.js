import React from 'react';
import {View} from 'native-base';
import {Image} from 'native-base';
import MapView from 'react-native-maps';
import styles from './MapContainerStyles.js';
import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';

export const MapContainer = ({
    region,
    getImputData,
    toggleSearchResultModal,
    getAddressPredictions,
    predictions,
    resultTypes,
    getSelectedAddress,
    selectedAddress,
    carMarker,
    nearByDrivers
})=>{
   /* const { selectedPickUp, selectedDropOff } = selectedAddress || {};*/
 return(
     <View style={styles.container}>
        <MapView provider={MapView.PROVIDER_GOOGLE}
         style={styles.maps}
          region ={region}>
    
         <MapView.Marker
          zoomEnabled ={true}
          coordinate={region} 
          pinColor="red"
           />
        {
            nearByDrivers && nearByDrivers.map((marker,index)=>  
            <MapView.Marker
             key={index}
             coordinate={{latitude:marker.coordinate.coordinates[1],
                    longitude:marker.coordinate.coordinates[0]}}
             image={carMarker}
             
            /> 
            
    
        )
        }
       
        </MapView>
        <SearchBox getImputData={getImputData}
        toggleSearchResultModal={toggleSearchResultModal}
        getAddressPredictions={getAddressPredictions}
        selectedAddress={selectedAddress}
        />
        {(resultTypes.pickUp||resultTypes.dropOff) &&
        <SearchResults predictions={predictions} 
        getSelectedAddress={getSelectedAddress}/>
        }
    </View>
 );
}
export default MapContainer;