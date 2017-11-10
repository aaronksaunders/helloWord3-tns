"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var SampleDialog = (function () {
    function SampleDialog(params) {
        this.params = params;
        this.prompt = params.context.promptMsg;
    }
    SampleDialog.prototype.close = function (result) {
        this.params.closeCallback({ time: new Date(), result: result });
    };
    SampleDialog = __decorate([
        core_1.Component({
            selector: "sample-dialog-content",
            template: "\n    <StackLayout margin=\"24\" horizontalAlignment=\"center\" verticalAlignment=\"center\">\n        <Label [text]=\"prompt\"></Label>\n        <StackLayout orientation=\"horizontal\" marginTop=\"12\">\n        <Button text=\"OK\" (tap)=\"close('OK')\"></Button>\n        <Button text=\"CANCEL\" (tap)=\"close('Cancel')\"></Button>\n        </StackLayout>\n    </StackLayout>\n  "
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], SampleDialog);
    return SampleDialog;
}());
exports.SampleDialog = SampleDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FtcGxlRGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2FtcGxlRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGtFQUFzRTtBQWN0RTtJQUVJLHNCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFFTSw0QkFBSyxHQUFaLFVBQWEsTUFBYztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFSUSxZQUFZO1FBWnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSwrWEFRWDtTQUNGLENBQUM7eUNBRzhCLGdDQUFpQjtPQUZwQyxZQUFZLENBU3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2FtcGxlLWRpYWxvZy1jb250ZW50XCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQgbWFyZ2luPVwiMjRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPExhYmVsIFt0ZXh0XT1cInByb21wdFwiPjwvTGFiZWw+XG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBtYXJnaW5Ub3A9XCIxMlwiPlxuICAgICAgICA8QnV0dG9uIHRleHQ9XCJPS1wiICh0YXApPVwiY2xvc2UoJ09LJylcIj48L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ0FOQ0VMXCIgKHRhcCk9XCJjbG9zZSgnQ2FuY2VsJylcIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFNhbXBsZURpYWxvZyB7XG4gICAgcHVibGljIHByb21wdDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcykge1xuICAgICAgICB0aGlzLnByb21wdCA9IHBhcmFtcy5jb250ZXh0LnByb21wdE1zZztcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2UocmVzdWx0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh7dGltZTogbmV3IERhdGUoKSwgcmVzdWx0OiByZXN1bHR9KTtcbiAgICB9XG59Il19