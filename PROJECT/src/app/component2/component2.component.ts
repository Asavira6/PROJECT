import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
 title : string = "This is my title"
  constructor() { }

  ngOnInit(): void {
  }

}