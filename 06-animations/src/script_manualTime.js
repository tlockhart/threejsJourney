import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// TIme
let time = Date.now()

// Animations
const gameLoop =() => {

    // TIme
    const currentTime = Date.now()
    // console.log("Time:", time)

    const deltaTime = currentTime -time
    
    // update the reference time
    time = currentTime

    console.log("Delta:", deltaTime);

    /*************ANIMATIONS*****************
     ****************************************/
    // Translate Object
    // mesh.position.x += 0.01 * deltaTime

    // Rotate Object
    mesh.rotation.y += 0.002 * deltaTime

    /****************************************/

    // console.log('tick');

    // pass the function into requestAnimationFrame
    window.requestAnimationFrame(gameLoop)

    // Render
    renderer.render(scene, camera)

}

// GameLoop must be called at least once, because the requestAnimationFrame is called on the next frame by the requestAnimationFrame.  So the first call to gameLoop initiates the requestAnimationFrame.

gameLoop()