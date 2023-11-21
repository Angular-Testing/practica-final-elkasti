import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Launch } from 'src/app/models/launch';
import { LAUNCH } from '../../../../test/assets/launch';
import { LaunchCardComponent } from './launch-card.component';

@Component({
  selector: 'ab-location',
  template: '',
})
class FakeLocationComponent {
  @Input() launch!: Launch;
  constructor() {}
}

@Component({
  selector: 'ab-mission',
  template: '',
})
class FakeMissionComponent {
  @Input() launch!: Launch;
  constructor() {}
}

@Component({
  selector: 'ab-service-provider',
  template: '',
})
class FakeServiceProviderComponent {
  @Input() launch!: Launch;
  constructor() {}
}

@Component({
  template: `<ab-launch-card
    [launch]="launch"
    [allowAddToFavorites]="true"
    [allowRemoveFromFavorites]="true"
    (addToFavorites)="onClicAddToFavorites($event)"
    (removeFromFavorites)="onClicRemoveFromFavorites($event)"
  ></ab-launch-card>`,
})
class LaunchCardHostComponent {
  public launch!: Launch;
  public allowAddToFavorites = false;
  public allowRemoveFromFavorites = false;
  public onClicAddToFavorites(action: string) {}
  public onClicRemoveFromFavorites() {}
}

describe('GIVEN the LaunchCardComponent on a Host Component', () => {
  let hostComponent: LaunchCardHostComponent;
  let hostFixture: ComponentFixture<LaunchCardHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        LaunchCardComponent,
        LaunchCardHostComponent,
        FakeLocationComponent,
        FakeMissionComponent,
        FakeServiceProviderComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    //arrange
    hostFixture = TestBed.createComponent(LaunchCardHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  describe('WHEN receives a launch and favorites', () => {
    beforeEach(() => {
      // act
      const input = LAUNCH;
      hostComponent.launch = input;
      hostComponent.allowAddToFavorites = true;
      hostComponent.allowRemoveFromFavorites = true;
      hostFixture.detectChanges();
    });
    it('THEN should show the name', () => {
      const actual = hostFixture.nativeElement.querySelector('a')?.textContent;
      const expected = hostComponent.launch.name;
      expect(actual).toBe(expected);
    });
    it('THEN should show the name', () => {
      const actual = hostFixture.nativeElement.querySelector(
        '[data-testid="buttonAddToFavorites"]',
      );
      expect(actual).toBeTruthy;
    });
  });

  describe('WHEN users clicks on button Add to Favorites', () => {
    beforeEach(() => {
      spyOn(hostComponent, 'onClicAddToFavorites');
      const input = LAUNCH;
      hostComponent.launch = input;
      hostFixture.detectChanges();
      hostFixture.nativeElement.querySelector('[data-testid="buttonAddToFavorites"]').click();
    });
    it('THEN should emit the event', () => {
      expect(hostComponent.onClicAddToFavorites).toHaveBeenCalled();
    });
  });

  describe('WHEN users clicks on button Remove from Favorites', () => {
    beforeEach(() => {
      spyOn(hostComponent, 'onClicRemoveFromFavorites');
      const input = LAUNCH;
      hostComponent.launch = input;
      hostFixture.detectChanges();
      hostFixture.nativeElement.querySelector('[data-testid="buttonRemoveFromFavorites"]').click();
    });
    it('THEN should emit the event', () => {
      expect(hostComponent.onClicRemoveFromFavorites).toHaveBeenCalled();
    });
  });
});
