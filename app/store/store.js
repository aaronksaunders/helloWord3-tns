"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
// FIREBASE
var firebase = require("firebase");
mobx_1.useStrict(true);
var UserStore = (function () {
    function UserStore(rootStore) {
        this.authorized = null;
        this.currentUser = null;
        this.error = null;
        this.rootStore = rootStore;
    }
    UserStore.prototype.login = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.error = null;
            _this.currentUser = user;
            console.log("login success");
            return user;
        }, function (error) {
            console.log(error.message);
        });
    };
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], UserStore.prototype, "authorized", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], UserStore.prototype, "currentUser", void 0);
    __decorate([
        mobx_1.observable,
        __metadata("design:type", Object)
    ], UserStore.prototype, "error", void 0);
    __decorate([
        mobx_1.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserStore.prototype, "login", null);
    return UserStore;
}());
exports.default = UserStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2RDtBQUU3RCxXQUFXO0FBQ1gsbUNBQXFDO0FBR3JDLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFZjtJQU9JLG1CQUFZLFNBQVU7UUFKVixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFVBQUssR0FBRyxJQUFJLENBQUM7UUFHckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7SUFDOUIsQ0FBQztJQUdELHlCQUFLLEdBQUwsVUFBTSxFQUFpQjtRQUR2QixpQkFXQztZQVZNLGdCQUFLLEVBQUUsc0JBQVE7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQzdELElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDZixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBbkJXO1FBQVgsaUJBQVU7O2lEQUFtQjtJQUNsQjtRQUFYLGlCQUFVOztrREFBb0I7SUFDbkI7UUFBWCxpQkFBVTs7NENBQWM7SUFPekI7UUFEQyxhQUFNOzs7OzBDQVdOO0lBQ0wsZ0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztrQkF2Qm9CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbXB1dGVkLCBhY3Rpb24sIG9ic2VydmFibGUsIHVzZVN0cmljdH0gZnJvbSAnbW9ieCc7XG5cbi8vIEZJUkVCQVNFXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcblxuXG51c2VTdHJpY3QodHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclN0b3JlIHtcbiAgICByb290U3RvcmU6IGFueTtcblxuICAgIEBvYnNlcnZhYmxlIGF1dGhvcml6ZWQgPSBudWxsO1xuICAgIEBvYnNlcnZhYmxlIGN1cnJlbnRVc2VyID0gbnVsbDtcbiAgICBAb2JzZXJ2YWJsZSBlcnJvciA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihyb290U3RvcmU/KSB7XG4gICAgICAgIHRoaXMucm9vdFN0b3JlID0gcm9vdFN0b3JlXG4gICAgfVxuXG4gICAgQGFjdGlvblxuICAgIGxvZ2luKHtlbWFpbCwgcGFzc3dvcmR9KSB7XG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIHN1Y2Nlc3NcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSJdfQ==