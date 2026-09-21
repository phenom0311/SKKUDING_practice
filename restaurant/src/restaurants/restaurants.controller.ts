import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
    // DI: 객체를 직접 호출하지 않고, NestJS가 생성해서 주입하는 형식
    constructor(private readonly restaurantsService: RestaurantsService) {}

    @Get() 
    findAll() {
        return {
            restaurants: this.restaurantsService.findAll(),
        };
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.restaurantsService.findOne(Number(id));
    }

    @Post()
    createRestaurant(
        @Body('name') name: string,
        @Body('address') address: string,
        @Body('phone') phone: string,
    ) { 
        return this.restaurantsService.createRestaurant(name, address, phone)
    };
}