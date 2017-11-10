import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "sample-dialog-content",
    template: `
    <StackLayout margin="24" horizontalAlignment="center" verticalAlignment="center">
        <Label [text]="prompt"></Label>
        <StackLayout orientation="horizontal" marginTop="12">
        <Button text="OK" (tap)="close('OK')"></Button>
        <Button text="CANCEL" (tap)="close('Cancel')"></Button>
        </StackLayout>
    </StackLayout>
  `
})
export class SampleDialog {
    public prompt: string;
    constructor(private params: ModalDialogParams) {
        this.prompt = params.context.promptMsg;
    }

    public close(result: string) {
        this.params.closeCallback({time: new Date(), result: result});
    }
}