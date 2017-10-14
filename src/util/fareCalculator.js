

const calculateFare = (baseFare, timeRate, time,  distanceRate, distance, charge)=>{
	const distanceInKm = distance * 0.001;
	const timeInMin = time * 0.0166667;
	const pricePerKm = timeRate * timeInMin;
	const pricePerMinute = distanceRate * distanceInKm;
	const totalFare = (baseFare + pricePerKm + pricePerMinute) * charge;
	return Math.round(totalFare);
};

export default calculateFare;