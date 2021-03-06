const ItemPatrimonioRepository = require("../repositories/ItemPatrimonioRepository");

module.exports = {
    /* Perceba que o objeto response, do sequelize, 
       é recebido aqui. Importante para responder a 
       requisição de forma assíncrona. 
    */
    listAll: function (req, res) {
        //Blocking operation (Não fazer)
        //return ItemPatrimonioRepository.all()
        // console.log(ItemPatrimonioRepository.all());
        res.statusCode = 200; // Status HTTP para OK;
        ItemPatrimonioRepository.all().then(
            items => res.send(JSON.stringify(items))
        )
    },

    // handler para adcionar novo item no banco
    add: function (req, res) {
        ItemPatrimonioRepository.create(
            req.body
        ).then(() => {
            res.statusCode = 201; // Status HTTP para created;
            res.end();
        }).catch(error => {
            console.error(error);
            res.statusCode = 500; //Status HTTP para erro interno
            res.send(error.message);
        });
    },

    // handler para recuperar um item por patrimonio
    get: function (req, res) {
        ItemPatrimonioRepository.find(
            // req.params acessa os parâmetros passados na path definidos como :nomeparam
            req.params.patrimonio).then((item) => {
                res.statusCode = 200; // Status HTTP para OK;
                res.send(JSON.stringify(item));
            });
    }
}
