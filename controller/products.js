const scraper = require("../scraper/index");

const categories = [
  "so-mi-ao-kieu",
  "ao-thun",
  "quan",
  "len-det",
  "phu-kien",
  "ao-blazer-ao-khoac",
  "quan-bo",
  "quan-short",
  "giay",
  "tui-vi",
  "hoodies-sweatshirt",
];

const controller_products = async (browserInstance) => {
  try {
    let browser = await browserInstance;
    data = [];
    //
    for (let j = 0; j < categories.length; j++) {
      let url = "https://ssstutter.com/c/for-him/" + categories[j];
      let card = await scraper.scraper_ProductCard(browser, url);
      data.push(card);
    }

    await browser.close();
    return data;
  } catch (error) {
    console.log("lỗi ở controller products " + error);
  }
};

module.exports = controller_products;
