
import { Component } from "@angular/core"


@Component({
    selector: "app-person",
    //selector: ".app-person",
    //templateUrl: "./person.component.html",
    template: `<p> Iam the person</p><p> Iam the person</p><p>
     Iam the person</p><p> 
     Iam the person</p>`,
    styles: [
        `p {
            background-color: yellow;
          }`
    ]
    //styleUrls: ["./person.component.css"]
})

export class PersonComponent {


}