import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  title:string ="Add Note";
  titleColor:string ="red";
  noteContent:string="";
  currentDate:Date = new Date(2021, 4, 1);
  currentDate2= Date.now();
  show = false;
  array= ['string1','string2'];

  
  constructor() { }

  ngOnInit(): void {
    
  }

  setTitle(){
    this.title="Test";
    this.show=true;
  }
  onClicke(){
   // this.noteContent=this.titleColor;
    if(this.noteContent="green"){
      this.titleColor="green";
    }else if(this.noteContent="red"){
      this.titleColor="red";
    }else if(this.noteContent="blue"){
      this.titleColor="blue";
    }
  }
}
