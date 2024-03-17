<template>
    <!-- <div class=""> -->
    <CustomCursor />
    <Header />

    <!-- Contenu de la page -->
    <slot />

    <Footer />
    <!-- </div> -->
</template>


<style>
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
    position: fixed;
    z-index: -100000;
    top: 0;
    left: 0;
    right: 0;
    transition: all 1s linear;
}

.page-left-enter-from,
.page-right-leave-to {
    transform: translateY(100%);
}

.page-left-leave-to,
.page-right-enter-from {
    transform: translateY(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
    transform: translateY(0);
}
</style>