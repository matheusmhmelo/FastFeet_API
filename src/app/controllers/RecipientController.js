import { Op } from 'sequelize';
import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (!req.userId) {
      return res
        .status(400)
        .json({ error: 'Only administrator can create recipients' });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zipcode: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found' });
    }

    if (!req.userId) {
      return res
        .status(400)
        .json({ error: 'Only administrator can update recipients' });
    }

    const recipientUpdated = await recipient.update(req.body);

    return res.json({ recipientUpdated });
  }

  async index(req, res) {
    let where = {};
    let limit = null;
    let offset = null;

    if (req.params.recipient_id) {
      where = { id: req.params.recipient_id };
    }

    if (req.query.q) {
      where = {
        name: {
          [Op.like]: `%${req.query.q}%`
        }
      };
    }

    if (req.query.page) {
      limit = 10;
      offset = limit * (req.query.page - 1);
    }

    const recipients = await Recipient.findAll({
      where,
      limit,
      offset,
      order: [['id', 'ASC']]
    });

    return res.json(recipients);
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (recipient) {
      await recipient.destroy();
      return res.json({ message: 'Recipient deleted succefully' });
    }

    return res.json({ message: 'Recipient not found' });
  }
}

export default new RecipientController();
