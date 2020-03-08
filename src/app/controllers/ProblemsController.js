import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import DeliveryProblems from '../models/DeliveryProblems';

import DeliveryCanceled from '../jobs/DeliveryCanceled';
import Queue from '../../lib/Queue';

class DeliveryController {
  async delete(req, res) {
    const delivery = await Delivery.findByPk(req.params.id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman'
        },
        {
          model: Recipient,
          as: 'recipient'
        }
      ]
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    if (delivery.canceled_at) {
      return res.status(400).json({ error: 'Delivery already canceled' });
    }

    await delivery.update({
      canceled_at: new Date()
    });

    await Queue.add(DeliveryCanceled.key, {
      delivery
    });

    return res.json(delivery);
  }

  async index(req, res) {
    const problems = await DeliveryProblems.findAll({
      attributes: ['delivery_id']
    }).map(u => u.get('delivery_id'));

    const deliveryWithProblems = await Delivery.findAll({
      where: { id: problems }
    });

    return res.json(deliveryWithProblems);
  }
}

export default new DeliveryController();
