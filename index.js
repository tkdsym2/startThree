(function() {
    //template
    var scene = new THREE.Scene();
    var aspect = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    //renderer template
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xeeeeee, 1);
    renderer.shadowMapEnabled = true; //shadow
    document.body.appendChild(renderer.domElement);
    //camera
    camera.position.set(1, 1, 7);


    //helper
    var axis = new THREE.AxisHelper(1000);
    axis.position.set(0, 0, 0);
    scene.add(axis);

    //light
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    light.castShadow = true;
    scene.add(light);
    var ambient = new THREE.AmbientLight(0x111111);
    scene.add(ambient);

    //ground
    var groundG = new THREE.PlaneGeometry(300, 300);
    var groundM = new THREE.MeshLambertMaterial({
        color: 0xeeeeee,
        side: THREE.DoubleSide
    });
    var ground = new THREE.Mesh(groundG, groundM);
    ground.receiveShadow = true; //shadow
    ground.position.set(0, -2.5, 0);
    ground.rotation.x = 90 * Math.PI / 180; //rotate
    scene.add(ground);


    //group & mesh
    var mesh1, mesh2, mesh3;
    var group = new THREE.Group();

    //mesh
    var geometry1 = new THREE.OctahedronGeometry(1.5, 0);
    var material1 = new THREE.MeshLambertMaterial({
        color: 0xff0000
    });
    //var material = new THREE.MeshNormalMaterial();
    mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.castShadow = true;
    mesh1.position.set(0, 0, 0);

    var geometry2 = new THREE.TorusGeometry(1.9, 0.1, 20, 500);
    var material2 = new THREE.MeshLambertMaterial({
        color: 0x00ff00
    });
    //var material = new THREE.MeshNormalMaterial();
    mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.castShadow = true;
    mesh2.position.set(0, 0, 0);
    mesh2.rotation.x = 90 * Math.PI / 180; //rotate

    var geometry3 = new THREE.TorusGeometry(2.3, 0.1, 20, 500);
    var material3 = new THREE.MeshLambertMaterial({
        color: 0x0000ff
    });
    //var material = new THREE.MeshNormalMaterial();
    mesh3 = new THREE.Mesh(geometry3, material3);
    mesh3.castShadow = true;
    mesh3.position.set(0, 0, 0);
    mesh3.rotation.x = 90 * Math.PI / 180; //rotate

    //group add
    group.add(mesh1);
    group.add(mesh2);
    group.add(mesh3);
    scene.add(group);

    var render = function() {
        requestAnimationFrame(render);
        mesh1.rotation.x += 0.01;
        mesh1.rotation.y += 0.01;
        mesh2.rotation.x += 0.01;
        mesh2.rotation.y += 0.01;
        mesh2.rotation.z += 0.01;
        mesh3.rotation.x -= 0.01;
        mesh3.rotation.y -= 0.01;
        mesh3.rotation.z -= 0.01;

        renderer.render(scene, camera);
    };

    //render!
    render();
})();
