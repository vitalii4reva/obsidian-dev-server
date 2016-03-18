
/*
 * GET home page.
 */

exports.index = function(req, res){
  // const childProcess = require('child_process');
  // const git = childProcess.exec('cd ../myocard.io-react/ && git pull origin test');
  // // const git = childProcess.exec('cd ../myocard.io-react/ && git status');
  //
  // git.stdout.on('data', (data) => {
  //   res.render('index', { data: data });
  // });
  //
  // git.stderr.on('data', (data) => {
  //   res.render('index', { data: data });
  // });
  //
  // git.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  // });

};

exports.pul = function(req, res){
  const childProcess = require('child_process');
  const git = childProcess.exec('cd ../myocard.io-react/ && git pull origin test');
  // const git = childProcess.exec('cd ../myocard.io-react/ && git status');

  git.stdout.on('data', (data) => {
    res.render('pul', { data: data });
  });

  git.stderr.on('data', (data) => {
    res.render('pul', { data: data });
  });

  git.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

};

exports.build = function(req, res){
  const childProcess = require('child_process');
  const git = childProcess.exec('cd ../myocard.io-react/ && npm run deploy');
  // const git = childProcess.exec('cd ../myocard.io-react/ && git status');

  res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-control": "no-cache" });

  // var spw = cp.spawn('ping', ['-c', '100', '127.0.0.1']),
  var spw = childProcess.exec('cd ../myocard.io-react/ && npm run deploy'),
  str = '';

  spw.stdout.on('data', function (data) {
      str += data.toString();
      console.log('data');
  });

  spw.on('close', function (code) {
      // res.render('build', { data: str });
      res.end(str);
  });

  spw.stderr.on('data', function (data) {
      res.end('stderr: ' + data);
  });

  // git.stdout.on('data', (data) => {
  //   res.render('build', { data: data });
  // });
  //
  // git.stderr.on('data', (data) => {
  //   res.render('build', { data: data });
  // });
  //
  // git.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  // });

};
