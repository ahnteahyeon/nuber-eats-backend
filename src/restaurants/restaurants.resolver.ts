import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restauarant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  @Query(returns => Restaurant)
  myRestaurant(): Boolean {
    return true;
  }
}
