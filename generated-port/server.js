const express = require("express"); const app = express(); app.get("/", (_req,res) => res.json({fixture:"generated-port", status:"ok"})); app.listen(3000,"0.0.0.0");
