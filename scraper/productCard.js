async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0;
      const distance = 100;
      const interval = 100;

      const scrollInterval = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= 5000) {
          clearInterval(scrollInterval);
          resolve();
        }
      }, interval);
    });
  });
}

const scraper_ProductCard = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);
      console.log("đã vào link " + url);

      await newPage.waitForSelector("div.xyz-in-to");
      await autoScroll(newPage);

      const productCards = await newPage.$$eval(
        ".item-group.grid.grid-cols-2.sm\\:grid-cols-4 > .m-2.xyz-in.c",
        (els) => {
          card = els.map((el) => {
            let item = el.querySelector("a");

            let slug = item.href;
            
            let mark = item.querySelector(
              ".relative .w-full.h-full.object-cover"
            )?.src;
            let tag = item.querySelector(
              ".relative .absolute.top-0.right-0.w-14.sm\\:w-16.drop-shadow-md"
            )?.src;
            tag = tag ? tag : null;

            let discount = item
              .querySelector(".relative span")
              ?.innerText?.replace("%", "");

            discount = discount ? discount : 0;
            let title = item.querySelector(
              ".py-4 .flex.flex-col.items-start.justify-between .uppercase.w-full.text-xs"
            )?.innerText;

            let cost = item.querySelector(
              ".py-4 .flex.flex-col.sm\\:flex-row.items-start.sm\\:items-center.justify-between .font-bold.sm\\:text-xl"
            )?.innerText;

            let price = item.querySelector(
              ".py-4 .flex.justify-between.items-center .sm\\:order-1"
            )?.innerText;

            price = price.length == 0 ? cost : price;

            let colors = item
              .querySelector(".py-4 .flex.justify-between.items-center h5")
              .innerText.replace(" màu", "");

            return {
              slug: slug,
              title: title,
              tag: tag,
              price: price,
              cost: cost,
              discount: discount,
              mark: mark,
              colors: colors,
            };
          });
          return card;
        }
      );

      await newPage.close();
      res(productCards);
    } catch (error) {
      console.log("lỗi ở scraper product card " + error);
    }
  });

module.exports = scraper_ProductCard;
