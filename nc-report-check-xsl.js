(function(func) {
  var scr = document.createElement('script');
  scr.src = '//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';
  scr.onload = function() {
    func(jQuery.noConflict(true));
  };
  document.body.appendChild(scr);
})(function($) {
  var finds = [];
  var k = $(":contains('xsl:value-of'):last");
  console.log(k);
});

javascript: (function(func) {
  var scr = document.createElement('script');
  scr.src = '//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';
  scr.onload = function() {
    func(jQuery.noConflict(true));
  };
  document.body.appendChild(scr);
})(function($) {
  var finds = [];
  var k = $(":contains('xsl:value-of'):last");
  console.log(k);
});

javascript: (function(f, s) {
  s = document.createElement('script');
  s.src = '//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';
  s.onload = function() {
    f(jQuery.noConflict(true));
  };
  document.body.appendChild(s);
})(function($) {
  console.log($().jquery);
});

(function(d, f, s) {
  s = d.createElement('script');
  s.src = '//j.mp/1bPoAXq';
  s.onload = function() {
    console.log('loaded');
    f(jQuery.noConflict(!0));
  };
  d.body.appendChild(s);
})(document, function($) {});
