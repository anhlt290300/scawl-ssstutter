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

        if (totalHeight >= 10000) {
          clearInterval(scrollInterval);
          resolve();
        }
      }, interval);
    });
  });
}

module.exports = {
  autoScroll,
};
