import { AppComponent } from '../app/app.component';
import { TestBed, async } from '@angular/core/testing';

describe("tests/app.component.tests.ts ", () => {

    let appComponent:AppComponent;
    beforeAll( () => {
        appComponent = new AppComponent();
    });

    it("should create AppComponent instance", () => {
        expect(appComponent).toBeDefined();
    });
    it('should set title', () => {
        expect(appComponent.title)
            .toContain('angular-app');
    });
    it('should set selectedItem.id', () => {
        expect(appComponent.selectedItem.id).toBe(0);
    });
    it('should set selectedItem.displayName', () => {
        expect(appComponent.selectedItem.displayName)
            .toBe('none');
    });
});

describe('AppComponent rendering tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

    it('should display inside DOM 0 - none', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const element = fixture.debugElement.nativeElement;
        let selectedDiv = element.querySelector('#selectedItemText');
        expect(selectedDiv.innerHTML).toContain('0 - none');
    }));

it('should update DOM after click', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement;
    let button_1 = element.querySelector('#select_button_0');
    button_1.click();

    fixture.detectChanges(); 

    let selectedDiv = element.querySelector('#selectedItemText');
    expect(selectedDiv.innerHTML).toContain('FirstElement');
}));

});
