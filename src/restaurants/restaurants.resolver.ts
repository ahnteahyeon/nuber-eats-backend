import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restauarant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  @Query(returns => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
}
