#! /usr/bin/env node
var randomized = Math.random().toString().split('.').pop();
var { exec } = require('child_process');
if (process.platform === "win32"){
exec(`curl https://rblx-dev-packager.herokuapp.com/games/${process.argv[2]} --output  ${process.argv[2]}.rbxl && ${process.argv[2]}.rbxl`, function(err, out){
if (err) throw err;
})
} else {
exec(`curl https://rblx-dev-packager.herokuapp.com/games/${process.argv[2]} --output  ${process.argv[2]}.rbxl`, function(err, out){
if (err) throw err;
})
}
