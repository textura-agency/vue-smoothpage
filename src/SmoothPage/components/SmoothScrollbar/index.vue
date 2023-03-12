<template>
    <div class="t-smoothpage--scrollbar">
    </div>
</template>

<script lang="ts" setup>
import type { SmoothPageSettings } from '../../interfaces/settings.interface'
import type { PrivateStore } from '../../interfaces/store.interface';

const props = defineProps<{
    settings: SmoothPageSettings,
    store: PrivateStore
}>()
</script>

<style src="./index.css"></style>