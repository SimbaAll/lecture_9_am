import Joi from "joi";
import DBConnection from "../connection.js";
import { ObjectId } from "mongodb";
import HomeModel from "../Model/homeModel.js";

const homeController = {
    async getData(req,res){
        // const data = await HomeModel.find().select("-createdAt -updatedAt -__v").sort({name:-1})
        // const data = await HomeModel.find({_id:req.params.id}).select("-createdAt -updatedAt -__v")

        // const data = await HomeModel.aggregate([{$match:{city:'Surat'}}])

        // const data = await HomeModel.aggregate([{$match:{city:'Surat'}},{$project:{name:1,email:1,city:1,_id:0}}])

        // const data = await HomeModel.aggregate([{$match:{city:'Surat'}},{$project:{name:1,email:{$type:'$email'},city:1,_id:0}}])

        const data = await HomeModel.aggregate([{$match:{city:'Surat'}},{$count:"Total_City:-"}])

        res.send(data)
    },
    async insertData(req,res, next){
        // const insertSchema = Joi.object({
        //     name: Joi.string().min(2).max(30).required(),
        //     email: Joi.string().email().required(),
        //     password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,20}$')),
        //     repeat_password: Joi.ref('password'),
        //     city: Joi.string().required()
        // })

        // const { error } = insertSchema.validate(req.body)

        // if (error) {
        //     return next(error)
        // }

        const { name, email, password, repeat_password, city} = req.body

        // const Data = new HomeModel({name, email, password, repeat_password, city})

        // const result = await Data.save()

        const result = await HomeModel.create({ name, email, password, repeat_password, city})

        res.send(result)

        // const db = await DBConnection()

        // const result = await db.insertOne({ name, email, password, repeat_password, city})

        // if (result.acknowledged) {
        //     res.send("Insert Data...")
        // }
    },

    async updateData(req,res, next){
        // const updateSchema = Joi.object({
        //     name: Joi.string().min(2).max(30).required(),
        //     email: Joi.string().email().required(),
        //     password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,20}$')),
        //     repeat_password: Joi.ref('password'),
        //     city: Joi.string().required()
        // })

        // const { error } = updateSchema.validate(req.body)

        // if (error) {
        //     return next(error)
        // }

        const { name, email, password, repeat_password, city} = req.body

        const result = await HomeModel.findByIdAndUpdate({_id:req.params.id},{name, email, password, repeat_password, city})

        res.send(result)

        // const db = await DBConnection()

        // const result = await db.updateOne({_id: new ObjectId(req.params.id)},{$set: { name, email, password, repeat_password, city}})

        // if (result.acknowledged) {
        //     res.send("Update Data...")
        // }
    },

    async deleteData(req,res){
        // const db = await DBConnection()

        // const result = await db.deleteOne({_id:new ObjectId(req.params.id)})

        // if (result.acknowledged) {
        //     res.send("Insert Data...")
        // }

        const result = await HomeModel.findByIdAndDelete({_id:req.params.id})

        res.json({mes:"Data Deleted..."})
    }
}

export default homeController