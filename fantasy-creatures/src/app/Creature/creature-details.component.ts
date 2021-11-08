import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'creature-details',
    templateUrl: './creature-details.component.html'
})

export class CreatureDetailsComponent implements OnInit{
    pageTitle: string = "Creature Details";

    ngOnInit(): void {

    }
}