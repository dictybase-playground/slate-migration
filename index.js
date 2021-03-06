#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import pg from "pg";
import { getSlugsWithContentList, updateContent } from "./src/queries.js";
import { convertSlate047 } from "./src/convert.js";

const { Pool } = pg;

const cliOptions = (yargs) => {
  yargs
    .positional("database", {
      description: "Name of database",
      type: "string",
      alias: "d",
    })
    .positional("user", {
      description: "Username",
      type: "string",
      alias: "u",
    })
    .positional("password", {
      description: "Password for username",
      type: "string",
      alias: "pass",
    })
    .positional("host", {
      description: "Database host",
      type: "string",
      alias: "h",
    })
    .positional("port", {
      description: "Database port",
      type: "number",
      alias: "p",
    });
};

const runner = async (argv) => {
  try {
    const pool = new Pool({
      host: argv.host || process.env.DICTYCONTENT_BACKEND_SERVICE_HOST,
      port: argv.port || process.env.DICTYCONTENT_BACKEND_SERVICE_PORT,
      database: argv.database,
      user: argv.user,
      password: argv.password,
    });
    const entries = await getSlugsWithContentList(pool);
    for (const entry of entries) {
      const convertedContent = convertSlate047(entry.content);
      await updateContent(pool, entry.slug, JSON.stringify(convertedContent));
    }
    await pool.end();
    console.log("finished updating content...");
    console.log(`${entries.length} entries were successfully updated`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const main = () => {
  return yargs(hideBin(process.argv))
    .demandCommand()
    .command(
      "convert [options]",
      "convert slate 0.47 data to 0.5x format",
      cliOptions,
      runner
    )
    .demandOption(["database", "user", "password"])
    .help().argv;
};

try {
  main();
} catch (err) {
  console.error("something went seriously wrong with the script", err);
  process.exit(1);
}
