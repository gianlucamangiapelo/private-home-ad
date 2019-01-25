const hapi = require('hapi');
const pup = require('./scraping.js');
const server = hapi.server({
	port: 4000,
	host: 'localhost'
});

const init = async () => {

	server.route([
		{
			method: 'GET',
			path: '/',
			handler: (req, reply) => {
				return `<div style='flex-flow: column; display: flex; width: 415px; margin: 20% auto; text-align: center; font-size:24px; text-transform: uppercase;'>
				<img style="margin: 0 auto 16px;" width="302" height="50" class="hidden-xs" alt="Immobiliare.it" src="https://img.im-cdn.it/assets/2019010901/img/common/logo.svg">
					<a href='/search' style=' font-weight:700; font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; width: 400px; padding:16px; border-radius: 20px 20px; background-color: #c12400;color: white;text-decoration:none;'>
					Search for private Ad
					</a>
				</div>
				`;
			}
		},
		{
			method: 'GET',
			path: '/search',
			handler: (req, reply) => {
				return pup.example();
			}
		}
	]);

	await server.start();
	console.log('Server running at: ' + server.info.uri);
};

init();