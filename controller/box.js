const router = require("express").Router();

const { name } = require("./name.js");

/**
 * GET to query current box data
 * @swagger
 * /box:
 *  get:
 *   description: Use to GET the data of a FRITZ!Box
 *   responses:
 *    '200':
 *     description: A succesful query returning the F!B data as JSON
 *     schema:
 *      $ref: '#/definitions/fbbox'
 *    '406':
 *     description: Request is not acceptable
 *     schema:
 *      $ref: '#/definitions/error'
 */
router.get("/", (req, res) => {
  res.status(200).send({
    connectionType: "dsl",
    modelName: Math.random() < 0.5 ? "7590" : "7530 AX",
    name: `${name.includes("FRITZ!Box") ? "" : "FRITZ!Box "}${name}`,
    online: true
  });
});

module.exports = router;
