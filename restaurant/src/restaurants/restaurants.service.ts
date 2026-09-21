import { Injectable } from '@nestjs/common';
import { Restaurant } from './restaurant.interface';

@Injectable()
export class RestaurantsService {
    private restaurants: Restaurant[] = [
        {
            id: 1,
            name: '봉수육',
            address: '경기 수원시 장안구 율전로108번길 11 1층',
        phone: '0507-1460-0903',
        },
    ];

    findAll(): Restaurant[] {
        return this.restaurants;
    }
    
    findOne(id: number): Restaurant | undefined {
        return this.restaurants.find((restaurant) => restaurant.id === id);
    }

    createRestaurant(name: string, address: string, phone: string): Restaurant {
        const newRestaurant: Restaurant = {
            id: this.restaurants.length + 1, // 임의로 부여
            name,
            address,
            phone,
        };
        this.restaurants.push(newRestaurant);

        return newRestaurant;
    }
}
