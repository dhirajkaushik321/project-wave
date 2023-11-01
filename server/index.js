const express = require("express")
require("dotenv").config()
const schema=require("./schema/schema")
const {graphqlHTTP} =require("express-graphql")

const port=process.env.port || 5000
const app=express(
)
app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql:process.env.NODE_ENV==='development'?true:false
    })
)
app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`);
})
