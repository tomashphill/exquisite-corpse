<template>
    <div id="incompleted-corpses">
        <ul id="incompleted-corpses-list">
            <li v-for="corpse in incompleteCorpses" :key="corpse.corpse_name">
                <a class="corpse-name" :title="corpse.desc" @click="goToCorpseCreator(corpse)">{{ corpse.corpse_name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>

// getIncompleteCorpses :: () -> Promise<[{corpse_name: string, stage: string}]>
function getIncompleteCorpses () {
    let stageDesc = {
        2: " needs a body...",
        3: " needs legs..."
    }

    let url = process.env.VUE_APP_CORPSE_API_URL + "random_incomplete_corpses/" + this.NUM_TO_SHOW
    fetch(url)
        .then(r => r.json())
        .then(d => {
            d.forEach((corpse) => {
                corpse.desc = corpse.corpse_name + stageDesc[corpse.stage]
            })
            this.incompleteCorpses = d
        })
}

// getNumberOfCompletedCorpses :: () -> Promise<int>
function getNumberOfCompletedCorpses () {
    // TODO, maybe?
}

export default {
    name: "IncompleteCorpses",
    data () {
        return {
            NUM_TO_SHOW: 100,
            incompleteCorpses: []
        }
    },
    methods: {
        getIncompleteCorpses,
        getNumberOfCompletedCorpses,
        goToCorpseCreator ({corpse_name}) {
            let url = process.env.VUE_APP_CORPSE_API_URL + "stage/" + corpse_name
            fetch(url)
                .then(r => r.json())
                .then(stage => {
                    if (stage === 2) {
                        this.$router.push('./corpse-body/' + corpse_name)
                    } else if (stage === 3) {
                        this.$router.push('./corpse-legs/' + corpse_name)
                    } else {
                        this.$router.push('./completed-corpses/')
                    }
                })
        }
    },
    mounted () {
        this.getIncompleteCorpses()
    }
}

</script>

<style scoped>
.corpse-name {
    cursor: pointer;
    font-size: 2em;
    color: #e0d0dd;
}
.corpse-name:hover {
    color: #a02a2a;
}
ul {
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
}
li {
    padding: 0.5em;
    list-style: none;
}
</style>