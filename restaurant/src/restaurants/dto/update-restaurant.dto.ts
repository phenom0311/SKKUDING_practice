import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateRestaurantDto {
  @IsOptional() // class-validator에서 값이 없으면 validation을 건너뜀
  @IsString()
  @IsNotEmpty()
  name?: string; // "?" 없어도 되기는 함

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phone?: string;
}