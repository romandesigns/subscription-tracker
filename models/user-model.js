import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, /\S+\.\S+/, 'Please enter a valid email address.'],
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minlength: 6,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;
