import { getSlugsWithContentList, updateContent, pool } from "./queries.js";
import { convertSlate047 } from "./convert.js";

const main = async () => {
  try {
    const entries = await getSlugsWithContentList();
    await updateContent(
      entries[1].slug,
      JSON.stringify(convertSlate047(entries[1].content))
    );
    console.log("finished updating content...");
    console.log(`${entries.length} entries were successfully updated`);
  } catch (err) {
    console.log(err);
    await pool.end();
  } finally {
    await pool.end();
  }
};

main();
