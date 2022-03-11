// console.log(THREE);

// Create Scene
const scene = new THREE.Scene()

// Create a visible Object = Mesh

// Step1: create geometry (width, height, depth)
const geometry = new THREE.BoxGeometry(1, 1, 1)

// Step 2:  create material
const material = new THREE.MeshBasicMaterial({color: 0xff0000})

// Step 3: Create the mesh
const mesh = new THREE.Mesh(geometry, material)

// Step 4: Add the mesh to the screen
scene.add(mesh)

// Step 5: Create the camera (Perspective- far away objects are smaller); Parameters: (vertical field of view in degrees, aspect ratio - width divided by the size of the render(800 x600))
const sizes = {
    width: 800,
    height: 600
}
// create camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
// move camera backwards
camera.position.z = 3
// camera.position.x = 2
// camera.position.y = 0

scene.add(camera)

// Step 6: Add a Renderer ( A render of your scene through the cameras point of view and drawn to the canvas)
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas,
})

// Step 7: Size the Renderer
renderer.setSize(sizes.width, sizes.height)

// Render your scene
renderer.render(scene, camera)

