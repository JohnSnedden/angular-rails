import { Component, OnInit } from '@angular/core';
import { ExamplesService } from './examples.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  constructor(private example: ExamplesService) { }

  ngOnInit() {
  }

  createExample() {
    // this.example.createExample(this.);
  }
}
