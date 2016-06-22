let 	express = require('express'),
	fs = require('fs'),
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
	if(filename.substr(-5) != '.html'){
		fs.readFile(__dirname+'/'+filename+'.html', (err, data)=>{
			if(err) {
				console.log(err);
				res.sendFile(__dirname+'/404.html');
			}
			if(data){
				res.sendFile(__dirname+'/index.html');
			}
		});
	}else{
		fs.readFile(__dirname+'/'+filename, (err,data)=>{
			if(err) console.log(err);
			if(data){
				res.sendFile(__dirname+'/'+filename);
			}
		});
	}
});
app.listen(8080, function(){
		console.log('Node Server Running on 8080');
});
