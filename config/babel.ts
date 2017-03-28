const babelConfig = {
	//https://babeljs.io/docs/core-packages/
	compact: true,
	cacheDirectory: true,
	presets: [
		[ 'es2015',
			{
				"modules": false
			}
		],
		'stage-0',
		'react',
	],
	plugins: [

	]
}
export default babelConfig;
