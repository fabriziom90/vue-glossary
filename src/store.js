import { reactive } from 'vue';
import definitionsJson from './data/definitions.json';

export const store = reactive({
    definitions: definitionsJson,
    filterType: 'all'
});