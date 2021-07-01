import { Debugger } from "inspector";
import { MongoClient, Db } from "mongodb";
export * from "./types";

const uri = "..";

export let client: MongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
export let database: Db;

export const connect = async (): Promise<Db> => {
    if (!database) {
        client = await MongoClient.connect(uri);
        database = client.db("Todo");
    }

    return database

}
