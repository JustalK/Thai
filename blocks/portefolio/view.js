
var camera, scene, renderer,composer,glitchPass;
var mesh;
var enableGlitch = false;
var frameGlitch = 0;
var animation = true;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var listMesh1 = [],date2016,date2015;

var speed = 1;

var wd = window.innerWidth;
var hg = window.innerHeight;


var oldProject,oldProjectNbr;
var backObject = null;


var speedPosCamX = 0;
var speedPosCamY = 0;
var speedPosCamZ = 0;

var speedRotCamX = 0;
var speedRotCamY = 0;
var speedRotCamZ = 0;


var animationPretitleStarted = false;

var enableMoveToProject = false;
var enableMoveToHome = false;
var inZoom = false;


var onBack = false;

var once =false;

var onProject = false;

var start = false;
init();
animate();





















