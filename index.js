import express from "express";
import cluster from "cluster";
import os from "os";

const totalCPU = os.cpus().length

console.log(totalCPU);

if (cluster.isPrimary) {
    for (let i = 0; i < totalCPU; i++) {
        cluster.fork()
    }
} else {
    const app = express()

    app.get("/", (req,res)=>{
        res.send(`Welcome Cluster:- ${process.pid}`)
    })

    app.listen(3000, ()=>{
        console.log("Server Running on 3000.");
    })

    console.log(`Worker:- ${process.pid}`);
}
