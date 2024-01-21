const scraper = require("../scraper/index");
const dataCard = require("../data/productCard");
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
    //for (let j = 0; j < categories.length; j++) {
    let url = "https://ssstutter.com/c/for-him/hoodies-sweatshirt";
    let card = await scraper.scraper_ProductCard(browser, url);
    data.push(card);
    //}

    return data;
  } catch (error) {
    console.log("lỗi ở controller products " + error);
  }
};

const controller_product = async (browserInstance) => {
  try {
    let browser = await browserInstance;
    data = [];
    // let products = await controller_products(browserInstance);

    for (let i = 0; i < dataCard.length; i++) {
      //console.log(dataCard[i].length);
      for (let j = 0; j < dataCard[i].length; j++) {
        //console.log(dataCard[i].length);
        let { category, slug, title, tag, price, cost, discount, mark } =
          dataCard
          [i][j];
        let { description, colors } = await scraper.scraper_Product(
          browser,
          slug
        );
        data.push({
          slug: slug,
          category: category,
          title: title,
          tag: tag,
          price: price,
          cost: cost,
          discount: discount,
          mark: mark,
          description: description,
          colors: colors,
        });
      }
    }

    // let a = await scraper.scraper_Product(
    //   browser,
    //   "https://ssstutter.com/p/time-shirt"
    // );
    await browser.close();
    return data;
  } catch (error) {
    console.log("lỗi ở controller products " + error);
  }
};

module.exports = {
  controller_products,
  controller_product,
};
