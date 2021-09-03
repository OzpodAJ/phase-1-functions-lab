// Code your solution in this file!
function distanceFromHqInBlocks(x){
    let y = Math.abs(x-42);
    return y;
}
function distanceFromHqInFeet(x){
    const z = distanceFromHqInBlocks(x)*264;
    return z
}
function distanceTravelledInFeet(a, b){
    let c = Math.abs((b - a)*264);
    return c;
}
function  calculatesFarePrice(a, b){
    if (distanceTravelledInFeet(a, b) <= 400)
        return 0
    else if (distanceTravelledInFeet(a, b) > 400 && distanceTravelledInFeet(a, b) <= 2000)
        return 0.02*(distanceTravelledInFeet(a, b) - 400)
    else if (distanceTravelledInFeet(a, b) > 2000 && distanceTravelledInFeet(a, b) <= 2500)
        return 25
    else if (distanceTravelledInFeet(a, b) > 2500)
        return "cannot travel that far";
}
