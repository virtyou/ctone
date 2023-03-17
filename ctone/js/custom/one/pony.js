custom.one.pony = function(opts) {
	//
	// initialization
	//

    ///////////////////////////////////////////////
    ////////////////  HAIR VARIABLES BELOW

    var thringz = [];

    var dt_poop = 0.01;   // TIME IS LOOP-CODED HERE -- SHOULD BE SET TO CLOCK!

    var hairNew;
    var ponytail;
    var hairNewLoader = new THREE.JSONLoader();
    var ponytailLoader = new THREE.JSONLoader();

    var hairGroup=new THREE.Object3D();
    var ponytailGroup=new THREE.Object3D();

    var cube0;
    var cube1;
    var cube2;
    var cube3;
    var cube4;
    var cube5;
    /// ETC.  ETC....

    var pendulum_0;
    var pendulum_1;
    var pendulum_2;
    var pendulum_3;
    var pendulum_4;
    /// ETC.  ETC....

    var above_graphic= {x:0, z:0};
    var above_calc= {x:0, z:0};
    var head_total_rot = {z:0};

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

    var pend0 = new pend_maker();
    var pend1 = new pend_maker();
    var pend2 = new pend_maker();
    var pend3 = new pend_maker();
    var pend4 = new pend_maker();

    var gravity = 60;
    var hair_damp=8;
    var air_push= 0.05;
    var spacer = -20;

    var stiffness = 0;
    var pendulum_00_rotation_z=2.8;
    var is_top = 1;
    //////////////////////////////////////////////////
    /////////////////// HAIR VARIABLES ABOVE

    //////////////////////////////////////////////////////
    //////////////////  HAIR LOADS BELOW /////////////

    //// LOAD PONYTAIL
    var hairMap = (new THREE.TextureLoader()).load( "/maps/one/hair_alphaGimp3a.png" ); // mime.jpg   //hair_alphaGimp1
    var ponytailMaterial = new THREE.MeshPhongMaterial( { map: hairMap, color: 0x224466, morphTargets: false, skinning: true, transparent: true,  specular: 0xaaaaff, alphaTest: 0.6, reflectivity: 100, /*metal: false,*/ shininess: 1} );
    ponytailLoader.load( "/models/one/ponytail.js", function(geometry){   // models/headC  00visEnd3  TEST3.js TEST3A_VNECK.js
        ponytail = new THREE.SkinnedMesh( geometry, ponytailMaterial );
//        ponytail.position.set(0, 0, 0);
        ponytail.position.set(6.25, 16.25, 2.5);
        ponytail.rotation.set(0, 0, 0);
//        ponytail.scale.set(4, 4, 4);
        opts.scene.add(ponytail);
        thringz.push(ponytail);
//        zero.core.camera.scene.add(ponytail);
        opts.iterator();
     } ); 

    /////  LOAD HEAD HAIR 
    var hairMap = (new THREE.TextureLoader()).load( "/maps/one/hairShrunk.png" ); // hair_alphaGimp3c.png
    var hairNewMaterial = new THREE.MeshPhongMaterial( {map: hairMap, color: 0x447788, morphTargets: true, skinning: false, transparent: true, emissive: 0,  specular: 0xaaaaff, reflectivity: 100, /*metal: false,*/ shininess: 1} );
    hairNewLoader.load( "/models/one/hairDFULL5.js", function(geometry){   // hairNew5a2 ///models/headC  00visEnd3  TEST3.js TEST3A_VNECK.
        hairNew = new THREE.Mesh( geometry, hairNewMaterial );
        hairMap.wrapS = hairMap.wrapT = THREE.RepeatWrapping;
        hairMap.repeat.set( 4, 1 );
        hairNew.position.set(0, 0, 0);
        hairNew.rotation.set(0, 0, 0);
//        hairNew.scale.set(4, 4, 4);
        hairGroup.add(hairNew);
    } );

    /////  ADD HEAD HAIR GROUP TO HEAD
//    hairGroup.position.set(0, -38, 11);
//    hairGroup.position.set(0, -8.5, 2.75);
//    hairGroup.position.set(0, -9.9, 2.75);
    hairGroup.position.set(0, -9.7, 2.75);
    opts.scene.add(hairGroup);

//    ponytailGroup.position.set(25, 65, 10);  //// POSITIONS THE PONYTAIL ON HEAD
//    ponytailGroup.position.set(6.25, 16.25, 2.5);  //// POSITIONS THE PONYTAIL ON HEAD
//    ponytailGroup.position.set(6.25, 14.85, 2.5);  //// POSITIONS THE PONYTAIL ON HEAD
    ponytailGroup.position.set(6.25, 15.05, 2.5);  //// POSITIONS THE PONYTAIL ON HEAD
//    opts.scene.add(ponytailGroup);

    // BUILD PONYTAIL PENDULUM-CHAIN STARTING HERE /////

    var hair_geometry = new THREE.CubeGeometry( 2, 2, 2 );
    var material = new THREE.MeshPhongMaterial( { color: 0x000000} )
//    var material = new THREE.MeshPhongMaterial( { color: 0x444444} )
    var material_no_see = new THREE.MeshBasicMaterial( { visible:false} )
//    var material_no_see = new THREE.MeshBasicMaterial( { color: 0x555555} )

    //////// THE TREADMILL STARTS -->   --->
    /////   FIRST COMES PENDULUM_0:

    pendulum_0 = new THREE.Object3D();
    cube0 = new THREE.Mesh( hair_geometry, material );
//    cube0.scale.set(4, 6, 4);
    cube0.scale.set(1, 1.5, 1);
    pendulum_0.add( cube0 );
    pendulum_0.position.set(0, 0, 0);
    ponytailGroup.add(pendulum_0);
    opts.scene.add(ponytailGroup);
    spacer = -1.25;


    //////// TREADMILL CONTINUES -->  --->  ------>
    /////    THEN PENDULUM_1

    pendulum_1 = new THREE.Object3D();
    cube1 = new THREE.Mesh( hair_geometry, material_no_see );
//    cube1.scale.set(4, 4, 4);
    pendulum_1.add( cube1 );
    pendulum_1.position.set(0, spacer, 0); 
    pendulum_0.add(pendulum_1);
    spacer += -2.5;

    /////////////
    //////// TREADMILL CONTINUES -->  --->  ------>
    /////      PENDULUM_2:

    pendulum_2 = new THREE.Object3D();
    cube2 = new THREE.Mesh( hair_geometry, material_no_see );
//    cube2.scale.set(4, 4, 4);
    pendulum_2.add( cube2 );
    pendulum_2.position.set(0, spacer, 0); 
    pendulum_1.add(pendulum_2);

    spacer += -2.5;

    //////// TREADMILL CONTINUES  -->   --->  ------> ------>
    /////      NUMERO THREENESS:

    pendulum_3 = new THREE.Object3D();
    cube3 = new THREE.Mesh( hair_geometry, material_no_see ); 
//    cube3.scale.set(4, 4, 4);
    pendulum_3.add( cube3 );
    pendulum_3.position.set(0, spacer, 0); 
    pendulum_2.add(pendulum_3);

    //   spacer += -15;

    //////// TREADMILL CONTINUES  -->   --->  ------> ------>
    /////      NUMERO FOURNESS:

    pendulum_4 = new THREE.Object3D();
    cube4 = new THREE.Mesh( hair_geometry, material_no_see ); 
//    cube4.scale.set(4, 4, 4);
    pendulum_4.add( cube4 );
    pendulum_4.position.set(0, spacer, 0); 
    pendulum_3.add(pendulum_4);

    //   spacer += -15;

    /////  AND THIS FINAL BUGGER GOES ON THE LAST LINK FOR LAUGHS
    cube5 = new THREE.Mesh( hair_geometry, material_no_see );
//    cube5.scale.set(4, 4, 4);
    cube5.position.set(0, spacer, 0);   
    pendulum_4.add( cube5 );


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
        gravity=80;
        hair_damp=10;
        stiffness=64;
        air_push= 0.1;
        is_top=1;  // attaches the next swinger to the head (or whatever)
        pendulum_00_rotation_z=2.8;  // makes ponytail jut out

        if (skeleton)
            head_total_rot.z = (skeleton.bones[2].rotation.z + skeleton.bones[1].rotation.z + skeleton.bones[0].rotation.z);

        swinger(pend0, pendulum_0, 0, 0);
        swinger(pend1, pendulum_1, (cube1).localToWorld(new THREE.Vector3(0, 0, 0)).x, -1*(cube1).localToWorld(new THREE.Vector3(0, 0, 0)).z);
        swinger(pend2, pendulum_2, (cube2).localToWorld(new THREE.Vector3(0, 0, 0)).x, -1*(cube2).localToWorld(new THREE.Vector3(0, 0, 0)).z);
        swinger(pend3, pendulum_3, (cube3).localToWorld(new THREE.Vector3(0, 0, 0)).x, -1*(cube3).localToWorld(new THREE.Vector3(0, 0, 0)).z);
        swinger(pend4, pendulum_4, (cube4).localToWorld(new THREE.Vector3(0, 0, 0)).x, -1*(cube4).localToWorld(new THREE.Vector3(0, 0, 0)).z);

// not necessary to set bone 0 pos every time
//        ponytail.skeleton.bones[0].position.x = cube1.position.x;
 //       ponytail.skeleton.bones[0].position.y = cube1.position.y;
   //     ponytail.skeleton.bones[0].position.z = cube1.position.z;
//        ponytail.skeleton.bones[0].position.x = (cube1).localToWorld(new THREE.Vector3(0, 0, 0)).x;
  //      ponytail.skeleton.bones[0].position.y = (cube1).localToWorld(new THREE.Vector3(0, 0, 0)).y;
    //    ponytail.skeleton.bones[0].position.z = (cube1).localToWorld(new THREE.Vector3(0, 0, 0)).z;
        ponytail.skeleton.bones[0].rotation.x = (pend0.rotation.x);
        //ponytail.skeleton.bones[0].rotation.y = pend0.rotation.y;
        ponytail.skeleton.bones[0].rotation.z = (pend0.rotation.z) + head_total_rot.z;
        ponytail.skeleton.bones[1].rotation.x = (pend1.rotation.x - pend0.rotation.x);
        //ponytail.skeleton.bones[1].rotation.y = pend1.rotation.y;
        ponytail.skeleton.bones[1].rotation.z = (pend1.rotation.z - pend0.rotation.z);
        ponytail.skeleton.bones[2].rotation.x = (pend2.rotation.x - pend1.rotation.x - pend0.rotation.x);
        //ponytail.skeleton.bones[2].rotation.y = pend2.rotation.y;
        ponytail.skeleton.bones[2].rotation.z = (pend2.rotation.z - pend1.rotation.z - pend0.rotation.z);
        ponytail.skeleton.bones[3].rotation.x = (pend3.rotation.x - pend2.rotation.x - pend1.rotation.x - pend0.rotation.x);
        //ponytail.skeleton.bones[3].rotation.y = pend3.rotation.y;
        ponytail.skeleton.bones[3].rotation.z = (pend3.rotation.z - pend2.rotation.z - pend1.rotation.z - pend0.rotation.z);
        ponytail.skeleton.bones[4].rotation.x = (pend4.rotation.x - pend3.rotation.x - pend2.rotation.x - pend1.rotation.x - pend0.rotation.x);
        //ponytail.skeleton.bones[4].rotation.y = pend4.rotation.y;
        ponytail.skeleton.bones[4].rotation.z = (pend4.rotation.z - pend3.rotation.z - pend2.rotation.z - pend1.rotation.z - pend0.rotation.z);

//        if(hairNew){
  //          hairNew.morphTargetInfluences[1]= 2*(pend1.rotation.x);
    //        hairNew.morphTargetInfluences[2]= 1;
      //  }
	};

	//
	// call iterator and return data object
	//

    // thringz gets updated asyncronously (for ponytail)
    thringz.push(hairGroup);
    thringz.push(ponytailGroup);

	return {
		name: "pony",
		tick: ticker,
        thrings: thringz
	};
};