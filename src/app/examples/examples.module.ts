import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ExamplesComponent } from './examples.component';
import { ExamplesService } from './examples.service';
import { ExampleIndexComponent } from './example-index/example-index.component';
import { ExampleNewComponent } from './example-new/example-new.component';
import { ExampleEditComponent } from './example-edit/example-edit.component';
import { ExampleShowComponent } from './example-show/example-show.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ExamplesComponent,
    ExampleIndexComponent,
    ExampleNewComponent,
    ExampleEditComponent,
    ExampleShowComponent
  ],
  providers: [
    ExamplesService
  ]
})
export class ExamplesModule { }
