const customMessage = (field: string, type: string) => {
    type dataType = { [key: string]: { [key: string]: string } };   
    const dataMessages: dataType = {
        "string": {
            'string.empty': `O campo ${field} não pode ser vazio`,
            'any.required': `O campo ${field} é obrigatório`,
            'string.base': `O campo ${field} deve ser do tipo texto`,
        },
        "date": {
            'date.empty': `O campo ${field} não pode ser vazio`,
            'any.required': `O campo ${field} é obrigatório`,
            'date.base': `O campo ${field} deve ser do tipo Data`
        }
    };
    
    return dataMessages[type];
};

export { customMessage };