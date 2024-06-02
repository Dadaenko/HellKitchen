import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const writersJSON = [
  {
    id: "0001",
    name: "Viktoria Amelina",
    about: {
      name: "Viktoria",
      text1:
        "Ukrainian novelist who became a war crimes investigator following the Russian invasion, and fought to uncover the true stories of her compatriots’ experiences under occupation",
      text2: "some text2",
      text3: "some text3",
    },
  },
  {
    id: "0002",
    name: "Volodymyr Vakulenko",
    ingredients: {
      about: {
        name: "Volodymyr",
        text1:
          "Ukrainian novelist who became a war crimes investigator following the Russian invasion, and fought to uncover the true stories of her compatriots’ experiences under occupation",
        text2: "some text2",
        text3: "some text3",
      },
    },
  },
  {
    id: "0003",
    name: "Maksym Krivtsov",
    ingredients: {
      about: {
        name: "Maksym",
        text1:
          "Ukrainian novelist who became a war crimes investigator following the Russian invasion, and fought to uncover the true stories of her compatriots’ experiences under occupation",
        text2: "some text2",
        text3: "some text3",
      },
    },
  },
];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { writers: data });
});

app.post("/writers.json", (req, res) => {
  switch (req.body.choice) {
    case "Viktoria":
      data = JSON.parse(writersJSON)[0];
      break;
    case "Volodymyr":
      data = JSON.parse(writersJSON)[1];
      break;
    case "Maksym":
      data = JSON.parse(writersJSON)[2];
      break;
    default:
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
