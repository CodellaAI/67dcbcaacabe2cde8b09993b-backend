
const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// Create a new entry
router.post('/', async (req, res) => {
  try {
    const newEntry = new Entry({
      timestamp: req.body.timestamp || new Date(),
      message: req.body.message || 'Entry created'
    });

    const savedEntry = await newEntry.save();
    
    res.status(201).json({
      success: true,
      message: 'Entry created successfully',
      entry: savedEntry
    });
  } catch (error) {
    console.error('Error creating entry:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to create entry',
      error: error.message
    });
  }
});

// Get all entries (optional endpoint for testing)
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ timestamp: -1 });
    
    res.status(200).json({
      success: true,
      count: entries.length,
      entries
    });
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch entries',
      error: error.message
    });
  }
});

module.exports = router;
