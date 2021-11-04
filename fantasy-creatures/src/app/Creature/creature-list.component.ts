import { Component } from "@angular/core";

@Component({
    selector: "pm-creatures",
    templateUrl: "./creature-list.component.html",
    styleUrls: ["./creature-list.component.css"]
})

export class CreatureListComponent {
    pageTitle: string = "Creatures";
    imageHeight = 150;
    imageMargin = 2;
    creatures: any[] = [
        {
            "creatureId": 1,
            "creatureType": "Orc",
            "description": "Green, monstrous, barbaric fighter",
            "strengths": "strong, unquestioning, follower",
            "weaknesses": "blindly follows orders",
            "imageUrl": "assets/images/3D-Orc.png"  
        }, 
        {
            "creatureId": 2,
            "creatureType": "Elf",
            "description": "respected, democratic, knowledgeable race",
            "strengths": "long-lived, wise, shrewd ",
            "weaknesses": "aloof",
            "imageUrl": "assets/images/elf.png"  
        },
        {
            "creatureId": 3,
            "creatureType": "Dwarf",
            "description": "robust, short in stature, very hairy",
            "strengths": "hardy, stubborn",
            "weaknesses": "stubborn",
            "imageUrl": "assets/images/dwarf.png"  
        },
        {
            "creatureId": 4,
            "creatureType": "Dragonborn",
            "description": "half dragon, half human, scaly, and firey",
            "strengths": "strong, intimidating",
            "weaknesses": "hotheaded",
            "imageUrl": "assets/images/dragonborn.png"  
        },
        {
            "creatureId": 5,
            "creatureType": "Wizard",
            "description": "Usually human, very long lived, can be good or evil",
            "strengths": "masters of the arcane",
            "weaknesses": "can be swayed by the power of dark magic",
            "imageUrl": "assets/images/wizard.png"  
        }


    ]

}