import { Injectable, NotFoundException  } from '@nestjs/common';
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

    private nextId = 2;

    findAll(): Restaurant[] {
        return this.restaurants;
    }
    
    findOne(id: number): Restaurant {
        const restaurant = this.restaurants.find(
            (restaurant) => restaurant.id === id,
        );

        if (!restaurant) {
            throw new NotFoundException('Restaurant not found');
        }

        return restaurant;
    }

    create(name: string, address: string, phone: string): Restaurant {
        const newRestaurant: Restaurant = {
            id: this.nextId++, // 임의로 부여
            name,
            address,
            phone,
        };
        this.restaurants.push(newRestaurant);

        return newRestaurant;
    }

    update(
        id: number,
        name?: string,
        address?: string,
        phone?: string,
    ): Restaurant {
        const restaurant = this.findOne(id);

        if (name !== undefined) restaurant.name = name;
        if (address !== undefined) restaurant.address = address;
        if (phone !== undefined) restaurant.phone = phone;

        return restaurant;
    }

    delete(id: number): Restaurant {
        this.findOne(id);

        const idx = this.restaurants.findIndex(
            (restaurant) => restaurant.id === id,
        );

        // splice는 삭제된 restaurant 하나를 꺼내는 것.
        const [deletedRestaurant] = this.restaurants.splice(idx, 1);
        
        return deletedRestaurant;
    }
}
