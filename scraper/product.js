const scraper_Product = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url, { waitUntil: "networkidle0" });
      console.log("đã vào link " + url);
      try {
        await newPage.waitForSelector(".xyz-appear-to.xyz-in-to");
      } catch (error) {
        await newPage.reload();
      }

      const description = await newPage.$eval(
        ".sm\\:col-span-1.relative",
        (el) => {
          description = el?.querySelector(
            ".codex-editor.codex-editor--narrow .codex-editor__redactor"
          );

          return description ? description.innerHTML : null;
        }
      );
      let colors = [];
      let title;
      let images;
      let mark;
      mark = await newPage.evaluate(() => {
        let buttons = document.querySelectorAll(
          ".flex.justify-center.items-center.flex-wrap.gap-4 button"
        );
        buttons[0]?.click();

        return buttons[0]
          ?.querySelector("span")
          ?.getAttribute("style")
          ?.replace("background-image: url(", "")
          ?.replace(");", "")
          ?.replaceAll('"', "");
      });
      title = await newPage.evaluate(() => {
        return document.querySelector(
          ".text-center.justify-center.items-center.sm\\:justify-start.capitalize.mb-2.flex.gap-2 p"
        )?.innerText;
      });
      images = await newPage.$$eval(
        ".slick-slider.slick-vertical.slick-initialized > .slick-list > .slick-track > .slick-slide.slick-cloned",
        (els) => {
          let arr = [];
          els.forEach((item) => {
            item?.querySelector("img")?.src &&
              arr.push(item?.querySelector("img")?.src);
          });
          return arr;
        }
      );

      await newPage.waitForTimeout(500);
      mark &&
        colors.push({
          mark: mark,
          title: title,
          images: images,
        });

      mark = await newPage.evaluate(() => {
        let buttons = document.querySelectorAll(
          ".flex.justify-center.items-center.flex-wrap.gap-4 button"
        );
        buttons[1]?.click();

        return buttons[1]
          ?.querySelector("span")
          ?.getAttribute("style")
          ?.replace("background-image: url(", "")
          ?.replace(");", "")
          ?.replaceAll('"', "");
      });
      title = await newPage.evaluate(() => {
        return document.querySelector(
          ".text-center.justify-center.items-center.sm\\:justify-start.capitalize.mb-2.flex.gap-2 p"
        ).innerText;
      });
      images = await newPage.$$eval(
        ".slick-slider.slick-vertical.slick-initialized > .slick-list > .slick-track > .slick-slide",
        (els) => {
          let arr = [];
          els.forEach((item) => {
            item?.querySelector("img")?.src &&
              arr.push(item?.querySelector("img")?.src);
          });
          return arr;
        }
      );

      await newPage.waitForTimeout(500);
      mark &&
        colors.push({
          mark: mark,
          title: title,
          images: images,
        });

      mark = await newPage.evaluate(() => {
        let buttons = document.querySelectorAll(
          ".flex.justify-center.items-center.flex-wrap.gap-4 button"
        );
        buttons[2]?.click();

        return buttons[2]
          ?.querySelector("span")
          ?.getAttribute("style")
          ?.replace("background-image: url(", "")
          ?.replace(");", "")
          ?.replaceAll('"', "");
      });
      title = await newPage.evaluate(() => {
        return document.querySelector(
          ".text-center.justify-center.items-center.sm\\:justify-start.capitalize.mb-2.flex.gap-2 p"
        ).innerText;
      });
      images = await newPage.$$eval(
        ".slick-slider.slick-vertical.slick-initialized > .slick-list > .slick-track > .slick-slide.slick-cloned",
        (els) => {
          let arr = [];
          els.forEach((item) => {
            item?.querySelector("img")?.src &&
              arr.push(item?.querySelector("img")?.src);
          });
          return arr;
        }
      );

      await newPage.waitForTimeout(500);
      mark &&
        colors.push({
          mark: mark,
          title: title,
          images: images,
        });

      mark = await newPage.evaluate(() => {
        let buttons = document.querySelectorAll(
          ".flex.justify-center.items-center.flex-wrap.gap-4 button"
        );
        buttons[3]?.click();

        return buttons[3]
          ?.querySelector("span")
          ?.getAttribute("style")
          ?.replace("background-image: url(", "")
          ?.replace(");", "")
          ?.replaceAll('"', "");
      });
      title = await newPage.evaluate(() => {
        return document.querySelector(
          ".text-center.justify-center.items-center.sm\\:justify-start.capitalize.mb-2.flex.gap-2 p"
        ).innerText;
      });
      images = await newPage.$$eval(
        ".slick-slider.slick-vertical.slick-initialized > .slick-list > .slick-track > .slick-slide.slick-cloned",
        (els) => {
          let arr = [];
          els.forEach((item) => {
            item?.querySelector("img")?.src &&
              arr.push(item?.querySelector("img")?.src);
          });
          return arr;
        }
      );

      await newPage.waitForTimeout(500);
      mark &&
        colors.push({
          mark: mark,
          title: title,
          images: images,
        });

      await newPage.close();
      res({
        description: description ? description : null,
        colors: colors,
      });
    } catch (error) {
      console.log("lỗi ở scraper product " + error);
    }
  });

module.exports = scraper_Product;
