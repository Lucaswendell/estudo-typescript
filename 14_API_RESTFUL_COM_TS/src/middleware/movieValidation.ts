import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatorio.")
      .isLength({ min: 5 })
      .withMessage("O título deve ter no minimo 5 caracteres."),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um numero")
      .custom((value: Number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa estar entre 0 e 10.");
        } else {
          return true;
        }
      }),
    body("description")
      .isString()
      .withMessage("A descrição deve ser informada."),
    body("director")
      .isString()
      .withMessage("O nome do diretor deve ser informado."),
    body("poster").isURL().withMessage("A imagem precisa ser informada"),
  ];
};
