import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ExamplesService {

  baseUrl = 'http://localhost:4741';

  // Read (all)
  getAllExamples() {
    return this.http.get(`${this.baseUrl}/examples`);
  }

  // Read (one)
  getOneExample(exampleId) {
    console.log(exampleId);
    return this.http.get(`${this.baseUrl}/examples/${exampleId}`);
  }

  // Delete
  deleteExample(example) {
    console.log(example.id);
    return this.http.delete(`${this.baseUrl}/examples/${example.id}`);
  }

  // Create
  saveExample(newExample) {
    console.log(newExample);
    return this.http.post(`${this.baseUrl}/examples/`, newExample);
  }

  // Update
  updateExample(updatedExample) {
    return this.http.put(`${this.baseUrl}/examples/${updatedExample.id}`, updatedExample);
  }

  constructor(private http: Http) { }

}
