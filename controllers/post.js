const { response } = require("express");

const crearPost = async (req, res = response) => {
  const { title, content, authorId } = req.body;
  try {


    res.status(201).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error: error.message,
      msg: "Por favor hable con el administrador",
    });
  }
};

const obtenerPost = async (req, res = response) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 4;
    const search = req.query.search || "";



    res.status(201).json({
      ok: true,
      // total,
      // page: page + 1,
      // limit,
      // posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error: error.message,
      msg: "Por favor hable con el administrador",
    });
  }
};

module.exports = {
  crearPost,
  obtenerPost,
};
