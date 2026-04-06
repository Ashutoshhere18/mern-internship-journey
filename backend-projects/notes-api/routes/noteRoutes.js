import {createNote,readNotes,updateNote,deleteNote} from '../controllers/noteController.js'
import express from 'express'

const router=express.Router();

router.post('/api/notes',createNote);
router.put('/api/notes/:id',updateNote);
router.get('/api/getNotes',readNotes);
router.delete('/api/notes/:id',deleteNote);

export default router;
