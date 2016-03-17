
/*
 * GET home page.
 */

exports.index = function(req, res){
  const childProcess = require('child_process');
  const git = childProcess.exec('cd ../myocard.io-react/ && git pull origin test');
  // const git = childProcess.exec('cd ../myocard.io-react/ && git status');

  git.stdout.on('data', (data) => {
    res.render('index', { title: 'Obsidian Test Server', data: data });
  });

  git.stderr.on('data', (data) => {
    res.render('index', { title: 'Obsidian Test Server', data: data });
  });

  git.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

};
