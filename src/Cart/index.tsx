import React from 'react';
import { useState } from 'react';
import { TicketRow } from '../TicketRow';

interface Group {
  name: string;
  price: number;
  description: string;
}

interface CartProps {
  groups: Group[];
}

export const Cart: React.FC<CartProps> = ({ ...props }) => {
  // Convert the array of objects into an object of nested objects
  const initialCart = props.groups.reduce((obj: any, group: Group) => {
    obj[group.name] = {
      price: group.price,
      description: group.description,
      count: 0,
    };
    return obj;
  }, {});

  const [cart, setCart] = useState(initialCart);

  return (
    <div className="flex flex-col gap-8">
      {Object.keys(cart).map((group, i) => {
        return (
          <TicketRow
            direction="right"
            price={cart[group].price}
            group={group}
            key={i}
            description={cart[group].description}
            setTotal={(count: number) => {
              setCart({
                ...cart,
                [group]: { ...cart[group], count },
              });
            }}
          />
        );
      })}
      <div className="flex justify-start w-full text-3xl font-bold lining-nums">
        {'$ ' +
          Object.keys(cart)
            .reduce((sum, key) => {
              console.log(cart);
              return sum + cart[key].count * cart[key].price;
            }, 0)
            .toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
      </div>
    </div>
  );
};
