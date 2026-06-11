import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth /  window.innerHeight,0.1,1000);

// 渲染器尺寸适配容器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement)

// 立方体
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry,material);
scene.add(cube)

// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

camera.position.z = 5;


const menuItems = document.querySelectorAll('.menu-item');
let isRotate = true;

menuItems[0].addEventListener('click', () => {
  alert("切换模型")
})

menuItems[1].addEventListener('click', () => {
  material.color.set(Math.random() * 0xffffff)
})

menuItems[2].addEventListener('click', () => {
  isRotate = !isRotate
})

menuItems[3].addEventListener('click', () => {
  controls.reset() // 重置相机视角
})

// 动画循环
function animate(){
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene,camera);
}
animate()

// 窗口自适应
window.addEventListener('resize',() => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth,window.innerHeight);
})

