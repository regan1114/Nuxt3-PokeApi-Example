<script setup lang="ts">
import {
  DoubleArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowRightIcon,
} from "@radix-icons/vue";

interface PaginationItemProp {
  pageIndex: number;
  pageTotal: number;
}
withDefaults(defineProps<PaginationItemProp>(), {});
const emit = defineEmits(["firstPage", "previousPage", "nextPage", "endPage"]);
const firstPageEvent = () => {
  emit("firstPage");
};
const previousPageEvent = (value: number) => {
  emit("previousPage", value);
};
const nextPageEvent = (value: number) => {
  emit("nextPage", value);
};

const endPageEvent = () => {
  emit("endPage");
};
</script>
<template>
  <div class="flex items-center justify-between p-4">
    <div class="flex-1 text-sm text-muted-foreground"></div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div
        class="flex w-[100px] items-center justify-center text-sm font-medium"
      >
        Page {{ pageIndex }} of {{ pageTotal }}
      </div>
      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          class="hidden h-8 w-8 p-0 lg:flex"
          @click="firstPageEvent"
        >
          <span class="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="h-8 w-8 p-0"
          @click="previousPageEvent(pageIndex - 1)"
        >
          <span class="sr-only">Go to previous page</span>
          <ChevronLeftIcon class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="h-8 w-8 p-0"
          @click="nextPageEvent(pageIndex + 1)"
        >
          <span class="sr-only">Go to next page</span>
          <ChevronRightIcon class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="hidden h-8 w-8 p-0 lg:flex"
          @click="endPageEvent()"
        >
          <span class="sr-only">Go to last page</span>
          <DoubleArrowRightIcon class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</template>
