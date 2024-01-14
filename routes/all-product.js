/**
 * @swagger
 * tags:
 *   name: CardProducts
 *   description: Cào sản phẩm của trang SSSTUTTER phiên bản ngày 13/1/2024
 */

/**
 * @swagger
 * /api/all-card-product:
 *   get:
 *     summary: Trả về mảng sản phẩm
 *     tags: [CardProducts]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               [
 *                  {
 *                  "slug": "https://ssstutter.com/p/bottega-straight-trousers",
 *                  "title": "BOTTEGA STRAIGHT TROUSERS",
 *                  "tag": "https://ssstutter.com/img/mark.png",
 *                  "price": "449,000",
 *                  "cost": "449,000",
 *                  "discount": 0,
 *                  "mark": "https://cdn.ssstutter.com/products/66z6ao28eNQDG839/012024/1704390147295.webp",
 *                  "colors": "2"
 *                  },
 *               ]
 */
