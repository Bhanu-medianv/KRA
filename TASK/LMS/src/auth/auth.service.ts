import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { group } from 'src/users/entities/groups.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/DTO/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(group)
    private groupRepository: Repository<group>,
  ) {}

  async createuser(createUserDto: CreateUserDto): Promise<User> {
    const { group_id, ...rest } = createUserDto;

    let groupEntity: group | null = null;
    if (group_id) {
      groupEntity = await this.groupRepository.findOne({
        where: { group_id },
      });

      if (!groupEntity) {
        throw new NotFoundException(`Group with ID ${group_id} not found`);
      }
    }

    const newUser = this.userRepository.create({
      ...rest,
      group: groupEntity ?? undefined,
    });

    return await this.userRepository.save(newUser);
  }
}
