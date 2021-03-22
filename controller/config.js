const router = require("express").Router();

let name = "FRITZ!Box 7590";

/**
 * GET to query current config
 * @swagger
 * /config:
 *  get:
 *   description: Use to GET the current configuration data of this FRITZ!-Product
 *   responses:
 *    '200':
 *     description: A succesful query returning the config data as JSON
 *     schema:
 *      $ref: '#/definitions/fbconfig'
 *    '406':
 *     description: Request is not acceptable
 *     schema:
 *      $ref: '#/definitions/error'
 */
router.get("/", (req, res) => {
  res.status(200).send({
    lang: "de-DE",
    oem: Math.random() < 0.5 ? "avm" : "vodafone",
    type: Math.random() < 0.5 ? "box" : "repeater"
  });
});

module.exports = router;
