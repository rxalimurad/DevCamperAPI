const mongoos = require('mongoose');

const BootcampSchema = new mongoos.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            unique: true,
            trim: true,
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        slug: String,
        description: {
            type: String,
            required: [true, 'Please add a description'],
            unique: false,
            trim: true,
            maxlength: [500, 'Description can not be more than 500 characters']
        },
        website: {
            type: String,
            match: [ 
                /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/, 
                'Please use a valid URL with HTTP or HTTPs'
            ]
        },
        phone: {
            type: String,
            maxlength: [20, 'Phone can not be more than 20 characters']
        },
        email: {
            type: String,
            match: [ 
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                'Please use a valid email'
            ]
        },
        address: {
            type: String,
            required: [true, 'Please add a address'],
        },
        location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true,
                index: '2dsphere'
            },
           formattedAddress: String,
           street: String,
           city: String,
           state: String,
           zipcode: String,
           country: String,
        },
        careers: {
            type: [String],
            required: true,
            enum: [
                "Web Development",
                "Mobile Development",
                "UI/UX",
                "Data Science",
                "Business",
                "Other"
            ]
        },

        averageRating: {
            type: Number,
            min: [1, 'Rating must at least 1'],
            max: [1, 'Rating must at max 10'],
        },
        averageCost: Number,
        photo: {
            type: String,
            default: 'no-photo.jpg'
        },
        housing: {
            type: Boolean,
            default: false
        },
        jobAssistances: {
            type: Boolean,
            default: false
        },
        jobGuarantee: {
            type: Boolean,
            default: false
        },
        acceptGi: {
            type: Boolean,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }

);


module.exports = mongoos.model('Bootcamp', BootcampSchema)
