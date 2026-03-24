// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.z = 3;

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // activar sombras
document.body.appendChild(renderer.domElement);

// Luces
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
light.castShadow = true; // que proyecte sombras
scene.add(light);

const ambient = new THREE.AmbientLight(0x404040, 0.6); // luz ambiental suave
scene.add(ambient);

// Plano con textura del escudo
const textureLoader = new THREE.TextureLoader();
const escudoTexture = textureLoader.load('escudo.png');
const material = new THREE.MeshPhongMaterial({ map: escudoTexture });
const geometry = new THREE.PlaneGeometry(2, 2.5);
const escudo = new THREE.Mesh(geometry, material);
escudo.castShadow = true; // que proyecte sombra
escudo.receiveShadow = true; // que reciba sombra
scene.add(escudo);

// Animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Ajustar al tamaño de la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
