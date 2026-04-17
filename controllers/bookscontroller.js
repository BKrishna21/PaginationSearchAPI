import Book from "../models/bookmodel.js";

export const getallbooks = async (req,res)=>{
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 10;

        if(page<1) page=1;
        if(limit<2 || limit>20) limit=5;

        const skip=(page-1)*limit;

        const totalentries=await Book.countDocuments();
        const totalpages= Math.ceil(totalentries/limit);
    

        const allbooks=await Book.find()
        .skip(skip)
        .limit(limit);

        console.log(allbooks);

        return res.status(200).json({
            allentries:totalentries,
            allpages:totalpages,
            data:allbooks
        });  
    } 
    catch (error) {
        return res.status(400).json({ status:'error fetching data' });
    } 
}


export const insertBook = async (req, res)=>{
    try{
        const { name,author,publication,category,price } = req.body;

        if( !name || !author || !publication || !category || !price){
            return res.status(404).json({status:'value is missing'})
        }
        if(typeof price !== "number"){
            return res.status(400).json({ status:'price must be a number '});
        }

        const newbook= await Book.create({
            name,
            author,
            publication,
            category,
            price
        });

        console.log('the book created is:',newbook);

        return res.status(201).json({ status:'book inserted in database' });
    } 
    catch(error){
        return res.status(500).json({status:'error while inserting book!' })
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
        return res.status(500).json({ status:'server error' });
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