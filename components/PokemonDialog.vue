<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Radar } from "vue-chartjs";

import type { PokemonInfo } from "~/models";

import { Bold, Italic, Underline } from "lucide-vue-next";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

ChartJS.register(RadialLinearScale, PointElement, LineElement);

const attributesColors = {
  normal: `#a0a0a0`,
  grass: `#92bf19`,
  poison: `#be78be`,
  fire: `#ff3700`,
  flying: `#79bcd7`,
  water: `#0094e5`,
  bug: `#32b432`,
  dark: `#646464`,
  dragon: `#3c64c8`,
  electric: `#e4b700`,
  psychic: `#dc78c8`,
  ground: `#cca142`,
  ice: `#00b7ee`,
  steel: `#96b4dc`,
  fairy: `#ff7eb8`,
  fighting: `#c85500`,
  rock: `#a07850`,
  ghost: `#8c78f0`,
} as { [key: string]: string };

interface PokemonDialogProp {
  open: boolean;
  urlString: string;
}
const props = defineProps<PokemonDialogProp>();

const pokemonDataUrl = ref(props.urlString);

const emit = defineEmits(["updateOpen"]);
const updateOpen = () => {
  emit("updateOpen", false);
};

const getPokemonData = async (url: string) => {
  return await useFetch(() => url);
};

const { data: pokemonData } = await getPokemonData(pokemonDataUrl.value);
const info = pokemonData.value as PokemonInfo;

const statName = (info && info.stats.map((x) => x.stat.name)) || [];
const baseStat = (info && info.stats.map((x) => x.base_stat)) || [];

const types = (info && info.types.map((x) => x.type.name)) || [];
const data = {
  labels: statName,
  datasets: [
    {
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: baseStat,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      min: 0,
    },
  },
};
const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
</script>

<template>
  <Dialog :open="open" @update:open="updateOpen">
    <DialogContent class="w-full sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{{ info.name }}</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        <div class="grid gap-4 py-4 pt-0 pb-0" v-if="info">
          <div class="grid grid-cols-2 items-center gap-4">
            <div class="overflow-hidden rounded-md">
              <img
                :src="info.sprites.front_default"
                :alt="info.name"
                :width="200"
                :height="200"
              />
            </div>
            <div class="grid items-center gap-4">
              <div>Attributes :</div>
              <ToggleGroup type="multiple">
                <ToggleGroupItem
                  value="bold"
                  aria-label="Toggle bold"
                  :style="`background-color: ${attributesColors[type]};`"
                  v-for="type in types"
                >
                  <span style="color: white">{{
                    capitalizeFirstLetter(type)
                  }}</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div class="grid items-center gap-4">
            <Radar :data="data" :options="options" />
          </div>
        </div>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>
