import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
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
    
    
    @Patch(':id')
    updateRestaurant(
        @Param('id') id: string,
        @Body() body: {
            name?: string;
            address?: string;
            phone?: string;
        },
    ) {
        return this.restaurantsService.updateRestaurant(
            Number(id), body.name, body.address, body.phone,
        );
    }


    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.restaurantsService.deleteRestaurant(Number(id));
    }
}