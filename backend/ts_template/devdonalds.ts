import express, { Request, Response } from "express";

// ==== Type Definitions, feel free to add or modify ==========================
interface cookbookEntry {
  name: string;
  type: string;
}

interface requiredItem {
  name: string;
  quantity: number;
}

interface recipe extends cookbookEntry {
  requiredItems: requiredItem[];
}

interface ingredient extends cookbookEntry {
  cookTime: number;
}

// =============================================================================
// ==== HTTP Endpoint Stubs ====================================================
// =============================================================================
const app = express();
app.use(express.json());

// Store your recipes here!
const cookbook: cookbookEntry[] = [];

// Task 1 helper (don't touch)
app.post("/parse", (req:Request, res:Response) => {
  const { input } = req.body;

  const parsed_string = parse_handwriting(input)
  if (parsed_string == null) {
    res.status(400).send("this string is cooked");
    return;
  } 
  res.json({ msg: parsed_string });
  return;
  
});

// [TASK 1] ====================================================================
// Takes in a recipeName and returns it in a form that 
const parse_handwriting = (recipeName: string): string | null => {
  // TODO: implement me
  // base case
  if (recipeName.length <= 0 || recipeName === null) {
    return null
  }

  // hyphens and underscores
  let parsedName = recipeName.replace(/[_-]/g, " ")

  // removes non-letter characters
  parsedName = parsedName.replace(/[^a-zA-Z\s]/g, "")

  // any whitespace greater than one character
  parsedName = parsedName.replace(/\s+/g, " ").trim()

  // first character of each word capitalised and split
  parsedName = parsedName.split(" ").map(item => 
    item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  ).join(" ")

  return parsedName
}

// [TASK 2] ====================================================================
// Endpoint that adds a CookbookEntry to your magical cookbook
app.post("/entry", (req:Request, res:Response) => {
  // TODO: implement me
  const { name, type } = req.body;

  if (type !== "ingredient" && type !== "recipe") {
    return res.status(400).send("type must be ingredient or recipe");
  }

  if (cookbook.find(e => e.name.toLowerCase() === name.toLowerCase())) {
    return res.status(400).send("entry already exists")
  }

  let entry: cookbookEntry

  if (type === "ingredient") {
    const { cookTime } = req.body;

    if (cookTime < 0 || cookTime === null) {
      return res.status(400).send("invalid cooking time");
    }

    entry = { name, type, cookTime } as ingredient
  } else if (type === "recipe") {
    const { requiredItems } = req.body;

    if (!Array.isArray(requiredItems)) {
      return res.status(400).send("requiredItems must be array and have one element per name");
    }

    entry = { name, type, requiredItems } as recipe

  }

  // adds entries
  cookbook.push(entry)

  return res.status(200).send({})
  // res.status(500).send("not yet implemented!")
});

// [TASK 3] ====================================================================
// Endpoint that returns a summary of a recipe that corresponds to a query name
app.get("/summary", (req:Request, res:Request) => {
  // TODO: implement me
  res.status(500).send("not yet implemented!")

});

// =============================================================================
// ==== DO NOT TOUCH ===========================================================
// =============================================================================
const port = 8080;
app.listen(port, () => {
  console.log(`Running on: http://127.0.0.1:8080`);
});
