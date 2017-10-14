export function bookCar(){
 return (dispatch,store)=>{
     const payload={
         data:{
             userName:'emabi',
             pickUp:{
                 address:store().home.selectedAddress.selectedPickUp.address,
                 name:store().home.selectedAddress.selectedPickUp.name,
                 latitude:store().home.selectedAddress.selectedPickUp.latitude,
                 longitude:store().home.selectedAddress.selectedPickUp.latitude
             },
              dropOff:{
                 address:store().home.selectedAddress.selectedDropOff.address,
                 name:store().home.selectedAddress.selectedDropOff.name,
                 latitude:store().home.selectedAddress.selectedDropOff.latitude,
                 longitude:store().home.selectedAddress.selectedDropOff.latitude
             },
             fare:store().home.fare,
             status:'pending'
         }
     };
     request.post('http://localhost:3000/api/bookings')
     .send(payload)
     .finish((error,res)=>{
         dispatch({
             type:BOOK_CAR,
             payload:res.body
         });


     });
 }
}





const styles = {
    fabContainer: {
        borderColor: "#fff",
        borderWidth: 1,
        height: 80,
        width: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 100,
        right:20,
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor:"#ffc61a"
    },
    disabledState:{       
        backgroundColor: "#D7D7D7",
    },
    activeState: {
        backgroundColor:"#FF5E3A",
    },
    btnText: {
        fontSize: 16,
        color:"#fff",
    },
    amount:{
        fontWeight:"bold",
        fontSize: 12
    }
};

export default styles;