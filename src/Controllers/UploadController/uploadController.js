import schemas from "../../Models/index.js"; // assuming the model file is named 'NotesModel.js'
const { NotesSchema } = schemas;

import path from "path";
// Create Note
export const DocUpload = async (req, res) => {
  const file = req.file; // assuming you're using something like multer for file handling
  const { title, userId, description } = req.body;

  if (!file) return res.status(400).send("No file uploaded.");
  //absoluteFilePath is saved
  const absoluteFilePath = path.resolve(file.path);

  const newNote = new NotesSchema({
    title,
    userId,
    docs: absoluteFilePath,
    description,
  });

  try {
    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (error) {
    res.status(500).send(error);
  }
};