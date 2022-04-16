const { src, dest } = require('gulp')
const svgmin = require('gulp-svgmin')

function min() {
	return src('./src/assets/img/icons/*.svg')
		.pipe(
			svgmin({
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								removeViewBox: false,
							},
						},
					},
					{ removeAttrs: { attrs: '(fill|stroke)' } },
				],
			})
		)
		.pipe(dest('./src/assets/img/icons/'))
}

exports.default = min
