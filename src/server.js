import {render} from 'preact-render-to-string';
import express from 'express';

import {Index} from './pages';
import {HtmlPage} from './pages/document';
import {Work} from './pages/work';
import {Profile} from './pages/profile';
import {Lab} from './pages/lab';
import {Test} from './pages/test';
import {AH} from './components/component_map';
import {html} from 'htm/preact';
import livereload from 'livereload';
import connectLivereload from 'connect-livereload';
import {join} from 'path';

import {MarketingPathfinder} from './pages/work/marketing-pathfinder';

import {Rorschach} from './pages/lab/rorschach';
import {withFooterAndRouter} from './layouts/with_footer_and_router';
import {seed} from './_data/seed-data';
import {Renderer} from './pages/work/renderer';

const liveReloadServer = livereload.createServer();

liveReloadServer.watch(join(__dirname, 'src'));

liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

const port = parseInt(process.env.PORT, 10) || 3000;
const server = express();

server.use(connectLivereload());
server.use(express.static('/'));

server.use('/static', express.static(join(__dirname + '/static')));

const renderPage = (title, page) => {
  return HtmlPage({title, content: render(page), navigation: render(html`<${AH.NavigationBar} />`)});
};

server.get('/', function (req, res) {
  res.send(renderPage('Home', Index()));
});

server.get('/work', function (req, res) {
  res.send(renderPage('Work', withFooterAndRouter({title: 'work'})(Work)));
});

server.get('/test', function (req, res) {
  res.send(renderPage('Test', withFooterAndRouter({title: 'test'})(Test)));
});

server.get('/work/nike-jordan-editor', function (req, res) {
  const props = seed('page');

  res.send(renderPage('Nike Jordan Editor', withFooterAndRouter({title: 'nike-jordan-editor'})(() => Renderer(props))));
});

server.get('/work/marketing-pathfinder', function (req, res) {
  res.send(renderPage('Marketing Pathfinder', withFooterAndRouter({title: 'marketing-path-finder'})(MarketingPathfinder)));
});

server.get('/work/uber-com', function (req, res) {
  const props = seed('page', 1);
  res.send(renderPage('Uber.com', withFooterAndRouter({title: 'uber-com'})(() => Renderer(props))));
});

server.get('/profile', function (req, res) {
  res.send(renderPage('Profile', withFooterAndRouter({title: 'Profile'})(Profile)));
});


server.get('/lab', function (req, res) {
  res.send(renderPage('Lab', withFooterAndRouter({title: 'Lab'})(Lab)));
});

server.get('/lab/rorschach', function (req, res) {
  res.send(renderPage('Rorschach', withFooterAndRouter({title: 'rorschach'})(Rorschach)));
});


server.listen(port, err => {
  if (err) throw err;
  console.log(`Ready on http://localhost:${port}`);
});
