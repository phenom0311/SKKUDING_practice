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

    updateRestaurant(
        id: number,
        name?: string,
        address?: string,
        phone?: string, 
    ): Restaurant | undefined {
        const restaurant = this.restaurants.find(
            (restaurant) => restaurant.id === id,
        );

        if (!restaurant) {
            return undefined;
        }

        if (name !== undefined) restaurant.name = name;
        if (address !== undefined) restaurant.address = address;
        if (phone !== undefined) restaurant.phone = phone;

        return restaurant;
    }

    deleteRestaurant(id: number): Restaurant | undefined {
        const idx = this.restaurants.findIndex(
            (restaurant) => restaurant.id === id,
        );

        if(idx === -1) { return undefined };
        // splice는 삭제된 restaurant 하나를 꺼내는 것.
        const [deletedRestaurant] = this.restaurants.splice(idx, 1);
        
        return deletedRestaurant;
    }
}
