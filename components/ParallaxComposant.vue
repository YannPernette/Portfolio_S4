<script>
// import particlesJS from 'particles.js'
export default {
    mounted() {
        var parallax = document.getElementById('parallax');
        var parallaxInstance = new Parallax(parallax, {
            invertX: true,
            invertY: true,
            scalarX: 8,
            scalarY: 8,
            frictionY: 0.1
        });



        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 120,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

    }
}

</script>





<template>
    <div class="fixed inset-x-0">
        <div id="parallax">

            <div class="layer mt-36" data-depth="0.6">

                <div class="some-space">
                    <h1 class="titreParallax font-orbitron tracking-widest uppercase text-5xl">Yann Pernette</h1>
                    <h2 class="sousTitreParallax font-electrolize text-2xl mt-4 mb-72">Étudiant en BUT MMI parcours développement
                    </h2>
                </div>

            </div>

            <div class="layer">
            <!-- <div class="layer" data-depth="0.5"> VERSION ALTERNATIVE AVEC LES PARTICULES QUI BOUGENT AVEC LA SOURIS -->
                <div id="particles-js"></div>
            </div>

            <div class="layer mt-44" data-depth="0.4">
                <div class="some-more-space">
                    <a class="boutonParallax" href="https://codepen.io/dominickolbe">Découvrir mon travail</a>
                </div>
            </div>

        </div>
    </div>
</template>