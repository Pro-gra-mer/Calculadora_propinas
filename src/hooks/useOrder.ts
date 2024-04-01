import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    // Función para agregar un nuevo ítem a la orden

    const itemExists = order.find((orderItem) => orderItem.id === item.id);
    if (itemExists) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 } // Toma una copia y le añade cantidad +1
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 }; // Crea un nuevo ítem con una cantidad inicial de 1
      setOrder([...order, newItem]); // Actualiza el estado de la orden agregando el nuevo ítem al final del arreglo
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
};
