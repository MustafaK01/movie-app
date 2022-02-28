import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';



const routes:Routes = [
  {path:'category',redirectTo:'movies',pathMatch:'full'},
  {path:'',redirectTo:'movies',pathMatch:'full'},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],

})
export class AppRoutingModule { 

}



