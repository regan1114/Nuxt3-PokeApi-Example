<template>
  <div class="min-h-screen flex flex-col bg-primary-900 text-primary-300">
    <nav
      class="bg-black bg-opacity-10 border-b border-primary-800 border-opacity-50 px-5"
    >
      <div
        class="w-full max-w-[1280px] mx-auto flex items-center justify-between h-10"
      >
        <nuxt-link to="/" class="flex items-center">
          <div class="relative">
            <img class="w-50" src="@/assets/image/logo.svg" alt="Logo" />
          </div>
        </nuxt-link>
        <div class="flex items-center gap-4">
          <a
            class="hover:text-amber-600"
            aria-label="Github Repository"
            target="_blank"
            href="https://github.com/regan1114/Nuxt3-PokeApi-Example"
          >
            <Icon size="40" name="mdi:github" />
          </a>
        </div>
      </div>
    </nav>
    <div class="wrapper mb-10 h-full flex-1 w-full max-w-[1280px] mx-auto">
      <main>
        <slot />
      </main>
    </div>
    <footer
      class="text-center py-2 px-4 bg-black bg-opacity-10 border-t border-primary-800 border-opacity-50 text-xs flex flex-col md:flex-row items-center justify-between gap-2"
    >
      <div></div>
      <div class="flex items-center gap-2">
        <div>Made with</div>
        <div class="relative">
          <Icon name="twemoji:red-heart" />
        </div>
        <div>
          by
          <a class="text-bold hover:underline" target="_blank">Regan</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "LayoutDefault",
};
</script>

<script setup lang="ts">
const router = useRouter();

const navigation = computed(() => {
  const routes = router.getRoutes();
  const formatRoutes = routes
    .filter((route) => route.path.startsWith("/examples/"))
    .map((obj) => {
      return {
        path: obj.path,
        name: obj.name,
        meta: obj.meta,
      };
    });
  const buildNavigation = {};
  formatRoutes.forEach((route) => {
    const splitRoute = route.path.replace("/examples/", "").split("/");
    const category = splitRoute[0];
  });
  return buildNavigation;
});

const expandedFolders = reactive<{ data: string[] }>({ data: [] });

const onToggleFolder = (category: string) => {
  if (!expandedFolders.data.includes(category)) {
    expandedFolders.data.push(category);
  } else {
    expandedFolders.data = expandedFolders.data.filter(
      (folder) => folder !== category
    );
  }
};

onMounted(() => {
  const firstCategory = Object.keys(navigation.value)[0];
  // Expand first category by default
  expandedFolders.data.push(firstCategory);
});
</script>
