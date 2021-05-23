<template>
    <section>
        <h5>Главная</h5>
        <p @click="$router.push('/catalog')" class="sv-text-l" style="cursor: pointer"><u>В каталог ></u></p>
    </section>
</template>

<script>
export default {
    name: 'HomePageView'
}
</script>