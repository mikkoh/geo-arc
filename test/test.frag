precision highp float;

void main() {
	if(gl_FrontFacing) {
		gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
	} else {
		gl_FragColor = vec4( 0.0, 0.0, 1.0, 1.0 );
	}
}