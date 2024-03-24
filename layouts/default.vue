<template>
    <!-- <div class=""> -->
    <CustomCursor class="md:hidden" />
    <Header />

    <!-- Contenu de la page -->
    <slot />

    <Footer />
    <!-- </div> -->
</template>


<style>
.page-up-enter-active,
.page-blur-enter-active,
.page-up-leave-active,
.page-blur-leave-active {
    /* position: fixed; */
    /* z-index: -100000; */
    /* top: 0;
    left: 0;
    right: 0; */
    width: 100%;
    transition: all 0.6s cubic-bezier(.5, .81, .82, .08);
}

.page-up-enter-active,
.page-up-leave-active {
    position: fixed;
}

.page-up-enter-from {
    transform: translateY(100%);
    z-index: 3000;
}

.page-up-enter-to,
.page-up-leave-to {
    transform: translateY(0);
    z-index: 2000;
}

.page-up-leave-from {
    z-index: 1000;
}

.page-blur-enter-from,
.page-blur-leave-to {
    z-index: 1000;
    opacity: 0;
    filter: blur(1rem);
}
</style>