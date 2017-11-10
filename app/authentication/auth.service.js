"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.authenticated = false;
    }
    AuthService.prototype.signIn = function (user) {
        if ((user.email === 'user@email.com' || user.email === 'usuario@email.com')
            && user.password === '123456') {
            this.authenticated = true;
            this.router.navigate(['/']);
        }
        else {
            this.authenticated = false;
        }
    };
    AuthService.prototype.logout = function () {
        this.authenticated = false;
        this.router.navigate(['/signin']);
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    AuthService.prototype.showNavBar = function (ifShow) {
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUF5QztBQUt6QztJQUtJLHFCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUYxQixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUVPLENBQUM7SUFFdEMsNEJBQU0sR0FBTixVQUFPLElBQUk7UUFDUCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssZ0JBQWdCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxtQkFBbUIsQ0FBQztlQUNwRSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFTyxnQ0FBVSxHQUFsQixVQUFtQixNQUFlO0lBQ2xDLENBQUM7SUEzQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQU1tQixlQUFNO09BTHpCLFdBQVcsQ0E0QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cblxuICAgIHByaXZhdGUgYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICAgIHNpZ25Jbih1c2VyKSB7XG4gICAgICAgIGlmICgodXNlci5lbWFpbCA9PT0gJ3VzZXJAZW1haWwuY29tJyB8fCB1c2VyLmVtYWlsID09PSAndXN1YXJpb0BlbWFpbC5jb20nKVxuICAgICAgICAgICAgJiYgdXNlci5wYXNzd29yZCA9PT0gJzEyMzQ1Nicpe1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJ10pO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dOYXZCYXIoaWZTaG93OiBib29sZWFuKSB7XG4gICAgfVxufSJdfQ==