require('http')
.Server((req,res) => 
{
  res.write('Ok!\n');
  res.end();
})
.listen();
