import { Component } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  result: string = " "
  part1: number
  part2: number
  part3: number
  op: string
  //Evenement du bouton "="
  submit() {
    this.part2 = +this.result
    this.result = " "
    switch (this.op) {
      case "plus":
        log(this.part1 + "+" + this.part2)
        log(this.result += this.part1 + this.part2)
        break;
      case "moins":
        log(this.part1 + "-" + this.part2)
        log(this.result += this.part1 - this.part2)
        break;
      case "fois":
        log(this.part1 + "*" + this.part2)
        log(this.result += this.part1 * this.part2)
        break;
      case "div":
        log(this.part1 + "/" + this.part2)
        log(this.result += this.part1 / this.part2)
        break;
      case "mod":
        
        this.result += this.part1 % this.part2
        
        log(this.result)
        break;
      default:
        this.result += this.part2
        break;
    }
  }
  //Evenement du bouton AC
  clear() {
    this.result = " "
    log(this.result)
  }
  //Evenement du bouton "+"
  add() {
    this.part1 = +this.result
    this.result = " "
    this.op = "plus"
    log(this.result)
  }
  //Evenement du bouton "-"
  retire() {
    this.part1 = +this.result
    this.result = " "
    this.op = "moins"
    log(this.result)
  }
  //Evenement du bouton "*"
  multiply() {
    this.part1 = +this.result
    this.result = " "
    this.op = "fois"
    log(this.result)
  }
  //Evenement du bouton "/"
  div() {
    this.part1 = +this.result
    this.result = " "
    this.op = "div"
    log(this.result)
  }
  //Evenement du bouton "%"
  mod() {
    this.part1 = +this.result
    this.result = " "
    this.op = "mod"
  }
  //Evenement du bouton "+/-"
  sign(){
    this.part1=+this.result
    if(this.part1 >= 0){
      this.part1= -1 * this.part1
    }else{
      this.part1= -1 * this.part1
    }
    this.result= " "
    this.result+=this.part1
    log(this.result)
  }
  //Evenement des boutons(1,2,3,4,5,6,7,8,9,0)
  click(x: number) {
    this.result = this.result + x
    log(this.result)
  }
  //Evenement du bouton ","
  comma() {
    this.result = this.result + "."
    log(this.result)
  }
}
