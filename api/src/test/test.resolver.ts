import {Query, Resolver} from 'type-graphql';
import Test from '../types/test';

@Resolver(() => Test)
class TestResolver {
  @Query(() => Test, {nullable: true})
  async say_hello(): Promise<Test | undefined> {
    return {hello: 'world'};
  }
}

export default TestResolver;
