const ideas = require("../model/ideas")

const fs = require('fs')

const create = (request, response) => {

    criticalData1 = request.body.idea
    criticalData2 = request.body.scope

    if (criticalData1 == undefined || criticalData2 == undefined ) {
        return response.status(200).send({ aviso : `Adicionar a ideia e seu escopo é fundamental para aceitá-la neste site. Alguns exemplos de escopo são "educação", "saúde" e "saneamento". Caso não saiba qual escopo, preencha-o como "geral".`})
    }

    if (criticalData1.length <= 10) {
        return response.status(200).send({ aviso : `Talvez esta ideia esteja um pouco curta, o que você acha? Fala mais pra gente!`})
    }

    if (criticalData2.length <= 3) {
        return response.status(200).send({ aviso : `Confere se você escreveu o escopo completo, ele parece um pouco curto. Caso não saiba o que adicionar, preenche com "geral". Agradecemos!`})
    }

    let idea = new ideas(request.body)
    idea.save(function(err){
        if (err) {
            response.status(500).send({ message: err.message })
        } else {
            response.status(201).send({ message : `Agradecemos pela ótima ideia!`})
        }
    })
}

const readAll = (request, response) => {
    ideas.find(function (err, results) {
        if (err) {
            response.status(500).send({ message: err.message })
        } else {
            response.status(200).send(results)
        }
    })
}

module.exports = {
    create,
    readAll,
}