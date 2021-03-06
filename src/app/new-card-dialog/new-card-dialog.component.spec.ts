import {NewCardDialogComponent} from "./new-card-dialog.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Observable} from "rxjs/Observable";
import {SharedModule} from "../shared.module";
import {MATERIAL_COMPATIBILITY_MODE, MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {DeckService} from "../deck/deck.service";


describe('NewCardDialogComponent', () => {
    let component: NewCardDialogComponent;
    let fixture: ComponentFixture<NewCardDialogComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [ NewCardDialogComponent ],
            providers: [{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
                {provide:DeckService},
                {provide:MdDialogRef},
                {provide:MD_DIALOG_DATA},
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: Observable.of({id: "test id"})
                    }
                }],
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(NewCardDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should return the correct amount of hints that will be added to the card', () => {

        expect(component.countHints(['a'],'')).toEqual(1);
        expect(component.countHints(['a'],'aaa')).toEqual(2);
        expect(component.countHints([],'a')).toEqual(1);

    });

    it('should add a hint and increment count', () => {
        var synonyms: string[] = [];
        component.pushNewHint('Synonym', 'a synonym', synonyms);
        expect(synonyms.length).toEqual(1);
        expect(component.countHints(synonyms,'')).toEqual(1);
    });

    it('should not be able to add an empty string to hints', () => {
        var antonyms: string[] = [];
        component.pushNewHint('Antonym','',antonyms);
        expect(antonyms.length).toEqual(0);
        expect(component.countHints(antonyms,'')).toEqual(0);
    });

    it('should not be able to add more than 5 hints', () => {

        var testArr: string[] = ['a','b','c','d','e'];
        component.pushNewHint('test','f',testArr);
        expect(testArr.length).toEqual(5);
        expect(component.countHints(testArr,'')).toEqual(5)
    });

});
