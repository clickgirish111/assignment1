import { ModalDialogComponent } from './components/common/modal-dialog/modal-dialog.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './components/employee/list/list.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { CardComponent } from './components/common/card/card.component';
import { EmployeeContainerComponent } from './components/common/employee-container/employee-container.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent,
    NotFoundComponent,
    CardComponent,
    EmployeeContainerComponent,
    ModalDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListComponent },
      { path: 'employee/new', component: EmployeeCreateComponent },
      { path: 'employees', component: ListComponent },
      { path: 'edit/:id', component: EmployeeCreateComponent },
      { path: 'create', component: EmployeeCreateComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', component: NotFoundComponent }
    ]),

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
