import * as THREE from 'three';
import { OrbitControls } from "jsm/controls/OrbitControls.js";



const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement)



const fov=75;
const aspect=w/h;
const near=0.1;
const far=1000;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z= 40;


const scene = new THREE.Scene() 



const geometry = new THREE.TorusGeometry(15,4,16,50);
const material = new THREE.MeshStandardMaterial({
    color: 'orange',  /* wireframe:true */ 
});

const torus = new THREE.Mesh(geometry,material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10,20,5);
const ambientLight = new THREE.AmbientLight(0xffffff);
const pointLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(pointLight,/* ambientLight */pointLightHelper);

const gridhelper = new THREE.GridHelper(100,50);
scene.add(gridhelper);

const controls= new OrbitControls(camera,renderer.domElement);



//function to add stars

function addstars(){
    const geometry= new THREE.SphereGeometry(0.25,24,24);
    const material= new THREE.MeshBasicMaterial({color:0xffffff});
    const star = new THREE.Mesh(geometry,material);
    const[x,y,z]=Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(300));
    star.position.set(x,y,z);
   scene.add(star);
}
Array(300).fill().forEach(addstars);

//adding space bg
const spacetexture= new THREE.TextureLoader().load("space.png");
scene.background=spacetexture;
// add avatar 
const jefftexture = new THREE.TextureLoader().load('jeff.jpg');
const jeff = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({map:jefftexture})
);
scene.add(jeff);

function animate(){
  requestAnimationFrame(animate);
    torus.rotation.x+= 0.01;
    torus.rotation.y+= 0.03;
   // torus.rotation.z+= 0.003;
   //controls.update();




  renderer.render(scene,camera);
}

animate() 