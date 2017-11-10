import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {AuthGuard} from "./authentication/auth.guard";
import {SigninComponent} from "./signIn/signin.component";

const routes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: "", redirectTo: "/items", pathMatch: "full", canActivate: [AuthGuard]},
    { path: "items", component: ItemsComponent, canActivate: [AuthGuard]},
    { path: "item/:id", component: ItemDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true } )],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }