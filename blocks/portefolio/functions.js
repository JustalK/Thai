function init() {

	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 5000 );
	camera.position.set( 0, -10, 400 );
	
	scene = new THREE.Scene();
	
	var light = new THREE.PointLight( 0xffffff, 1 );
	light.position.z = 600;
	scene.add( light );

	var light2 = new THREE.PointLight( 0xffffff, 1 );
	light2.position.z = 1200;
	scene.add( light2 );	
	
	scene.add(wallpaper);
	for(var i=0;i<projects.length;i++) {
		scene.add(projects[i].mesh);
	}

	$("#menu-bottom").css("background","#000000");
	renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setSize( $("#menu-bottom").width(), $("#headerBanner").height() );
	$("#menu-bottom").append(renderer.domElement);
	renderer.setPixelRatio( window.devicePixelRatio );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'click', onDocumentMouseClick, false );
	window.addEventListener( "resize", onWindowResize, false );
	
	composer = new THREE.EffectComposer( renderer );
	composer.addPass( new THREE.RenderPass( scene, camera ) );

	glitchPass = new THREE.GlitchPass();
	glitchPass.renderToScreen = true;
	composer.addPass( glitchPass );
	glitchPass.goWild=true;
	//var audio = new Audio('songs/portefolio.mp3');
	//audio.play();
}

function onWindowResize() {

	camera.aspect = (window.innerWidth) / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setSize( $("#menu-bottom").width(), $("#headerBanner").height() );

}

// =================================================================================================================================>
// On Mouse Move
// =================================================================================================================================>	
function onDocumentMouseMove( event ) {
	event.preventDefault();

	mouse.x = ( event.clientX / (window.innerWidth) ) * 2 - 1;
	mouse.y = - ( event.clientY / (window.innerHeight) ) * 2 + 1;
}

function onDocumentMouseClick( event ) {
	if(onBack) {
		enableMoveToHome = true;
	}
	if(oldProject != null) {
		if(oldProject!=projects[0]) {
			if(inZoom && !onBack && onProject) {
				window.open(oldProject.link);
			}
			enableMoveToProject = true;
		} else {
			if(onProject) {
				window.open(projects[0].link);
			}
		}
	}
};

function moveToProject(project,liMaxX,liMaxY,liMaxZ,limX,limY,limZ,speedX,speedY,speedZ,liMaxRotZ,limRotZ,speedRotZ) {
	if(enableMoveToProject && !inZoom && oldProject==project) {
		enableMoveToProject = move(liMaxX,liMaxY,liMaxZ,limX,limY,limZ,speedX,speedY,speedZ,liMaxRotZ,limRotZ,speedRotZ);
		inZoom = !enableMoveToProject;
	}	
}

function moveToHome(project,speedX,speedY,speedZ,speedRotZ) {
	if(enableMoveToHome && inZoom && oldProject==project) {
		enableMoveToHome = reverse(speedX,speedY,speedZ,speedRotZ);
		if(!enableMoveToHome) {
			inZoom = false;
			enableMoveToProject = false;
			oldProject == null;
		}
	}	
}
//
function move(liMaxX,liMaxY,liMaxZ,limX,limY,limZ,speedX,speedY,speedZ,liMaxRotZ,limRotZ,speedRotZ) {
	var inMove = false;
	if(camera.position.x>limX && camera.position.x<liMaxX) {
		camera.position.x = camera.position.x + speedX;
		inMove = true;
	}
	if(camera.position.y>limY && camera.position.y<liMaxY) {
		camera.position.y = camera.position.y + speedY;
		inMove = true;
	}
	if(camera.position.z>limZ && camera.position.z<liMaxZ) {
		camera.position.z = camera.position.z + speedZ;
		inMove = true;
	}
	if(camera.rotation.z>limRotZ && camera.rotation.z<liMaxRotZ) {
		camera.rotation.z = camera.rotation.z + speedRotZ;
		inMove = true;
	}	
	return inMove;
}

function reverse(speedX,speedY,speedZ,speedRotZ) {
	var inMove = false;
	if(Math.abs(camera.position.x)>Math.abs(speedX)) {
		camera.position.x = camera.position.x + speedX;
		inMove = true;
	} else {
		camera.position.x = 0;
	}
	if(Math.abs(Math.abs(camera.position.y)-10)>Math.abs(speedY)) {
		camera.position.y = camera.position.y + speedY;
		inMove = true;
	} else {
		if(camera.position.y!=-10) {
			frameGlitch=10;
		}
		camera.position.y = -10;
	}
	if(Math.abs(Math.abs(camera.position.z)-400)>=Math.abs(speedZ)) {
		camera.position.z = camera.position.z + speedZ;
		inMove = true;
	} else {
		camera.position.z = 400;
	}
	if(Math.abs(camera.rotation.z)>=Math.abs(speedRotZ)) {
		camera.rotation.z = camera.rotation.z + speedRotZ;
		inMove = true;
	} else {
		camera.rotation.z = 0;
	}	
	return inMove;
}

