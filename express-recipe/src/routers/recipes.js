const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const { getAll, get, save, update, remove } = require("../controllers/recipes");

// router.get("/", getAll);
// router.post("/", save);
// router.get("/:id", get);
// router.put("/:id", update);
// router.delete("/:id", remove);


// router.route('/').get(getAll).post(save);
router.route('/').get(getAll).post(auth.authenticate(), save);

// Route `GET`, `PUT`, and `DELETE` HTTP requests for `api/v1/recipes/:id`
// router.route('/:id').get(get).put(update).delete(remove);

router.route("/:id").get(get).put(auth.authenticate(), update).delete(auth.authenticate(), remove);

module.exports = router;