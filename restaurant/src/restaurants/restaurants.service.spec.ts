import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsService } from './restaurants.service';

describe('RestaurantsService', () => {
  let service: RestaurantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantsService],
    }).compile();

    service = module.get<RestaurantsService>(RestaurantsService);
  });

  it('전체 식당 목록을 반환한다', () => {
    const restaurants = service.findAll();

    expect(restaurants).toHaveLength(1);
    expect(restaurants[0].name).toBe('봉수육');
  });
});