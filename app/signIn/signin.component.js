"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../authentication/auth.service");
var SigninComponent = (function () {
    function SigninComponent(authService) {
        this.authService = authService;
        this.error = false;
        this.errorMessage = '';
        this.loginForm = new forms_1.FormGroup({
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.min(8)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.min(8)])
        });
    }
    Object.defineProperty(SigninComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.loginForm.status); },
        enumerable: true,
        configurable: true
    });
    SigninComponent.prototype.doLogin = function () {
        console.log("doLogin", JSON.stringify(this.loginForm.value));
    };
    SigninComponent.prototype.onSignin = function () {
        this.authService.signIn(this.loginForm.value);
    };
    SigninComponent.prototype.ngOnInit = function () {
        console.log("login for initialized");
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            moduleId: module.id,
            templateUrl: 'signin.component.html',
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsd0NBQWtFO0FBQ2xFLCtEQUEyRDtBQVMzRDtJQU1JLHlCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUg1QyxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUMzQixLQUFLLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLGtCQUFVLENBQUMsUUFBUSxFQUFFLGtCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsUUFBUSxFQUFFLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFFLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBSSx1Q0FBVTthQUFkLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUVqRSxpQ0FBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUF6QlEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FFdkMsQ0FBQzt5Q0FPbUMsMEJBQVc7T0FObkMsZUFBZSxDQTBCM0I7SUFBRCxzQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoZW50aWNhdGlvbi9hdXRoLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWduaW4nLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdzaWduaW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIC8vc3R5bGVVcmxzOiBbJy4vc2lnbmluLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvZ2luRm9ybTpGb3JtR3JvdXA7XG4gICAgZXJyb3IgPSBmYWxzZTtcbiAgICBlcnJvck1lc3NhZ2UgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9naW5Gb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgICAgICBlbWFpbDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW4oOCldKSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbig4KV0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5sb2dpbkZvcm0uc3RhdHVzKSB9XG5cbiAgICBkb0xvZ2luKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG9Mb2dpblwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ2luRm9ybS52YWx1ZSkpXG4gICAgfVxuXG4gICAgb25TaWduaW4oKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbkluKHRoaXMubG9naW5Gb3JtLnZhbHVlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiBhbnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIGZvciBpbml0aWFsaXplZFwiKVxuICAgIH1cbn0iXX0=