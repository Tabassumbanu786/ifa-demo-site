// pages/api/rss.js
import Parser from "rss-parser";

export default async function handler(req, res) {
  const parser = new Parser();
  const feed = await parser.parseURL("https://www.moneycontrol.com/rss/business.xml");

  const items = feed.items.slice(0, 6).map(item => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    contentSnippet: item.contentSnippet || "No summary available.",
  }));

  res.status(200).json(items);
}
