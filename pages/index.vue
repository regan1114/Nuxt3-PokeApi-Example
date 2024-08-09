<template>
  <div class="flex-1 w-full h-full flex items-center justify-center p-4">
    <div
      class="w-full overflow-hidden bg-black text-primary-100 bg-opacity-10 border border-primary-800 border-opacity-50 text-center rounded-lg"
    >
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <PokemonCard
          v-for="item in infos"
          :key="item.name"
          :poke="sortPokemonData(item)"
          :width="200"
          :height="200"
          @click="openDialog(item)"
        />
      </div>
      <PaginationItem
        :pageIndex="pageIndex"
        :pageTotal="total"
        @firstPage="firstPageEvent"
        @previousPage="previousPageEvent"
        @nextPage="nextPageEvent"
        @endPage="endPageEvent"
      ></PaginationItem>
    </div>
    <PokemonDialog
      :key="pokemonID"
      :url-string="pokemonUrl"
      :open="open"
      @update-open="updateOpen"
    />
  </div>
</template>

<script setup lang="ts">
import type { PokemonApiInfo, PokemonApiResult } from "~/models";
const pageSize = 12;
let pageIndex = ref(1);
const open = ref(false);
const pokemonID = ref("");
const pokemonUrl = ref("");
const url = computed(
  () =>
    `/api/pokemonJsonData?begin=${
      pageIndex.value <= 0 ? 0 : (pageIndex.value - 1) * pageSize
    }&end=${pageSize * (pageIndex.value <= 0 ? 1 : pageIndex.value)}`
);

const { data: pokeApi } = useFetch(url);

const pokemonInfos = computed(() => pokeApi.value as PokemonApiInfo);

const infos = computed(() =>
  pokeApi.value ? pokemonInfos.value.results : null
);
const total = computed(() =>
  pokeApi.value ? Math.ceil(pokemonInfos.value.count / pageSize) : 0
);

const sortPokemonData = (item: PokemonApiResult) => {
  let pokeURL = item.url.slice(0, -1);
  const founds = pokeURL.split("/");
  const pokeID = founds.pop() || "";
  item.cover = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;
  item.id = pokeID;
  return item;
};
const firstPageEvent = () => {
  pageIndex.value = 1;
};
const previousPageEvent = (value: number) => {
  pageIndex.value = !value ? 1 : value;
};
const nextPageEvent = (value: number) => {
  pageIndex.value = value >= total.value ? total.value : value;
};
const endPageEvent = () => {
  pageIndex.value = total.value;
};

const openDialog = (poke: PokemonApiResult) => {
  pokemonUrl.value = poke.url;
  pokemonID.value = poke.id;
  open.value = true;
};

const updateOpen = (Value: boolean) => {
  open.value = Value;
};
</script>
