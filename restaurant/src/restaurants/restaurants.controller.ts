import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { ApiKeyGuard } from './guards/api-key.guard';

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
    findOne(@Param('id', ParseIntPipe) id: string){
        return this.restaurantsService.findOne(Number(id));
    }

    @Post()
    @UseGuards(ApiKeyGuard)
    create(@Body() body: CreateRestaurantDto) {
        return this.restaurantsService.create(
            body.name,
            body.address,
            body.phone,
        );
    }
    
    
    @Patch(':id')
    @UseGuards(ApiKeyGuard)
    update(
        @Param('id', ParseIntPipe) id: string,
        @Body() body: UpdateRestaurantDto,
    ) {
        return this.restaurantsService.update(
            Number(id),
            body.name,
            body.address,
            body.phone,
        );
    }


    @Delete(':id')
    @UseGuards(ApiKeyGuard)
    delete(@Param('id', ParseIntPipe) id: string) {
        return this.restaurantsService.delete(Number(id));
    }
}