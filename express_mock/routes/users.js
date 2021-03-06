var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/',function(req,res){
  var callback = req.query.callback;
  var data = Mock.mock({
    'categorys|3-5':[{
      
      categoryNmae:'@cname@cname',
      
      'categoryID|+1':10,
      
      logo:'@image(64x64),#eee,Logo',
      
      'categoryItems|1-4':[{
        cname:'@cname',
        'cid|+1':100,
        'item|3-7':[{
          name:'@cname',
          'id|+1':1000,
          link:'@url'
        }]
        
      }],
      
      'seller|8-15':[{
        name:'@cname@cname',
        url:'@url'
      }]
      
    }] 
  });
  var d = JSON.stringify(data, null, 4);
  console.log(JSON.stringify(data, null, 4));
  d = callback+"("+d+")";
  res.send(d);
})

module.exports = router;
