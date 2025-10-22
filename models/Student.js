import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true, trim: true},
        lastName: {type: String, required: true, trim: true},
        email: {type: String, required: true, trim: true, unique: true, lowecase: true},
        cohort: {type: String, required: true, enum: ['Year 1', 'Year 2', 'Alumni']},
        interests: {type: [String], default: []},
        notes: {type: String, default: ''}
    }, {timestamps: true}
)

studentSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

export default mongoose.model('Student', studentSchema)
// enum is a schema type option that is used to restrict the values of a field to a predefined set