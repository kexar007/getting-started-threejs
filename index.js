import * as THREE from 'three';


const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(w,h);
document.body.appendChild(renderer.domElement)



fov=75;
aspect=w/h;
near=0.1;
far=1000;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z= 3;


const scene = new THREE.Scene()

renderer.render(scene,camera)