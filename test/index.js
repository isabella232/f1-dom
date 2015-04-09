var test = require( 'prova' );
var supportedProps = require( '../supportedProps' );
var transform = require( '../transform' );
var transformOrigin = require( '../transformOrigin' );
var opacity = require( '../opacity' );
var textAndHtml = require( '../textAndHtml' );

var toApply = {

  position: [ 500, 100, 200 ],
  scale: [ 0.5, 0.63, 0.8 ],
  rotation: [ 40.3, 23.4, 12 ],
  perspective: 20,
  anchor: [ 0.33, 0.8 ],
  alpha: 0.5
};

test( 'check supported props', function( t ) {

  t.deepEqual( supportedProps, {

    position: Array,
    scale: Array,
    rotation: Array,
    perspective: Number,
    anchor: Array,
    alpha: Number,
    text: String,
    html: String
  }, 'supported props do not match' );

  t.end();
});

test( 'apply transform', function( t ) {

  var el = getEL();

  transform( el, toApply );

  document.body.appendChild( el );

  t.equal( el.style[ 'transform' ], 
          'perspective(20px) matrix3d(-0.0680306479334831, 0.0197484157979488, -0.792163550853729, 0, -0.0432579629123211, -0.627515733242035, -0.0157152693718672, 0, -0.493457764387131, 0.052287258207798, 0.110589414834976, 0, 500, 100, 200, 1)',
          'transform correct' );

  t.end();
});

test( 'apply transform orgin', function( t ) {

  var el = getEL();

  transformOrigin( el, toApply );

  document.body.appendChild( el );

  t.equal( el.style[ 'transform-origin' ], '33% 80% 0px', 'transform origin correct' );

  t.end();
});

test( 'apply opacity', function( t ) {

  var el = getEL();

  opacity( el, toApply );

  document.body.appendChild( el );

  t.equal( el.style[ 'opacity' ], '0.5', 'transform origin correct' );

  t.end();
});

test( 'apply html', function( t ) {

  var el = getEL();

  textAndHtml( el, { html: '<div>snakey snake</div>' } );

  t.equal( el.innerHTML, '<div>snakey snake</div>', 'html set correctly' );

  t.end();
});

test( 'apply text', function( t ) {

  var el = getEL();

  textAndHtml( el, { text: '<div>snakey snake</div>' } );

  t.equal( el.innerHTML, '&lt;div&gt;snakey snake&lt;/div&gt;', 'text set correctly' );

  t.end();
});

function getEL() {

  return document.createElement( 'div' );
}