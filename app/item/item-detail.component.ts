import {Component, OnInit, ViewContainerRef} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {ModalDialogOptions, ModalDialogService, RouterExtensions} from "nativescript-angular";
import {SampleDialog} from "../SampleDialog/SampleDialog";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private viewContainerRef: ViewContainerRef,
        private modalService: ModalDialogService,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }

    onNavBtnTap() {
        this.routerExtensions.back();
    }

    dialogBtnClicked() {
        let options: ModalDialogOptions = {
            context: {promptMsg: "This is the prompt message made longer!"},
            fullscreen: false,
            viewContainerRef: this.viewContainerRef
        };

        this.modalService.showModal(SampleDialog, options)
            .then((dialogResult: any) => console.log(JSON.stringify(dialogResult)))
    }
}
