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

// Clock
const clock = new THREE.Clock()


// Animations
const gameLoop =() => {

    // Clock
    const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)

    /*************ANIMATIONS*****************
     ****************************************/
    // Translate Object
    // mesh.position.x = elapsedTime

    // Rotate Object
    // mesh.rotation.y = elapsedTime * Math.PI * 2

    // Bounce Effect Starting at Crest:
    // mesh.position.y = Math.cos(elapsedTime)

    // Bounce Effect Starting at 0:
    // mesh.position.y = Math.sin(elapsedTime)

    // Circle Effect:
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    // Camera Effect:
    camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime)

    // tell camera to look at cube
    camera.lookAt(mesh.position)

    /****************************************/

    // console.log('tick');

    // pass the function into requestAnimationFrame
    window.requestAnimationFrame(gameLoop)

    // Render
    renderer.render(scene, camera)

}

// GameLoop must be called at least once, because the requestAnimationFrame is called on the next frame by the requestAnimationFrame.  So the first call to gameLoop initiates the requestAnimationFrame.

gameLoop()