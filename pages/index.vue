<template>
  <v-app>
    <v-layout>
      <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
          <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Title</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon icon="mdi-magnify"></v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon icon="mdi-heart"></v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon icon="mdi-dots-vertical"></v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-card title="Nuxt App ">
            <v-card-text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, et eaque tenetur laudantium cumque
              molestias
              commodi perspiciatis earum quibusdam. Vero nulla ea voluptates totam porro hic officiis aliquid modi id.
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
