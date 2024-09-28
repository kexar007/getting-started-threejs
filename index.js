import * as THREE from 'three';


const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement)



const fov=75;
const aspect=w/h;
const near=0.1;
const far=100;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z= 40;


const scene = new THREE.Scene() 



const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial({
    color: 'gold', /* wireframe:true */
});

const torus = new THREE.Mesh(geometry,material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(25,25,25);
const ambientLight = new THREE.AmbientLight(0xffffff);


scene.add(pointLight,ambientLight);



function animate(){
  requestAnimationFrame(animate);
    torus.rotation.x+= 0.02;
    torus.rotation.y+= 0.001;
    torus.rotation.z+= 0.003;




  renderer.render(scene,camera);
}

animate() 