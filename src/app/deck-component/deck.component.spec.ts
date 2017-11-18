import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckComponent } from './deck.component';
import {SharedModule} from "../shared.module";
import {MATERIAL_COMPATIBILITY_MODE} from "@angular/material";
import {CardComponent} from "../card-component/card.component";
import {DeckService} from "../deck/deck.service";
import {Observable} from "rxjs";
import {Deck} from "../deck/deck";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../card/card";
import {AppTestModule} from "../app.test.module";

describe('DeckComponent', () => {
  let component: DeckComponent;
  let fixture: ComponentFixture<DeckComponent>;

    let deckServiceStub: {
        getDeck: (id) => Observable<Deck>,
        getDeckCards: (id) => Observable<Card[]>
    };

  beforeEach(async(() => {

      deckServiceStub = {
          getDeck: (id) => Observable.of({
              name: "test deck"
          }),
          getDeckCards: (id) => Observable.of([
              {
                  word : "test word",
                  synonym : ["test synonym"],
                  antonym: ["test antonym"],
                  general_sense: ["test general_sense"],
                  example_usage: ["test example_usage"],
              }
          ])
      };

    TestBed.configureTestingModule({
        imports: [SharedModule, AppTestModule],
        declarations: [],
        providers: [{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
            {provide: DeckService, useValue: deckServiceStub}, {
                provide: ActivatedRoute,
                useValue: {
                    params: Observable.of({id: "test id"})
                }
            }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load a deck', () => {

      expect(component.deck).toEqual({
          name: "test deck"
      });
  });

  it('should return false since there are no users', () => {
     expect(component.canEditCard(component.cards[0])).toEqual(false);
  })
});
