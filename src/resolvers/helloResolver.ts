import { Resolver, Query } from 'type-graphql';

@Resolver()
class HelloResolver {
  @Query(() => String)
  book() {
    return 'hello book world';
  }

  @Query(() => String)
  hello() {
    return 'hello end world';
  }
}

export default HelloResolver;
