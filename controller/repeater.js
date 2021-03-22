const router = require("express").Router();

let name = "FRITZ!Box 7590";

/**
 * GET to query current name
 * @swagger
 * /repeater:
 *  get:
 *   description: Use to GET the data of a FRITZ!Repeater
 *   responses:
 *    '200':
 *     description: A succesful query returning the F!R data as JSON
 *     schema:
 *      $ref: '#/definitions/fbrepeater'
 *    '406':
 *     description: Request is not acceptable
 *     schema:
 *      $ref: '#/definitions/error'
 */
router.get("/", (req, res) => {
  res.status(200).send({
    connectionType: "wlan",
    frequency: Math.random() < 0.5 ? "2,4GHz" : "5GHz",
    modelName: Math.random() < 0.5 ? "1200" : "3000",
    name: `${name.includes("FRITZ!Repeater") ? "" : "FRITZ!Repeater "}${name}`,
    online: true
  });
});

module.exports = router;
