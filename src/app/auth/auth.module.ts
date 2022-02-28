import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/alert/shared.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations:[AuthComponent],
    imports:[
    FormsModule,
    RouterModule.forChild([{path:'auth',component:AuthComponent}]),
    SharedModule
],
    exports:[]
})
export class AuthModule { }
