import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Card} from "../card/card";
import {Observable} from "rxjs/Observable";
import {componentDestroyed} from "ng2-rx-componentdestroyed";
import {PlayComponent} from "../play-component/play.component";
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {CardState} from "../play-component/CardState";

@Component({
    selector: 'app-join-game',
    templateUrl: './join-game.component.html',
    styleUrls: ['./join-game.component.css']

})
export class JoinGameComponent implements OnInit, OnDestroy {

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private db: AngularFireDatabase) {
        iconRegistry.addSvgIcon(
            'happy',
            sanitizer.bypassSecurityTrustResourceUrl('assets/happy.svg'));
        iconRegistry.addSvgIcon(
            'smile',
            sanitizer.bypassSecurityTrustResourceUrl('assets/smile.svg'));
        iconRegistry.addSvgIcon(
            'laughing',
            sanitizer.bypassSecurityTrustResourceUrl('assets/laughing.svg'));
        iconRegistry.addSvgIcon(
            'smart',
            sanitizer.bypassSecurityTrustResourceUrl('assets/smart.svg'));

    }

    public inGame: boolean = false;

    public emojiState: number;

    public happy: boolean = false;
    public smile: boolean = false;
    public smart: boolean = false;
    public laughing: boolean = false;



    public gameId: string;

    public card: Card;
    public cardState: CardState;
    public points: number = 0;
    public selectedHints: number[] = [];

    public synIndex: number = 0;
    public antIndex: number = 0;
    public genIndex: number = 0;
    public exIndex: number = 0;

    game: Observable<any>;

    public joinGame() {
        if(!this.gameId) return;
        this.game = this.db.object('games/' + this.gameId).valueChanges();
        this.game.takeUntil(componentDestroyed(this)).subscribe(ob => {
            if (ob) {

                this.card = ob.card;

                this.cardState = ob.cardState;

                this.synIndex = this.cardState.synIndex;
                this.antIndex = this.cardState.antIndex;
                this.genIndex = this.cardState.genIndex;
                this.exIndex = this.cardState.exIndex;

                this.points = ob.points;

                this.emojiState = ob.emojiState;
                if(ob.selectedHints)
                    this.selectedHints = ob.selectedHints;

                else
                    this.selectedHints = [];


                if(ob.emojiState == 1){
                    this.happy = true;
                    this.smile = false;
                    this.smart = false;
                    this.laughing = false;
                } else if (ob.emojiState == 2) {
                    this.happy = false;
                    this.smile = true;
                    this.smart = false;
                    this.laughing = false;
                } else if (ob.emojiState == 3) {
                    this.happy = false;
                    this.smile = false;
                    this.smart = true;
                    this.laughing = false;
                } else if (ob.emojiState == 4) {
                    this.happy = false;
                    this.smile = false;
                    this.smart = false;
                    this.laughing = true;
                }




            } else {
                this.card = null;
                this.points = null;
                this.selectedHints = null;
            }

        });
        this.inGame = true;
    }



    // public getEmojiHappy(){
    // console.log("hello");
    // }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

}
