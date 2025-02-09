import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be greater than or equal to 0'],
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP'],
        default: 'USD',
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
        required: true,  // Ensure frequency is always provided
    },
    category: {
        type: String,
        enum: ['sports', 'news', 'entertainment', 'lifestyle', 'technology'],
        required: [true, 'Category is required'],
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'expired'],
        default: 'active',
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value <= new Date();
            },
            message: 'Start date must be in the past or today',
        },
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return this.startDate ? value > this.startDate : true;
            },
            message: 'Renewal date must be after the start date',
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }
}, { timestamps: true });


// Pre-validation Hook to Handle Renewal Date and Status Before Validation
subscriptionSchema.pre('validate', function (next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365,
        };

        if (this.startDate && this.frequency) {
            this.renewalDate = new Date(this.startDate);
            this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
        }
    }

    // Ensure renewal date is correctly validated
    if (this.startDate && this.renewalDate <= this.startDate) {
        return next(new Error('Renewal date must be after the start date'));
    }

    next();
});

// Pre-save Hook to Auto-update Status
subscriptionSchema.pre('save', function (next) {
    if (this.renewalDate < new Date()) {
        this.status = 'inactive';
    }
    next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;
