const { celebrate, Segments, Joi} = require('celebrate')

exports.validaSessao = () =>{
    return(
        celebrate({
            [Segments.BODY]: Joi.object().keys({
                id: Joi.string().required(),
            })
        })
    )
    }

exports.validaOng = () => {
    return (celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().min(10).max(13),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2),
        })
    }))
}

exports.validaProfile = () => {
    return(celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
    }))
}

exports.validaCriaIncident = () => {
    return(celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required().min(0)
        })
    }))
}

exports.validaDeletaIncident = () => {
    return(
        celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            })
        })
    )
}

exports.validaPage = () => {
    return(celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        })
    }))
}

