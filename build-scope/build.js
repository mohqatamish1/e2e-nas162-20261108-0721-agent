const fs=require("fs"); const marker=process.env.PUBLIC_MARKER; if(!marker) throw Error("PUBLIC_MARKER is required during build"); fs.writeFileSync("built-marker.json",JSON.stringify({marker}));
