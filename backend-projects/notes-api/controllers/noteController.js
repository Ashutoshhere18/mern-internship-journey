import Notes from '../models/noteModel.js'

export const createNote=async(req,res)=>{
    try{
        const {title,content}=req.body;

        if(!title || title.trim()===""){
         return res.status(400).json({message:"Title is required!"})
        }
        const note=new Notes({title, content});

        const savedNote=await note.save();
        res.status(201).json({message: "Note Created Successfully!", note: savedNote});
    }catch(err){
        res.status(500).json({message: "Failed to create Note", error: err});
    }
}

export const readNotes=async(req,res)=>{
    try{
     const notes=await Notes.find();
     res.status(200).json({message: "Notes Fetched!", notes: notes});
    }catch(err){
     res.status(500).json({message: "Failed to fetch Notes", error: err});
    }
}

export const updateNote=async(req,res)=>{
try{
  const {id}=req.params;

  const record=await Notes.findById(id);
  if(!record){
    return res.status(404).json({message:"Note not found!"});
  }
  const {title,content}=req.body;

   if(!title || title.trim()===""){
         return res.status(400).json({message:"Title is required!"})
        }

  const updatedNote=await Notes.findByIdAndUpdate(id,{title,content},{new:true});
  res.status(200).json({message:"Note Updated!",note:updatedNote});
}catch(err){
    res.status(500).json({message:"Updation Failed!",error:err});
}
}

export const deleteNote=async(req,res)=>{
try{
    const {id}=req.params;
      const record=await Notes.findById(id);
  if(!record){
    return res.status(404).json({message:"Note not found!"});
  }
    await Notes.findByIdAndDelete(id);
    res.status(200).json({message:"Note Deleted Successfully!"});
}catch(err){
    res.status(500).json({message:"Failed to delete Note!",error:err});
}
}