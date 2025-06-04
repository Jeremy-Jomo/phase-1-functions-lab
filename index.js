function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42) {
        distanceFromHqInBlocks= blocks - 42;
        return distanceFromHqInBlocks
    } else {
        distanceFromHqInBlocks= 42 - blocks;
        return distanceFromHqInBlocks
    }
}
function distanceFromHqInFeet( blocks ) {
      if (blocks >= 42) {
        distanceFromHqInFeet= (blocks - 42) * 264 ;
        return distanceFromHqInFeet
    } else {
        distanceFromHqInFeet= (42 - blocks) * 264;
        return distanceFromHqInFeet
    }
}
  function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        distanceTravelledInFeet = (start - destination) * 264
        return distanceTravelledInFeet
    }else{
        distanceTravelledInFeet = (destination-start) * 264
        return distanceTravelledInFeet
    }
  }
  function calculatesFarePrice(start, destination) {
    if ((destination - start) * 264 >=0 && (destination - start) * 264 <=400){
        calculatesFarePrice = 0
        return calculatesFarePrice
  }else if ((start - destination) * 264 > 400 && (start - destination) * 264 <= 2000)  {
    calculatesFarePrice = ((start - destination) * 264 - 400) *0.02
    return calculatesFarePrice

  }

  else if ((start - destination) * 264 > 2500) {
    calculatesFarePrice = 'cannot travel that far'
    return calculatesFarePrice

  }
  else {Math.abs(destination - start) * 264 >2000 && Math.abs(destination - start) * 264 <2500

    calculatesFarePrice= 25
    return calculatesFarePrice
  }

}