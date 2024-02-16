<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { AxesHelper, BoxGeometry, Color, Mesh, MeshBasicMaterial, MeshLambertMaterial, PerspectiveCamera, PlaneGeometry, Scene, SphereGeometry, SpotLight, WebGLRenderer } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const container = ref<HTMLDivElement>();
const scene = new Scene();

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(20, 60, 100);
camera.lookAt(scene.position);

const renderer = new WebGLRenderer();
renderer.setClearColor(new Color('#ffc0cb'));
renderer.shadowMap.enabled = true;

const light = new SpotLight('hotpink');
light.castShadow = true;
light.position.set(0, 100, 0);
scene.add(light);

const axes = new AxesHelper(20);
scene.add(axes);

const plane = new Mesh(
    new PlaneGeometry(200, 100),
    new MeshBasicMaterial({ color: 'gray' })
);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);

/*
const sphereGeometry = new SphereGeometry(20);
const sphere = new Mesh(sphereGeometry, new MeshLambertMaterial({ color: 'purple' }));
sphere.position.set(30, 20, -5);
sphere.castShadow = true;
scene.add(sphere);

const boxGeometry = new BoxGeometry(30, 20, 10);
const box = new Mesh(boxGeometry, new MeshLambertMaterial({ color: 'skyblue' }));
box.position.set(-15, 10, -5);
box.castShadow = true;
scene.add(box);
*/

const loader = new GLTFLoader();

loader.load('/models/crown.glb', function (gltf) {

    scene.add(gltf.scene);

}, undefined, function (error) {

    console.error(error);

});

onMounted(() => {
    if (!container.value) { return }
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
    container.value!.appendChild(renderer.domElement);
    renderer.render(scene, camera);
});

</script>

<template>
    <div ref="container" class="container"></div>
</template>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100px;
}
</style>