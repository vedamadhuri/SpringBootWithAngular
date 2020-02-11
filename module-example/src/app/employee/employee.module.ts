import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './list/list.component';
import { ContainerComponent } from './container/container.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ListComponent, ContainerComponent, AddComponent, UpdateComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    
  ]
})
export class EmployeeModule { }
