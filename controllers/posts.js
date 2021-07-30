import PostMessage  from "../models/postMessage.js";

export const getPostReq = async (req,res)=>{
try{
    const postListAll = await PostMessage.find();
    res.status(200).json(postListAll)
}
catch(err){
res.status(404).json({
    message:error.message
})}}

export const createPost = async (req,res)=>{
    const requestBody = req.body;

    const newPost = new PostMessage(requestBody)
try{
    await newPost.save();
req.status(201).json(newPost)
}
catch(err){
res.status(409).json({
    message:err.message
})
}
}