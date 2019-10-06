import { Component, OnInit } from "@angular/core";
import { MessageService } from './service';
var sound = require("nativescript-sound");
import { Vibrate } from 'nativescript-vibrate';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    message;
    private vibrator;
    private tada;
    public messageList: Array<string> = [];

    constructor(private messageService: MessageService) {

    }

    ngOnInit(): void {
        this.vibrator = new Vibrate();
       // this.tada = sound.create("~/sounds/Ta-da-sound.mp3"); // preload the audio file
        setInterval( ()=>{
            this.getMessage();            
        },2000);
    }

    getMessage() {
        this.messageService.getMessage().subscribe(data => {
            if (data['ADMIN.TO.USER'] != this.message) {
             //   this.tada.play();
                this.vibrator.vibrate([1000, 300, 500, 2000]);
                this.message = data['ADMIN.TO.USER'];                
                this.messageList.push(this.message);
            }
        });

    }
}
