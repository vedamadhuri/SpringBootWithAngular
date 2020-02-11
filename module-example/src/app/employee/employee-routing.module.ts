import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ContainerComponent } from './container/container.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: '', component: ContainerComponent, children: [
      { path: 'list', component: ListComponent },
      { path: 'add', component: AddComponent },
      { path: "update/:id", component: UpdateComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