function animate() {
	if(animation) {
		requestAnimationFrame( animate );
		if(start) {
			raycaster.setFromCamera( mouse, camera );
			var intersects_upload = raycaster.intersectObjects( scene.children, true );
			var projectsIntersection = null;
			var backIntersection = null;
			onBack = false;
			if(intersects_upload.length > 0) {
				for(var i=0;i<intersects_upload.length;i++) {
					for(var j=0;j<projects.length;j++) {
						if(intersects_upload[i].object==projects[j].photo || intersects_upload[i].object==projects[j].cadre) {
							projectsIntersection = j; 
						}
						if(intersects_upload[i].object==projects[j].back && inZoom) {
							onBack = true;
							backIntersection = j; 
						}
					}
				}
			}
			if(!inZoom && !enableMoveToProject) {
				if(projectsIntersection!=null) {
					projects[projectsIntersection].materialCadre.color.setHex( 0xFFFFFF );
					setProject(projects[projectsIntersection],projectsIntersection);			
				} else {
					if(oldProject!=projects[0]) {
						for(var i=0;i<projects.length;i++) {
							projects[i].materialCadre.color.setHex( 0x1dc4d4 );
						}
						setProject(null);
						setProject(projects[0],0);
					}
				}
			}
			if(projectsIntersection==null) {
				$('html,body').css('cursor','auto');
				onProject = false;
			} else {
				$('html,body').css('cursor','pointer');
				onProject = true;
			}
			if(backIntersection!=null) {
				$('html,body').css('cursor','pointer');
				if(backIntersection!=0) {
					projects[backIntersection].back.material.opacity = 2;
				}
			} else {
				for(var i=0;i<projects.length;i++) {
					if(projects[i].back.material.opacity==2) {
						if(i!=0) {
							projects[i].back.material.opacity=0.9;
						}
					}
				}
			}
			firstMovement();
		} else {
			
			if(projects[0].mesh.position.z>=100) {
				for(var i=0;i<projects.length;i++) {
					projects[i].mesh.position.z-=100;
					frameGlitch = 20;
				}
			} else {
				start = true;
			}
			//-100,-40,-200
		}
		if(frameGlitch>0) {
			composer.render();
			frameGlitch--;
		} else {
			renderer.render( scene, camera );
		}
	}
}

function firstMovement() {
	moveWallpaper();
	moveProject(project2015_1);
	moveProject(project2015_2);
	moveProject(project2016_1);
	for(var i=1;i<projects.length;i++) {
		moveTo(projects[i]);
	}
	moveCamera();
	rotCamera();
}

function moveTo(project,liMaxX,liMaxY,liMaxZ,limX,limY,limZ,speedX,speedY,speedZ,liMaxRotZ,limRotZ,speedRotZ) {
	moveToProject(project,project.liMaxX,project.liMaxY,project.liMaxZ,project.limX,project.limY,project.limZ,project.speedX,project.speedY,project.speedZ,project.liMaxRotZ,project.limRotZ,project.speedRotZ);
	moveToHome(project,-project.speedX,-project.speedY,-project.speedZ,-project.speedRotZ);	
}

function moveProject(project) {
	if(project.cadre.rotation.x<0.15 && !project.rotX) {
		project.cadre.rotation.x += 0.001;
		project.photo.rotation.x += 0.001;
		project.cadre.rotation.y += 0.001;
		project.photo.rotation.y += 0.001;
		project.cadre.position.x += 0.008;
		project.photo.position.x += 0.008;
		project.cadre.position.y += 0.008;
		project.photo.position.y += 0.008;
		project.title.position.y += 0.02;
		project.info.position.x += 0.015;
		project.date.position.x += 0.008;
		project.back.position.y += 0.01;
		project.back.position.x += 0.005;
	} else if(project.cadre.rotation.x>-0.15){
		project.rotX = true;
		project.cadre.rotation.x -= 0.001;
		project.photo.rotation.x -= 0.001;		
		project.cadre.rotation.y -= 0.001;
		project.photo.rotation.y -= 0.001;	
		project.cadre.position.x -= 0.008;
		project.photo.position.x -= 0.008;	
		project.cadre.position.y -= 0.008;
		project.photo.position.y -= 0.008;
		project.title.position.y -= 0.02;
		project.info.position.x -= 0.015;
		project.date.position.x -= 0.008;
		project.back.position.y -= 0.01;
		project.back.position.x -= 0.005;
	} else {
		project.rotX = false;
	}
}

