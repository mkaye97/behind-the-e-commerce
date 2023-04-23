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

// create a new category
router.post('/', async (req, res) => {
  try {
    const newCatgory = await Category.create(req.body);
    res.status(200).json(newCatgory);
  } catch(err) {
    res.status(500).json(err)
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateCategory) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!deleteCategory) {
      res.status(404).json({ message: 'No category found with this id!'});
      return;
    }

    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
