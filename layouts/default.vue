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
    transition: all 0.6s cubic-bezier(.33, -0.02, .64, .96);
}

.page-up-enter-from {
    transform: translateY(100%);
    z-index: 100000;
}

.page-up-enter-to {
    transform: translateY(0);
}

.page-blur-enter-from,
.page-blur-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>