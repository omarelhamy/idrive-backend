import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { BCRYPT_SALT } from 'src/enviroments';
import { Role } from 'src/roles/schemas/role.schema';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema({
    timestamps: true
})
export class User extends Document {

    @Prop({ required: true, unique: true })
    natId: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    avatar: string;

    @Prop({ default: false })
    isOnline: boolean;

    @Prop({ default: false })
    isActive: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
    role: Role

    comparePassword: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<UserDocument>('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(BCRYPT_SALT, (genSaltError, salt) => {
        if (genSaltError) {
            return next(genSaltError);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
})

UserSchema.methods.comparePassword = async function (password: string) {
    const user = this;

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) {
                reject(error);
            }

            resolve(isMatch);
        });
    });
};