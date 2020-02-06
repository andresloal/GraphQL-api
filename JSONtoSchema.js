import { printSchema } from 'graphql';
import getSchemaFromData from 'graphql-schema-from-json';
import { jsonToSchema } from "@walmartlabs/json-to-simple-graphql-schema/lib";
const fs = require('fs');

fs.readFile('gene_dm_example.json', (err, data) => {
    if (err) throw err;
    const File = JSON.parse(data);
    console.log(File);
    const schema = jsonToSchema(File);
    console.log(schema);
});