<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PokemonApiResult } from "~/models";

interface PokemonCardProps {
  poke: PokemonApiResult;
  width?: number;
  height?: number;
}
withDefaults(defineProps<PokemonCardProps>(), {});
</script>

<template>
  <div :class="cn('space-y-3', $attrs.class ?? '')">
    <Card :class="`w-[${width}px]`">
      <CardContent class="pb-0">
        <div class="overflow-hidden rounded-md">
          <img
            :src="poke.cover"
            :alt="poke.name"
            :width="width"
            :height="height"
          />
        </div>
      </CardContent>
      <CardFooter class="flex justify-between px-6">
        <div class="w-full">
          <Badge variant="destructive">{{ `#${poke.id}` }}</Badge>
          {{ `${poke.name}` }}
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
