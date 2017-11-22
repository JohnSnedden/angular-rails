import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';  // is this needed?
import { ExamplesComponent } from './examples.component';
import { ExampleIndexComponent } from './example-index/example-index.component';
import { ExampleNewComponent } from './example-new/example-new.component';
import { ExampleEditComponent } from './example-edit/example-edit.component';
import { ExampleShowComponent } from './example-show/example-show.component';

const exampleRoutes: Routes = [
  {
      path: 'examples',
      component: ExamplesComponent,
      children: [ // create the sub sections (children) for this route
          {
              path: '',
              component: ExampleIndexComponent
          },
          {
              path: 'new',
              component: ExampleNewComponent
          },
          {
              path: 'edit/:id',
              component: ExampleEditComponent
          },
          {
              path: ':id',
              component: ExampleShowComponent
          }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule, // is this needed?
    RouterModule.forChild(exampleRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ExamplesRoutingModule { }