function setProject(project,projectNbr) {
	if(project!=null) {
		if(oldProject!=null) {
			oldProject.materialInfo.opacity=0;
			oldProject.materialTitle.opacity=0;
			oldProject.materialDate.opacity=0;	
			oldProject.materialBack.opacity=0;	
		}
		project.materialInfo.opacity=0.9;
		project.materialTitle.opacity=0.9;
		project.materialDate.opacity=0.9;	
		if(projectNbr!=0) {
			project.materialBack.opacity=0.9;	
		}
		oldProject = project;
		oldProjectNbr = projectNbr;
	} else {
		if(oldProject!=null) {
			oldProject.materialInfo.opacity=0;
			oldProject.materialTitle.opacity=0;
			oldProject.materialDate.opacity=0;	
			oldProject.materialBack.opacity=0;	
			oldProject = null;
			oldProjectNbr = null;
		}
	}
}

function moveWallpaper() {
	if(wallpaper.position.x<300) {
		wallpaper.position.x = wallpaper.position.x + 0.1;
	}
	if(materialWallpaper.opacity<1 && camera.position.z==400) {
		materialWallpaper.opacity+=0.01*speed;
	}
}

$("#home").click(function() {
	if(positionViewer=="portefolio") {
		positionViewer = "menu";
		$("canvas").animate({"opacity":"0"},500,function() {
			animation = false;
			$("canvas").remove();
			$("#headerBanner").animate({"height":"0px"},1000,function() {
				$("#paths").empty();
				$("#paths").append("Menu");
				$("#submenu").show();
				$("#menu-bottom").remove();
				$(".header-top-middle").show();
				$("#logo").animate({"opacity":"1"},300);
			});
		});
	}
});

function moveCamera() {
	camera.position.x += speedPosCamX;
	camera.position.y += speedPosCamY;
	camera.position.z += speedPosCamZ;
}

function rotCamera() {
	camera.rotation.x += speedRotCamX;
	camera.rotation.y += speedRotCamY;
	camera.rotation.z += speedRotCamZ;
}

function createGeometry(shape) {
	return new THREE.ExtrudeGeometry( shape, { amount: 3, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 2, bevelThickness: 2 } );
}

function createGeometryLetter(shape) {
	return new THREE.ExtrudeGeometry( shape, { amount: 300, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 1, bevelThickness: 2 } );
}

/**
 * For making a beautiful sqaure 3D
 * @diametre The diameter of the square
 * @posX The position X of the square in the 3D space
 * @posY The position Y of the square in the 3D space
 * @posZ The position Z of the square in the 3D space 
 */
function square(diametre,posX,posY,posZ) {
	this.square = new THREE.Shape();
	this.square.moveTo(-diametre,diametre);
	this.square.lineTo(-diametre,-diametre);
	this.square.lineTo(diametre,-diametre);
	this.square.lineTo(diametre,diametre);
	this.square.lineTo(-diametre,diametre);
	this.material = new THREE.MeshBasicMaterial( { color: 0xb7c5eb, transparent: true, opacity: 1} );
	this.mesh = new THREE.Mesh( createGeometry(this.square), this.material );
	this.mesh.position.x = posX;
	this.mesh.position.y = posY;
	this.mesh.position.z = posZ;
}

/**
 * For making a beautiful plane in 3D
 * @sizeX The size of the x absciss
 * @sizeY The size of the y absciss
 * @texture The path of the text
 * @posX The position X of the plane in the 3D space
 * @posY The position Y of the plane in the 3D space
 * @posZ The position Z of the plane in the 3D space
 * @transparent true if the plane is transparent, false if else
 * @opacity The opacity of the plane (work only if the plane is transparent) 
 */
function plane(sizeX,sizeY,texture,posX,posY,posZ,transparent,opacity) {
	this.material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( texture ), transparent: transparent, opacity: opacity });
	this.mesh = new THREE.Mesh( new THREE.PlaneGeometry( sizeX, sizeY, 4, 4 ), this.material );
	this.mesh.position.x = posX;
	this.mesh.position.y = posY;
	this.mesh.position.z = posZ;
}

/**
 * For making a beautiful plane in 3D without texture
 * @sizeX The size of the x absciss
 * @sizeY The size of the y absciss
 * @posX The position X of the plane in the 3D space
 * @posY The position Y of the plane in the 3D space
 * @posZ The position Z of the plane in the 3D space
 * @transparent true if the plane is transparent, false if else
 * @opacity The opacity of the plane (work only if the plane is transparent) 
 */
function planeNoTexture(sizeX,sizeY,posX,posY,posZ,transparent,opacity) {
	this.material = new THREE.MeshBasicMaterial( { color: 0x000000, transparent: transparent, opacity: opacity });
	this.mesh = new THREE.Mesh( new THREE.PlaneGeometry( sizeX, sizeY, 4, 4 ), this.material );
	this.mesh.position.x = posX;
	this.mesh.position.y = posY;
	this.mesh.position.z = posZ;
}