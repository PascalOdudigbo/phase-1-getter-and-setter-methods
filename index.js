// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    set diameter(diameter){
        this.radius = diameter/2;
    }
    set circumference(circumference){
        this.radius = (circumference / Math.PI)/2;
        
    }
    set area(area){
        this.radius = Math.sqrt((area / Math.PI));
    }
    get diameter(){
        return this.diameter = this.radius *2;
    }
    get circumference(){
        return this.circumference = (Math.PI * this.diameter);
    }
    get area(){
        return this.area = (Math.PI * Math.pow(this.radius, 2));
    }
   
}