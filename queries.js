const getSlugsWithContentList = async (pool) => {
  const query = "SELECT slug, content FROM content";

  try {
    const res = await pool.query(query);
    const slugs = await res.rows.map((row) => ({
      content: row.content,
      slug: row.slug,
    }));
    return slugs;
  } catch (err) {
    console.error("error querying for list of slugs and content", err);
  }
};

const updateContent = async (pool, slug, content) => {
  const query = "UPDATE content SET content = $1 WHERE slug = $2";

  try {
    await pool.query(query, [content, slug]);
    console.log("successfully updated slug", slug);
  } catch (err) {
    console.error("error updating content", err);
  }
};

const getContentBySlug = async (pool, slug) => {
  const query = "SELECT content FROM content WHERE slug = $1";

  try {
    const res = await pool.query(query, [slug]);
    return res.rows;
  } catch (err) {
    console.error("error getting content by slug", err);
  }
};

export { getSlugsWithContentList, updateContent, getContentBySlug };
