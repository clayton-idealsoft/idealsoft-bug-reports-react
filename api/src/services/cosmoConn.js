process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const { CosmosClient } = require("@azure/cosmos");
const config = require("../config");

const endpoint = config.db.url;
const key = config.db.apikey;
const client = new CosmosClient({ endpoint, key });

async function handleError(error) {
    console.log("\nAn error with code '" + error.code + "' has occurred:");
    console.log(error);
    await finish();
    process.exitCode = 1;
  }

async function getAll() {
    const { database } = await client.databases.createIfNotExists({ id: "bugReports" });
    const { container } = await database.containers.createIfNotExists({ id: "bugs" });
    const { resources: results } = await container.items.query("SELECT * FROM bugs b").fetchAll();
    return results;
} 

exports.getAll = getAll;