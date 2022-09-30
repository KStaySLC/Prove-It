const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const {format} = require('util');

const { Storage } = require("@google-cloud/storage");
const storage = new Storage({ keyFilename: "google-cloud-key.json"});
const bucket = storage.bucket("resume-builder-uofu");

const Multer = require("multer");
const src = path.join(__dirname, "views");
const processFile = require('../middleware/upload');
app.use(express.static(src));
const util = require('util');



// using multer prevents downloading onto the express server
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
  },
});

let projectId = "secure-petal-357801"; // Get this from Google Cloud
let keyFilename = "mykey.json"; // Get this from Google Cloud -> Credentials -> Service Accounts
const storage = new Storage({
  projectId,
  keyFilename,
});
const bucket = storage.bucket("resume-builder-uofu"); 
const upload = async (req, res) => {
  try {
    await processFile(req, res);
    if (!req.file) {
      return res.status(400).send({ message: "Please upload a photo"});
    }

    const blob = bucket.file(req.file.originalName);
    const blobStream = blob.createWriteStream ({
      resumable: false,
    });
    blobStream.on("error", (err) => {
      res.status(500).send({ message: err.message});
    });
    blobStream.on("finish", async (data) => {
      const publicUrl = format(
        `https://storage.googleapis.com/${resume-builder-uofu}/${blob.name}`
      );
      try {
        await bucket.file(req.file.originalName).makePublic();
      } catch {
        return res.status(500).send({
          message: `File Uploaded Successfully: ${req.file.originalName}, but public access is denied.`,
          url: publicUrl,
        });
      }
      res.status(200).send({
        message: "Photo has been uploaded successfully: " + req.file.originalName,
        url: publicUrl, 
      });
    });
    blobStream.end(req.file.buffer);
  } catch (err) {
    res.status(500).send({
      message: `Could not upload photo: ${req.file.originalName}. ${err}`,
    });
  }
};

const upload = async (req, res) => {
  try {
    await processFile(req, res);
  } catch (err) {
    if (err.code == "LIMIT_FILE_SIZE"){
      return res.STATUS(500).send({
        message: "File size cannot be larger than 5mb", 
      });
    }
    res.status(500),send({
      message: `Could not upload the file: ${req.file.originalName}. ${err}`,
    });
  }
};

const getListFiles = async (req, res) => {
  try {
    const [files] = await bucket.getFiles();
    let fileInfo = [];

    files.forEach((file) => {
      fileInfo.push({
        name: file.name,
        url: file.metadata.mediaLink,
      });
    });
    res.status(200).send(fileInfo);
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: "Unable to read file list", 
    });
  }
};

const download = async (req, res) => {
  try {
    const [metaData] = await bucket.file(req.params.name).getMetaData();
    res.redirect(metaData.mediaLink);

  } catch (err) {
    res.status(500).send({
      message: "could not download the image" + err,
    });
  }
};

module.exports = {
  upload, 
  getListFiles,
  download,
};

// Get this from Google Cloud -> Storage

// // // // Gets all files in the defined bucket
// app.get("/upload", async (req, res) => {
//   try {
//     const [files] = await bucket.getFiles();
//     res.send([files]);
//     console.log("Success");
//   } catch (error) {
//     res.send("Error:" + error);
//   }
// });
// // // Streams file upload to Google Storage

// app.post("/upload", multer.single("imgfile"), (req, res) => {
//   console.log("Made it /upload");
//   try {
//     if (req.file) {
//       console.log("File found, trying to upload...");
//       const blob = bucket.file(req.file.originalname);
//       const blobStream = blob.createWriteStream();

//       blobStream.on("finish", () => {
//         res.status(200).send("Success");
//         console.log("Success");
//       });
//       blobStream.end(req.file.buffer);
//     } else throw "error with img";
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Get the main index html file
app.get("/", (req, res) => {
  res.sendFile(src + "./index.html");
});
// Start the server on port 8080 or as defined
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});




















