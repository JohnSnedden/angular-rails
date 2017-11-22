import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-example-index',
  templateUrl: './example-index.component.html',
  styleUrls: ['./example-index.component.css']
})
export class ExampleIndexComponent implements OnInit {

  allExamples = [];
  user = <any>{};

  deleteExample(deletedExample) {
    this.examplesService.deleteExample(deletedExample)
    .subscribe(response => {
      const exampleIndex = this.allExamples.indexOf(deletedExample);
      this.allExamples.splice(exampleIndex, 1);
    });
  }

  constructor(
    private examplesService: ExamplesService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.examplesService.getAllExamples()
    .subscribe(response => {
      console.log(response.json());
      this.allExamples = response.json().examples;
    });
  }

}
