import Book from "../models/bookmodel.js";

export const getallbooks = async (req,res)=>{
    try {
        
        const allbooks= await Book.find({});
        console.log(allbooks);
        return res.status(200).json({data:allbooks});  
    } 
    catch (error) {
        return res.status(400).json({ status:'error fetching data',error });
    } 
}


export const insertBook = async (req, res)=>{
    try{
        const body=req.body;
        const newbook= await Book.create({
            name: body.name,
            author: body.author,
            publication:body.publication,
            category: body.category,
            price: body.price
        });

        console.log('the book created is:',newbook);
        return res.status(201).json({ status:'book inserted in database' });
    } 
    catch(error){
        return res.status(500).json({status:'error while inserting book!', error: error })
    }    
};


export const updatebookbyid = async (req,res)=>{
    try {
        const updatedbook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new:true }
        );
        if(!updatedbook){
            return res.status(404).json({ status:'book not found' });
        }
        return res.status(200).json({ status:' book details updated!', data: updatedbook });

    } 
    catch (error) {
        return res.status(500).json({ status:'server error', error: error });
    }
}


export const deletebookbyid = async (req,res)=>{
    try {
        const findbook= await Book.findById(req.params.id);
        if(!findbook){
            return res.status(404).json({ status:'book not found!'});
        }
        await Book.findByIdAndDelete(req.params.id);
        return res.status(200).json({ status:'book deleted' });
    } 
    catch (error) {
        return res.status(500).json({ status:'server error'});
    }
}