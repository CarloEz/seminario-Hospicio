const { Control } = require("../database/db");

let ctrl = {};

ctrl.all = async (req, res) => {
    try {
        let control = await Control.findAll();
        res.json({ data: control });
    } catch {
        res.json('false');
    }
}

ctrl.id = async (req, res) => {
    try {
        const control = await Control.findByPk(req.params.id);
        res.json(control);
    } catch {
        res.json('false');
    }
}

ctrl.sup = async (req, res) => {
    try {
        const deleted = await Control.destroy({
            where: {
                Id_Control: req.params.id
            }
        })
        if (deleted) { res.json("eliminado") }
    } catch {
        res.json('false');
    }
}

ctrl.save = async (req, res) => {
    try {
        const control = await Control.create(req.body)
        res.json('Ingresado');
    } catch {
        res.json('false');
    }
}

ctrl.put = async (req, res) => {
    try {
        const update = await Control.update(
            req.body,
            {
                where: {
                    Id_Control: req.params.id
                }
            });
        if (update) { res.json('actualizado') }
    } catch (error) {
        res.json('false');
    }
}

module.exports = ctrl;