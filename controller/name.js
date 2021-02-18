const router = require("express").Router();

let name = "FRITZ!Box 7590";

/**
 * GET to query current name
 * @swagger
 * /name:
 *  get:
 *   description: Use to GET the current name of this FRITZ!Box
 *   responses:
 *    '200':
 *     description: A succesful query returnin the name as JSON
 */
router.get("/", (req, res) => {
  res.status(200).send({ name });
});

/**
 * POST to change/create name
 */

router.post("/", (req, res) => {
  res.status(406);
  if (
    req.body.name &&
    typeof req.body.name === "string" &&
    req.body.name.length > 3
  ) {
    name = req.body.name;
    res.status(200).send({ name });
  } else {
    res.send({
      error: "Invalid Request",
      message: "Request body is not sufficient",
    });
  }
});

module.exports = router;
