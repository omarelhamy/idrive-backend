import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/auth/dto/auth.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async findByNatId(natId: string) {
        return await this.userModel.findOne({ natId }).populate('role').exec()
    }

    async create(user: RegisterDto) {
        try {
            const userNew = new this.userModel(user);
            await userNew.save();
            return userNew;
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async getAll() {
        return await this.userModel.find().select('-password').populate('role').exec();
    }
}
