<script>
import FilterSection from './FilterSection.vue';
import DefinitionsSection from './DefinitionsSection.vue';

import { store } from '../store.js';

export default {
    components:{
        FilterSection,
        DefinitionsSection
    },
    data(){
        return{
            store
        }
    },
    methods:{
        filter_by_type(type){
            store.filterType = type;
        },
        getFilms(){
            axios.get('URL_FILMS').then((result) => {
                this.films = result.data.films;

                films.forEach((film) => {
                    axios.get('URL_CAST_FILM'+film.id).then((response) => {
                        film.cast = response.data.cast
                    });
                });
            });
        }
    },
    computed:{

        filteredDefinitions(){
            
            let filterDefinitions = [];
            // se entrambe le variabili searchDef non è vuota e filterType è uguale ad all
            if(store.searchDef != '' && store.filterType == 'all'){

                // ciclo l'array delle definizioni
                store.definitions.forEach((item) => {
                    
                    // creo un nuovo oggetto con le proprietà id, type e defs. Queto oggetto, rappresenta l'oggetto della sezione
                    let obj = {
                        id: item.id,
                        type: item.type,
                        defs: []
                    }
                    
                    //dell'elemento che sto ciclando attualmente, ovvero della singola sezione, ne ciclo l'array delle definizioni
                    item.defs.forEach( (def) => {
                        // se il nome della definizione include quello che ho scritto
                        if(def.name.toLowerCase().includes(store.searchDef.toLowerCase())){
                            obj.defs.push(def);
                            
                            filterDefinitions.push(obj);       
                        }
                    })
                })
                
                
                return filterDefinitions;
            }
            else if(store.filterType != 'all' && store.searchDef == ''){
                filterDefinitions = store.definitions.filter((item) => {
                    return item.type === store.filterType
                })
                
                return filterDefinitions;
            }
            else{
                return store.definitions;
            }
        }
    }
}
</script>
<template lang="">
    <main class="py-30">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="bg-white mt-5 p-4">
                        <h1 class="text-center fontsize-50">BoolGlossary</h1>

                        <div class="my-4">
                            <h2>Il glossario ufficiale di classe 129 di Boolean!</h2>
                            <p>
                                Il glossario della classe 129 di Boolean. Giorno per giorno, lezione dopo lezione, lo
                                aggiorneremo
                                andando
                                anche a stilizzarlo nei colori, nelle forme e nello stile in generale. Vi servira come
                                live
                                coding
                                integrativo.
                            </p>
                        </div>
                        <div class="card" v-for="film, index in films">
                            <ul>
                                <li v-for="cast in casts[index]"></li>
                            </ul>
                        </div>
                        <div class="my-4">
                            <h2>Punti centrali del glossario</h2>
                            <ul class="list-unstyled">
                                <li class="my-3">Verrà aggiornato quasi tutti i giorni <span
                                        class="label bg-green">Aggiornamento</span>
                                </li>
                                <li class="my-3">Implementeremo quello che vedremo in alcune
                                    lezioni
                                    anche quì oltre che sui live coding specifici <span
                                        class="label bg-blue">Pratica</span>
                                </li>
                                <li class="my-3">Mano a mano che andremo avanti nel corso
                                    aggiungeremo funzionalità varie <span class="label bg-green">Funzionalità</span>
                                </li>
                            </ul>
                        </div>
                        <div id="glossary">
                            <h2>Glossario</h2>
                        </div>
                        <!-- SEZIONE FILTRI -->
                        <FilterSection @filter_by_type="filter_by_type"/>
                        <!-- SEZIONE DELLE DEFINIZIONI: ciclo le sezioni: common, html, css, javascript, git, vuejs, vite -->
                        <DefinitionsSection v-for="section in filteredDefinitions" :key="section.id" :section="section"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h3 {
    margin: 30px 0;
}

li::before {
    content: '\2714';
    font-size: 20px;
    padding: 5px 7px;
    margin-right: 10px;
    border: 1px solid $primary_color;
    border-radius: 50%;
}

.fontsize-50 {
    font-size: 50px;
}

.label {
    font-size: 15px;
    color: #fff;
    padding: 5px 20px;
    border-radius: 10px;
}

.bg-green {
    background-color: $secondary_color;
}

.bg-blue {
    background-color: $primary_color;
}
</style>