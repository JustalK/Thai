/**
 * The amzing prototype for creating all the frame easily for each projects
 * @link The link of the project
 * @posX The position X of the "cadre" in the 3D space
 * @posY The position Y of the "cadre" in the 3D space
 * @posZ The position Z of the "cadre" in the 3D space
 * @photo The path of the picture of the project
 * @liMaxX The limit of the x movement when we move the camera (Max)
 * @liMaxY The limit of the y movement when we move the camera (Max)
 * @liMaxZ The limit of the z movement when we move the camera (Max)
 * @limX The limit of the x movement when we move the camera (Min)
 * @limY The limit of the y movement when we move the camera (Min)
 * @limZ The limit of the z movement when we move the camera (Min)
 * @speedX The speed of the camera for x
 * @speedY The speed of the camera for y
 * @speedZ The speed of the camera for z
 * @liMaxRotZ The limit of the rotation for z (Max)
 * @limRotZ The limit of the rotation for z (Min)
 * @speedRotZ The speed of the rotation z
 */
function cadre(link,posX,posY,posZ,photo,liMaxX,liMaxY,liMaxZ,limX,limY,limZ,speedX,speedY,speedZ,liMaxRotZ,limRotZ,speedRotZ) {
	this.link = link;
	
	this.liMaxX = liMaxX;
	this.liMaxY = liMaxY;
	this.liMaxZ = liMaxZ;
	this.limX = limX;
	this.limY = limY;
	this.limZ = limZ;
	this.speedX = speedX;
	this.speedY = speedY;
	this.speedZ = speedZ;
	this.liMaxRotZ = liMaxRotZ;
	this.limRotZ = limRotZ;
	this.speedRotZ = speedRotZ;
	
	this.rotX = false;
	this.rotY = false;
	this.mesh =  new THREE.Object3D();
	this.shape = new THREE.Shape();
	this.shape.moveTo(0,0);
	this.shape.lineTo(0,5);
	this.shape.lineTo(5,10);
	this.shape.lineTo(5,20);
	this.shape.lineTo(0,25);
	this.shape.lineTo(0,30);
	this.shape.lineTo(10,30);
	this.shape.lineTo(15,25);
	this.shape.lineTo(25,25);
	this.shape.lineTo(30,30);
	this.shape.lineTo(40,30);
	this.shape.lineTo(40,25);
	this.shape.lineTo(35,20);
	this.shape.lineTo(35,10);
	this.shape.lineTo(40,5);
	this.shape.lineTo(40,0);
	this.shape.lineTo(30,0);
	this.shape.lineTo(25,5);
	this.shape.lineTo(15,5);
	this.shape.lineTo(10,0);
	this.shape.lineTo(6,0);
	this.shape.lineTo(6,6);
	this.shape.lineTo(34,6);
	this.shape.lineTo(34,24);
	this.shape.lineTo(6,24);
	this.shape.lineTo(6,0);
	this.shape.lineTo(0,0);
	this.materialCadre = new THREE.MeshPhongMaterial( { color: 0x1dc4d4, transparent: true, opacity: 0.9, wireframe: true} );
	this.cadre = new THREE.Mesh( new THREE.ExtrudeGeometry( this.shape, { amount: 5, bevelEnabled: true, bevelSegments: 1, steps: 0, bevelSize: 2, bevelThickness: 0 } ), this.materialCadre );
	
	this.materialPhoto = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( photo ), transparent: true, opacity: 1 });
	this.photo = new THREE.Mesh( new THREE.PlaneGeometry( 28, 18, 4, 4 ), this.materialPhoto );
	this.photo.position.x = 20;
	this.photo.position.y = 15;
	this.photo.position.z = 2;
	
	this.materialInfo = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( photo.slice(0, -4)+"_techno.png" ), transparent: true, opacity: 0 });
	this.info = new THREE.Mesh( new THREE.PlaneGeometry( 45, 30, 4, 4 ), this.materialInfo );
	this.info.position.x = 40;
	this.info.position.y = -18;
	this.info.position.z = 8;

	this.materialTitle = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( photo.slice(0, -4)+"_name.png" ), transparent: true, opacity: 0 });
	this.title = new THREE.Mesh( new THREE.PlaneGeometry( 45, 30, 4, 4 ), this.materialTitle );
	this.title.position.x = 20;
	this.title.position.y = 48;
	this.title.position.z = 8;	
	
	this.materialDate = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( photo.slice(0, -4)+"_date.png" ), transparent: true, opacity: 0 });
	this.date = new THREE.Mesh( new THREE.PlaneGeometry( 45, 30, 4, 4 ), this.materialDate );
	this.date.position.x = -27;
	this.date.position.y = 15;
	this.date.position.z = 8;	
	
	this.materialBack = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/back.png' ), transparent: true, opacity: 0 });
	this.back = new THREE.Mesh( new THREE.PlaneGeometry( 20, 10, 4, 4 ), this.materialBack );
	this.back.position.x = 55;
	this.back.position.y = 20;
	this.back.position.z = 8;	
	
	this.mesh.add(this.photo);
	this.mesh.add(this.info);
	this.mesh.add(this.title);
	this.mesh.add(this.date);
	this.mesh.add(this.back);
	this.mesh.add(this.cadre);
	this.mesh.position.x = posX;
	this.mesh.position.y = posY;
	this.mesh.position.z = posZ;	
}

var project2015_1 = new cadre("http://www.google.com",50,30,950,'images/2015_1.png',60,35,1337,-1337,-1337,50,1.78,1.4,-10.08,0.45,-1337,0.0148);
var project2015_2 = new cadre("http://www.google.com",-20,-14,1100,'images/2015_2.png',0,0,0,0,0,0,0,0,0,0,0,0);
var project2016_1 = new cadre("http://www.google.com",-100,-40,850,'images/2016_1.png',1337,1337,1337,-85,-40,-35,-2,-0.7,-10.32,1337,-0.85,-0.008);
var project2016_3 = new cadre("http://www.google.com",-80,75,800,'images/2016_3.png',100,90,1337,-70,-1337,-50,-1.85,3,-10,0.3,-0.3,0.007);
project2016_1.mesh.scale.set(0.6,0.6,0.6);
project2016_1.mesh.rotation.z=-0.2;
project2016_3.mesh.rotation.z=0.3;
project2015_1.mesh.scale.set(0.6,0.6,0.6);
project2015_1.mesh.rotation.z=0.5;
var projects = [];
projects.push(project2015_2);
projects.push(project2015_1);
projects.push(project2016_1);
projects.push(project2016_3);

var materialWallpaper = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/start.png' ), transparent: true, opacity: 0  } );
var wallpaper = new THREE.Mesh( new THREE.PlaneGeometry( 4*window.innerWidth, 4*window.innerHeight, 4, 4 ), materialWallpaper );
wallpaper.position.z = -600;