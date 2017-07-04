import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { ConferenceApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { } from 'jasmine';

let comp: ConferenceApp;
let fixture: ComponentFixture<ConferenceApp>;

describe('Component: Root Component', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [ConferenceApp],

            providers: [

            ],

            imports: [
                IonicModule.forRoot(ConferenceApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ConferenceApp);
        comp = fixture.componentInstance;

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
    });

    it('is created', () => {

        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();

    });

    it('initialises with a root page of HomePage', () => {
        expect(comp['rootPage']).toBe(HomePage);
    });

});