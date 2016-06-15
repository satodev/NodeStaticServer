let express = require('express'),
	app = express();
app.use('/node_modules', express.static(__dirname+'/node_modules'));
app.use('/img', express.static(__dirname+'/img'));
app.use('/css', express.static(__dirname+'/css'));
app.use('/js', express.static(__dirname+'/js'));
app.get('/', (req,res)=>{
	res.sendFile(__dirname+'/index.html');	
});
app.get('/:name', function(req,res){
	filename = req.params.name;
	res.sendFile(__dirname+'/'+filename, (err)=>{
		if(err){
			console.log(err);
			res.sendFile(path.join(__dirname+'/404.html'));
		}else{
			console.log('ok ' + filename + ' loaded');	
		}
	});
});
app.listen(8080, function(){
		console.log('Node Server Running on 8080');
});
