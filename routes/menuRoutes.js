const express = require ('express')
const router = express.Router();

const Menu = require('./../models/menu');

router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new Menu(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/', async(req, res) => {
    try {
      const response = await Menu.find();
      console.log('data fetched');
      res.status(200).json(response);
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/:taste', async(req, res) => {
      try {
        const taste = req.params.taste;
        if (taste == 'spicy' || taste == 'sweet' || taste == 'sour') {
          const response = await Menu.find({ taste: taste });
          console.log('data fetched');
          res.status(200).json(response);
        } else {
          res.status(404).json({ error: 'not found' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    })
  

    module.exports = router;