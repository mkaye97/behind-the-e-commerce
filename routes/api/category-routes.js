const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories with its Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: { model: Product }
      });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err)
  }
});

// find a single categories with its Products
router.get('/:id', async (req, res) => {
  try {
  const singleCategory = await Category.findByPk(req.params.id, {
    include: { model: Product }
    });

    if (!singleCategory) {
      res.status(404).json({ message: 'Category could not be found!'})
      return
    }

    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err)
  }
});



router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
