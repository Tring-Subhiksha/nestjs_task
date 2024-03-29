import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UpdateUserInputTs } from './dto/update-user.input.ts';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInputs') createUserInputs: CreateUserInputs,
  ) {
    return this.userService.createUser(createUserInputs);
  }

  @Query(() => User,{name:"getUserById"})
  public async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }
  @Query(() => [User], { name: 'getAllUsers' })
 public async getAllUser() {
    return this.userService.getAllUser();
  }

  @Mutation(()=>User,{name:"UpdateUser"})
  public async UpdateUser( @Args('id') id: string,
  @Args('updateUserInput') updateUserInput: UpdateUserInputTs,){
    return this.userService.UpdateUser(id, updateUserInput);
  }
  
  @Mutation(()=>User,{name:"deleteuser"})
  public async DeleteUser(@Args('id') id:string)
  {
    return this.userService.DeleteUser(id)
  }
}
