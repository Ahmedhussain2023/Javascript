
function Car(speed, model, color,inc,dec) {
    this.speed = speed
    this.model = model
    this.color = color


}
Car.prototype.inc = function(sp){
    return this.speed + sp
}
Car.prototype.dec = function(sp){
    return this.speed - sp
}
const a = new Car(20,'corolla',"red")
console.log(a.inc(2))