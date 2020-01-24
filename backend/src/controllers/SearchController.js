const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // Buscar todos os Devs num raio de 10Km
        const { latitude, longitude, techs } = request.query;        
        
        //Filtrar por tecnologias
        const techsArray = parseStringAsArray(techs);
            console.log(techsArray);// adicionado para tenta achar bug

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        
        return response.json({ devs });
    }
}