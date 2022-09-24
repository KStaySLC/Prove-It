const express = require("express");
const app = express();
const PORT = 8080;

const { Storage } = require("@google-cloud/storage");
const Multer = require("multer");


const path = require("path");
const source = path.join(__dirname, "imageHandling");
app.use(express.static(source));

const multer = Multer({
  storage: Multer.memoryStorage(),
  // This should limit the file size to 5mb
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

let projectName = "resume-builder-uofu";
let keyFileID = "apikeyfile.json";

const storage = new Storage({
  projectName,
  keyFileID,
});

const bucket = storage.bucket("resume-builder-uofu");

app.post("/upload", multer.single("imageFile"), (req, res) => {
  try {
    if (req.file) {
      const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream();

      blobStream.on("finish", () => {
        res.status(200).send("Success");
      });
      blobStream.end(req.file.buffer);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/", (req, res) => {
  res.sendFile(source + "/input.handlebars");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});


