<template lang="pug">
  .home
    div
      select(@change="onSelectPossibleOption")
        option(
          v-for="option in possibleOptions"
          :disabled="selectedOptions.includes(option)"
        ) {{option}}
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {}
  })
  export default class Home extends Vue {
    possibleOptions: Array<string> = [
      'side1',
      'side2',
      'side3',
      'angleOppositeToSide1',
      'angleOppositeToSide2',
      'angleOppositeToSide3',
    ]
    selectedOptions: Array<string> = []


    onSelectPossibleOption(event: Event): void {
      const value = (<HTMLInputElement>event.currentTarget).value;
      (<HTMLInputElement>event.currentTarget).value = '';
      if (!this.selectedOptions.includes(value)) {
        this.selectedOptions.push(value)
      }
    }
  }
</script>
