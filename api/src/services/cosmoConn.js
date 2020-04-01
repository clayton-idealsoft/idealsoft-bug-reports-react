process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const { CosmosClient } = require("@azure/cosmos");

const endpoint = "https://localhost:8081";
const key = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==";
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