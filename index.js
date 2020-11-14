require('http')
.Server((req,res) => 
{
  res.write('Ok!\n');
  res.end();
})
.listen(1234, () => console.log(procee.pid));
