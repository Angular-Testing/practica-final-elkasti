import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SpaceService } from '../core/space.service';
import { Launch } from '../models/launch';
import { SearchComponent } from './search.component';

describe('GIVEN the SearchComponent form', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  type searchMethod = { getSearchedLaunches$: Observable<Launch[]> };
  let spaceServiceSpy: jasmine.SpyObj<searchMethod>;

  // input data
  const inputTerm = 'falcon';
  const inputNumberLaunches = 3;
  // selectors
  const termSelector = 'input[name="searchTerm"]';
  const numberLaunchesSelector = 'input[name="numberOfLaunches"]';

  beforeEach(async () => {
    // Arrange
    spaceServiceSpy = jasmine.createSpyObj<searchMethod>('SpaceService', {
      getSearchedLaunches$: of(),
    });

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent],
      providers: [{ provide: SpaceService, useValue: spaceServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('WHEN user submits the form after fill it', () => {
    beforeEach(() => {
      // Act
      setValue(fixture, termSelector, inputTerm);
      setValue(fixture, numberLaunchesSelector, inputNumberLaunches.toString());
      fixture.detectChanges();
      const form = findNativeEl(fixture, 'form') as HTMLFormElement;
      form?.dispatchEvent(new Event('submit'));
      fixture.detectChanges();
    });
    it('THEN should call the getSearchedLaunches$ method', () => {
      // Assert
      const expected = { limit: inputNumberLaunches, searchTerm: inputTerm };
      expect(spaceServiceSpy.getSearchedLaunches$).toHaveBeenCalledWith(expected);
    });
  });
});

function findNativeEl<T>(fixture: ComponentFixture<T>, selector: string): HTMLElement | null {
  const nativeElement = fixture.nativeElement.querySelector(selector);
  return nativeElement;
}

function setValue<T>(fixture: ComponentFixture<T>, selector: string, value: string): void {
  const nativeElement = findNativeEl(fixture, selector) as HTMLInputElement;
  if (nativeElement) {
    nativeElement.value = value;
    nativeElement.dispatchEvent(new Event('input'));
  }
}
