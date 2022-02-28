import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { AuthGuard } from "../auth/auth.guard";
import { SharedModule } from "../shared/alert/shared.module";
import { CategoryAddComponent } from "./category-add/category-add.component";
import { CategoryComponent } from "./category.component";

@NgModule({
    declarations:[
        CategoryComponent,
        CategoryAddComponent
        
    ],
    imports:[
        AppRoutingModule,
        RouterModule.forChild(
            [{path:'category/add',component:CategoryAddComponent,canActivate:[AuthGuard]}]
            ),
        CommonModule,
        FormsModule,
        SharedModule

    ],
    exports:[
        CategoryComponent,
        CategoryAddComponent
    ]
})
export class CategoriesModule{

}
