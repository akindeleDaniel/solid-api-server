import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}, mongoose.Document<unknown, {}, {
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        email: string;
        dateOfBirth: string;
        password: string;
        gender: string;
        firstName: string;
        lastName: string;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        email: string;
        dateOfBirth: string;
        password: string;
        gender: string;
        firstName: string;
        lastName: string;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    dateOfBirth: string;
    password: string;
    gender: string;
    firstName: string;
    lastName: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=users.d.ts.map