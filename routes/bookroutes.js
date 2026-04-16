import express from 'express';
import { insertBook,getallbooks,updatebookbyid,deletebookbyid } from '../controllers/bookscontroller.js';


const router=express.Router();

router.get('/',getallbooks);
router.post('/',insertBook);
router.put('/:id',updatebookbyid);
router.delete('/:id',deletebookbyid);

export default router;

