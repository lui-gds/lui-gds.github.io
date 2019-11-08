var camera, scene, renderer;
		var starField,geometry, material, mesh, object,object,plane, mesh, geometry, material, controls;
		var ready = false;
		var touch = false
		var objects = [];
		let loadingloadingBar = document.getElementById('loading-bar')
		let loadingPercentage = document.getElementById('bar-percentage')

		init();
		animate();

		function init() {
			const height = window.innerHeight;
			const width = window.innerWidth;
			camera = new THREE.PerspectiveCamera( 45, width/height );
			if(  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini| SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i.test(navigator.userAgent) ) {
					camera.position.set(0,0,455)
			} else {
					camera.position.set(0,0,355)
			}

			scene = new THREE.Scene();
						var loadingManager = new THREE.LoadingManager()
						loadingManager.onLoad = function(item, loaded, total) {
							document.getElementById('overlay').style.display = 'none';
						}

		var loadingFunction = function(xhr) {
							if ( xhr.lengthComputable ) {
							var percentComplete = xhr.loaded / xhr.total * 100;
						console.log( Math.round(percentComplete) + '%' );
						loadingloadingBar.style.width = Math.round(percentComplete) + '%'
						loadingPercentage.innerHTML = Math.round(percentComplete) + '%'
						}
						}
						var loader = new THREE.JSONLoader(loadingManager);
						loader.load('https://res.cloudinary.com/dipmrqsgf/raw/upload/v1539864927/logo.json', handle_load, loadingFunction);

						function handle_load(geometry, materials) {
							var materials = new THREE.MeshNormalMaterial({

							})
							var mesh = new THREE.Mesh(geometry, materials)
							scene.add(mesh);

							mesh.position.z = 0;
							mesh.position.y = 50;

							objects.push(mesh)

						}
						var cbgeometry = new THREE.PlaneGeometry( 50, 50, 8, 8 );

						var starsGeometry = new THREE.Geometry();
						var pink = true
					for ( var i = 0; i < 30 * (width/3); i ++ ) {

					var star = new THREE.Vector3();
					star.x = THREE.Math.randFloatSpread( 1500 );
					star.y = THREE.Math.randFloatSpread( 1500 );
					star.z = THREE.Math.randFloatSpread( 1500 );

					// starsGeometry.colors.push(new THREE.Color(Math.random() * 0xffffff))
					if(pink) {
					starsGeometry.colors.push(new THREE.Color( 0xff00ff))
					pink = false
					} else {
					starsGeometry.colors.push(new THREE.Color( 0x00ffff))
					pink = true
					}

					starsGeometry.vertices.push( star );

					}



					var starsMaterial = new THREE.PointsMaterial( { vertexColors: THREE.VertexColors } );

					starField = new THREE.Points( starsGeometry, starsMaterial );

					scene.add( starField );

						function onWindowResize() {

								windowHalfX = window.innerWidth / 2;
								windowHalfY = window.innerHeight / 2;

								camera.aspect = window.innerWidth / window.innerHeight;
								camera.updateProjectionMatrix();

								renderer.setSize( window.innerWidth, window.innerHeight );

							}


		window.addEventListener( 'resize', onWindowResize, false );





			renderer = new THREE.WebGLRenderer( { alpha: true } );
			renderer.setSize( width,height);

			var wrapper = document.querySelector('.container')
			var	container = document.createElement( 'div' );
			container.setAttribute("id", "threejs-container");
			wrapper.appendChild( container );
			container.appendChild( renderer.domElement );
		if(  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini| SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i.test(navigator.userAgent) ) {
			controls = new THREE.OrbitControls( camera, container );
			controls.enableZoom=false;
			 controls.panSpeed = 1;
				controls.enableDamping = true;
			 controls.dampingFactor = 0.7;
			 controls.enabled = true;
			 controls.rotateSpeed = 0.5;
			 controls.maxPolarAngle = Math.PI / 2;
		controls.target.set( 0, 0, 0 );

		} else {
			controls = new THREE.OrbitControls( camera, container );
			controls.enableZoom=false;
			 controls.panSpeed = 1;
				controls.enableDamping = true;
			 controls.dampingFactor = 0.7;
			 controls.enabled = true;
			 controls.rotateSpeed = 0.8;
			 controls.maxPolarAngle = Math.PI / 2;
		controls.target.set( 0, 0, 0 );

		}



		}

		function animate() {
			requestAnimationFrame( animate );


			if(objects.length > 0) {

				objects[0].rotation.x += 0.015
				objects[0].rotation.z += 0.008

			}
			starField.rotation.y += 0.0001

			render()

			renderer.render( scene, camera );

		}
		function render() {



		}