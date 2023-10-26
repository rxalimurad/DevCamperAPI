const mongoos = require('mongoose');
const geocoder = require('../utils/geocoder');
const slugify = require('slugify');

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

// Create Bootcamp slug from scheme

BootcampSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next()
})

// Geocoder & create location fields
BootcampSchema.pre('save', async function(next){
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress,
        street: loc[0].streetName,
        city: loc[0].city,
        state: loc[0].stateCode,
        zipcode: loc[0].zipcode,
        country: loc[0].countryCode,
    }
    // Do not save address in DB
    this.address = undefined

    next()

})

module.exports = mongoos.model('Bootcamp', BootcampSchema)
