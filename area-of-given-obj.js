const prompt = require('prompt-sync')();

class Area{
    circle(r){
    let area = 3.14*r*r;
    return area;
    }

    square(s){
        let area = s*s;
        return area;
        }

     rectangle(w,h){
        let area = w*h;
        return area;
        }

    triangle(b,h){
        let area = (1/2 )* b * h;
        return area;
        }
        }

        class Myclass extends Area{
            circle(radius){
            result= super.circle(radius);
            return result;
            }

            square(side){
            result= super.square(side);
            return result;
            }

            rectangle(width,height){
            result= super.rectangle(width,height);
            return result;
            }

            triangle(base,height1){
            result= super.triangle(base,height1);
            return result;
            }
            }

            let choice = parseInt(prompt("1:circle\n 2:square\n 3:Rectangle\n 4:Triangle \nEnter your choice:"))
let mc = new Myclass()
let result;
switch(choice){
case 1:
    let radius =parseFloat(prompt("enter the radius:"))
    result=mc.circle(radius);
    break;

case 2:
    let side =parseFloat(prompt("enter the length:"))
    result=mc.square(side);
    break;

case 3:
    let width =parseFloat(prompt("enter the width:"))
    let height =parseFloat(prompt("enter the height:"))
    result=mc.rectangle(width,height);
    break;

case 4:
    let base =parseFloat(prompt("enter the base:"))
    let height1 =parseFloat(prompt("enter the height:"))
    result=mc.triangle(base,height1);
    break;

    default: result="invalid entry";
}
console.log("area : "+result)
            
            