"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var SampleDialog_1 = require("./SampleDialog/SampleDialog");
var auth_service_1 = require("./authentication/auth.service");
var auth_guard_1 = require("./authentication/auth.guard");
var signin_component_1 = require("./signIn/signin.component");
var nativescript_angular_1 = require("nativescript-angular");
var forms_1 = require("@angular/forms");
// FIREBASE
var angularfire2_1 = require("angularfire2");
var auth_1 = require("angularfire2/auth");
var database_1 = require("angularfire2/database");
var firestore_1 = require("angularfire2/firestore");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var firebaseConfig = {};
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule,
                forms_1.ReactiveFormsModule,
                angularfire2_1.AngularFireModule.initializeApp(firebaseConfig),
                database_1.AngularFireDatabaseModule,
                auth_1.AngularFireAuthModule,
                firestore_1.AngularFirestoreModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                SampleDialog_1.SampleDialog,
                signin_component_1.SigninComponent
            ],
            entryComponents: [
                SampleDialog_1.SampleDialog
            ],
            providers: [
                item_service_1.ItemService,
                auth_service_1.AuthService,
                auth_guard_1.AuthGuard
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsNERBQXlEO0FBQ3pELDhEQUEwRDtBQUMxRCwwREFBc0Q7QUFDdEQsOERBQTBEO0FBQzFELDZEQUE2RDtBQUM3RCx3Q0FBbUQ7QUFDbkQsV0FBVztBQUNYLDZDQUFpRDtBQUNqRCwwQ0FBMEQ7QUFDMUQsa0RBQXVGO0FBQ3ZGLG9EQUFnRjtBQUloRiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFFdEUsSUFBTSxjQUFjLEdBQUcsRUFFdEIsQ0FBQztBQXVDRjtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFwQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiw4Q0FBdUI7Z0JBQ3ZCLDJCQUFtQjtnQkFDbkIsZ0NBQWlCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztnQkFDL0Msb0NBQXlCO2dCQUN6Qiw0QkFBcUI7Z0JBQ3JCLGtDQUFzQjthQUN6QjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLDJCQUFZO2dCQUNaLGtDQUFlO2FBQ2xCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLDJCQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gsc0JBQVM7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTYW1wbGVEaWFsb2d9IGZyb20gXCIuL1NhbXBsZURpYWxvZy9TYW1wbGVEaWFsb2dcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uL2F1dGguZ3VhcmRcIjtcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduSW4vc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuLy8gRklSRUJBU0VcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnYW5ndWxhcmZpcmUyJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXJmaXJlMi9hdXRoJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGUsIEFuZ3VsYXJGaXJlRGF0YWJhc2UgfSBmcm9tICdhbmd1bGFyZmlyZTIvZGF0YWJhc2UnO1xuaW1wb3J0IHtBbmd1bGFyRmlyZXN0b3JlLCBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlfSBmcm9tICdhbmd1bGFyZmlyZTIvZmlyZXN0b3JlJztcblxuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcblxufTtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyksXG4gICAgICAgIEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGUsXG4gICAgICAgIEFuZ3VsYXJGaXJlQXV0aE1vZHVsZSxcbiAgICAgICAgQW5ndWxhckZpcmVzdG9yZU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFNhbXBsZURpYWxvZyxcbiAgICAgICAgU2lnbmluQ29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgU2FtcGxlRGlhbG9nXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxuICAgICAgICBBdXRoR3VhcmRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=