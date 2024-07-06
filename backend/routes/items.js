const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Bulk insert items
router.post('/bulk', async (req, res) => {
  try {
    const items = req.body;
    const savedItems = await Item.insertMany(items);
    res.status(201).json(savedItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



// Create a new item
router.post('/', async (req, res) => {
  try {
    const { description, link, tags } = req.body;
    const newItem = new Item({ description, link, tags });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all unique tags
router.get('/tags', async (req, res) => {
  try {
    const tags = await Item.distinct('tags');
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all unique tags that include the search term
router.get('/tags/search', async (req, res) => {
  try {
    const { term } = req.query;
    const tags = await Item.distinct('tags', { tags: { $regex: term, $options: 'i' } });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

  // Search items by description
  router.get('/search/description', async (req, res) => {
    try {
      const { q } = req.query;
      const items = await Item.find({ description: new RegExp(q, 'i') });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get all items with a specific tag
  router.get('/search/tag', async (req, res) => {
    try {
      const { tag } = req.query;
      const items = await Item.find({ tags: tag });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Get a single item by ID
  router.get('/:id', async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // Update an item by ID
  router.put('/:id', async (req, res) => {
    try {
      const { description, link, tags } = req.body;
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        { description, link, tags },
        { new: true, runValidators: true }
      );
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // Delete an item by ID
  router.delete('/:id', async (req, res) => {
    try {
      const deletedItem = await Item.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  module.exports = router;
