import express from "express";    //framework to create api
import cors from 'cors';          //rules to setup communication b/w F&B
import mongoose from 'mongoose';  //queries for mongodb 


import {userRouter} from './routes/users.js';
import {recipesRouter} from './routes/recipes.js';


const app =express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://aravindsrinivasan1718:MERNpassword123@recipes.49kto.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }  
  );

app.listen(3001,() => console.log("server started"));