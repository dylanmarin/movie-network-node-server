import * as dao from "./movies/details/dao.js";

function HelloRoutes(app) {
    app.get("/", (req, res) => {
        res.send(`Welcome to Web Dev!`);
    });
    app.get("/test", async (req, res) => {
        console.log(new Date().getTime())
        res.send('done')
    });

}


export default HelloRoutes;
