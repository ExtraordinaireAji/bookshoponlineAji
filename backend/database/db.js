const mongoose = require('mongoose')

const mongoDBURL = 'mongodb+srv://ajiboyetoheeb10:ajeeboye111@cluster0.kkcybdq.mongodb.net/' 

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(mongoDBURL)
        console.log('connected to database successfully')
    } catch (error) {
        throw new Error('error connecting to database')
    }
        
}



module.exports = connectDB
