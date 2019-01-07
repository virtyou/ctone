custom.one.earring = function(opts) {
	//
	// initialization
	//
	var earringGroup = new THREE.Object3D();
	var skull_earringGroup=new THREE.Object3D();
	var skulljawMesh = new THREE.Mesh( );
	var skullheadMesh = new THREE.Mesh( );
	var skulljawLoader = new THREE.JSONLoader(true);
	var skullheadLoader = new THREE.JSONLoader(true);
	var hair_geometry = new THREE.CubeGeometry( 2, 2, 2 );
	var skull_material;
	var cube_skull_0;
	var cube_skull_1;
	var cube2_0;
	var cube2_1;
	var cube2_2;
	var cube2_3;
	var pendulum2_0;
	var pendulum2_1;
	var pendulum2_2;
	var pendulum2_3;
	var pendulum2_4;
	var gravity = 60;
	var hair_damp=8;
	var air_push= 0.05;
	var spacer = -20;
	var stiffness = 0;
	var dt_poop = 0.01;   // TIME IS LOOP-CODED HERE -- SHOULD BE SET TO CLOCK!
	var is_top = 1;
	var pendulum_00_rotation_z=2.8;
	var above_graphic= {x:0, z:0};
	var above_calc= {x:0, z:0};
	var head_total_rot = {};

	function pend_maker(movex, movez){
	  this.fulcrum = {x:0,z:0};
	  this.fulcrum_old = {x:0,z:0};
	  this.fulcrum_speed = {x:0,z:0};
	  this.fulcrum_speed_old = {x:0,z:0};
	  this.fulcrum_acceleration = {x:0,z:0};
	  this.rotation = {x:1, z:1};
	  this.rot_speed = {x:0,z:0};
	  this.angle2vert = {x:0,z:0};
	}

	var pend2_0 = new pend_maker();
	var pend2_1 = new pend_maker();
	var pend2_2 = new pend_maker();
	var pend2_3 = new pend_maker();

	/////  EARRING CHAIN STARTS HERE
	skull_material = new THREE.MeshPhongMaterial( { color: 0x775533, emissive: 0, specular: 0xaa88ff, reflectivity: 100, shininess: 10, metal: false} );
//    earringGroup.position.set(-24, 11, 12);  //// POSITIONS EARINGS ON HEAD
	earringGroup.position.set(-6, 2.75, 3);  //// POSITIONS EARINGS ON HEAD
	earringGroup.scale.set(0.25, 0.25, 0.25);

	//////// THE NEW TREADMILL STARTS -->   --->
	/////   PENDULUM 2_0:
	pendulum2_0 = new THREE.Object3D();
	cube2_0 = new THREE.Mesh( hair_geometry, skull_material );
	cube2_0.scale.set(1, 1, 1);
	pendulum2_0.add( cube2_0 );
	pendulum2_0.position.set(0, 0, 0);
	earringGroup.add(pendulum2_0);
	opts.scene.add(earringGroup);

	spacer = -2;

	//////// TREADMILL CONTINUES -->  --->  ------>
	/////   PENDULUM 2_1:
	pendulum2_1 = new THREE.Object3D();
	cube2_1 = new THREE.Mesh( hair_geometry, skull_material );
	cube2_1.scale.set(0.2, 0.8, 0.2);
	pendulum2_1.add( cube2_1 );
	pendulum2_1.position.set(0, spacer, 0); 
	pendulum2_0.add(pendulum2_1);
	spacer = 1;

	//////// TREADMILL CONTINUES -->  --->  ------>
	/////   PENDULUM 2_2:
	pendulum2_2 = new THREE.Object3D();  // cube2_2 is skull instead of a cube
	skullheadLoader.load( "/models/one/star.js", function(geometry){  //skullhead_s.js
		cube2_2 = new THREE.Mesh( geometry, skull_material );
		cube2_2.position.set(0, 0, 0);
		cube2_2.rotation.set(0, 0, 0);
		cube2_2.scale.set(3, 3, 4);
		pendulum2_2.add(cube2_2);   // cube2_2 is skull NOT cube
		pendulum2_2.position.set(0, spacer, 0); 
		pendulum2_1.add(pendulum2_2);
	});
	
	//////// TREADMILL CONTINUES -->  --->  ------>
	/////   PENDULUM 2_3:
	pendulum2_3 = new THREE.Object3D();  // cube2_3 is skull instead of a cube
	skulljawLoader.load( "/models/one/skulljaw_s.js", function(geometry){   
		cube2_3 = new THREE.Mesh( geometry, skull_material );
		cube2_3.position.set(0, -1.65, 0);
		cube2_3.rotation.set(0, 0, 0);
		cube2_3.scale.set(1, 7, 1);
		pendulum2_3.add( cube2_3 );   // cube2_2 is skull-jaw, NOT cube
		pendulum2_3.position.set(0, -4, 0); 
		pendulum2_2.add(pendulum2_3);
	});

	///////////////////  HAIR SWINGING FUNCTION BELOW HERE ///////////////
	//////////////////////////////////////////////////////////////////////
	function swinger(whichPend, graphic_link, movex, movez){
		whichPend.fulcrum.x=movex;  // attach pendulum pivot to something
		whichPend.fulcrum.z=movez;
		whichPend.fulcrum_speed.x=(whichPend.fulcrum.x - whichPend.fulcrum_old.x)/dt_poop; // Calc pendulum pivot's speed
		whichPend.fulcrum_speed.z=(whichPend.fulcrum.z - whichPend.fulcrum_old.z)/dt_poop; 
		whichPend.fulcrum_acceleration.x = (whichPend.fulcrum_speed.x - whichPend.fulcrum_speed_old.x)/dt_poop;  // calc acceleration 
		whichPend.fulcrum_acceleration.z = (whichPend.fulcrum_speed.z - whichPend.fulcrum_speed_old.z)/dt_poop;  

		//// TOTAL PENDULUM ROTATION (FROM STRAIGHT DOWN)
		whichPend.angle2vert.z = (graphic_link.rotation.z + above_graphic.z + head_total_rot.z);  
		whichPend.angle2vert.x = (graphic_link.rotation.x + above_graphic.x);

		//////////// calc how much swing for z axis
		whichPend.rotation.z+=whichPend.rot_speed.z*dt_poop;
		whichPend.rot_speed.z+=(-gravity*Math.sin(whichPend.angle2vert.z) - (stiffness*Math.sin(graphic_link.rotation.z - pendulum_00_rotation_z))  - (air_push*whichPend.fulcrum_acceleration.x * Math.cos(whichPend.angle2vert.z)) - hair_damp*whichPend.rot_speed.z)*dt_poop;  

		//////////// calc how much swing for x axis
		whichPend.rotation.x+=whichPend.rot_speed.x*dt_poop;//pend_0_rotation_z;
		whichPend.rot_speed.x+=(-gravity*Math.sin(whichPend.angle2vert.x) - (stiffness*Math.sin(graphic_link.rotation.x))  - (air_push*whichPend.fulcrum_acceleration.z * Math.cos(whichPend.angle2vert.x)) - hair_damp*whichPend.rot_speed.x)*dt_poop;

		///// ASSIGN CALCS 
		graphic_link.rotation.z = whichPend.rotation.z - above_calc.z;  // calculated rotation assigned to graphics
		graphic_link.rotation.x = whichPend.rotation.x - above_calc.x;  // calculated rotation assigned to graphics

		if(is_top==1){
			graphic_link.position.x=whichPend.fulcrum.x;  // pendulum pivot movement assigned to graphics
			graphic_link.position.z=whichPend.fulcrum.z;
		}
		whichPend.fulcrum_old.x=whichPend.fulcrum.x;  // pendulum position saved to calc speed in next loop
		whichPend.fulcrum_speed_old.x=whichPend.fulcrum_speed.x; // pendulum position saved to calc acceleration in next loop
		whichPend.fulcrum_old.z=whichPend.fulcrum.z; 
		whichPend.fulcrum_speed_old.z=whichPend.fulcrum_speed.z;
		if(is_top==1){  // top link is the only link directly moved by head -- is_top = 1 means is attached to head
			whichPend.fulcrum_old.z=graphic_link.position.z;   // location recorded for next loop
			whichPend.fulcrum_speed_old.z=whichPend.fulcrum_speed.z;    // speed recorded for next loop
		}
		above_graphic.x+=graphic_link.rotation.x; // sum total of previous rotations - graphic rep
		above_graphic.z+=graphic_link.rotation.z;
		above_calc.x+=whichPend.rotation.x;   // sum total of previous rotations - as calced
		above_calc.z+=whichPend.rotation.z;
		pendulum_00_rotation_z=0;  // this angle is only used in top link to make ponytail stick out
		is_top = 0;  // this turns off head-attachment after top link 
		gravity-=10;
		air_push*= 0.5;
		stiffness*=0.6;
	}
	////////////////////  HAIR SWINGER FUNCTION DEFINED ABOVE HERE /////////////////


	//
	// ticker
	//
	var ticker = function(skeleton) {
		above_graphic= {x:0, z:0}; /// zero's out stuff for start of chain
		above_calc= {x:0, z:0};
		gravity=400;
		air_push= 0.3;
		hair_damp=10;
		stiffness=0;
		is_top=1;  // attaches the next swinger to the head (or whatever)

		head_total_rot.z = (skeleton.bones[2].rotation.z + skeleton.bones[1].rotation.z + skeleton.bones[0].rotation.z);

		swinger(pend2_0, pendulum2_0, 0, 0);
		swinger(pend2_1, pendulum2_1, -1*(cube2_1).localToWorld(new THREE.Vector3(0, 0, 0)).x, -1*(cube2_1).localToWorld(new THREE.Vector3(0, 0, 0)).z);
		if(cube2_2){
			swinger(pend2_2, pendulum2_2, (cube2_2).localToWorld(new THREE.Vector3(0, 0, 0)).x, -1*(cube2_2).localToWorld(new THREE.Vector3(0, 0, 0)).z);

			/* TODO: get this working!!!!!!
			
			cube2_3.position.y = -2 + 4*pend1.rotation.x; // skull jaw
			cube2_3.position.y = -2 + 4*( pend1.rotation.x % Math.PI );
			cube2_1.rotation.y = 2*pend1.rotation.x + 2 * head_pivotGroup.rotation.y + 0.8;
			cube2_2.rotation.y = 2*pend1.rotation.x + 2 * rib_pivotGroup.rotation.y; 
			cube2_3.rotation.y = 2*pend1.rotation.x + 2 * rib_pivotGroup.rotation.y;

			*/
		}
	};

	//
	// call iterator and return data object
	//
	opts.iterator();
	return {
		name: "earring",
		tick: ticker,
		thrings: [earringGroup]
	};
};