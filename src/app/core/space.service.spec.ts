import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SpaceService } from './space.service';

describe('SpaceService', () => {
  let service: SpaceService;
  let controller: HttpTestingController;
  let inputBaseUrl: string;
  beforeEach(() => {
    // Arrange
    inputBaseUrl = 'https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?limit=10&mode=list';
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpaceService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('WHEN getUpcomingLaunches$ is called', () => {
    beforeEach(() => {
      //Act
      service.getUpcomingLaunches$().subscribe();
    });
    it('THEN is should call the right url', () => {
      // Assert
      const expected = inputBaseUrl;
      controller.expectOne(expected);
    });
  });
});
