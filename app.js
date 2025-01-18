const express = require("express");
const path = require("path");
const cors = require("cors");
const multer = require('multer');
const bodyparser = require("body-parser");
const Image = require('./controller/admin/model/image')

const app = express();

app.use(cors());

process.env.NODE_ENV = process.env.NODE_ENV || "local";

const config = require("./config/config");

require("./db/db");

const port = config.port;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "dist")));

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use("/api", require("./controller/routes")(express));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else { 
    next();
  }
});

app.use(bodyparser.json());

// app.use("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const newImage = new Image({
      filename: req.file.filename,
      path: req.file.path
    });
    
    await newImage.save();
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    res.status(200).json({
      message: 'Image uploaded successfully',
      image: newImage,
      imageURL:imageUrl,
      status:200
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

app.get("/health", (req, res) => {
  res.json({ message: "API is working fine" });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
