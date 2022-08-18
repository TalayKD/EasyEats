import React from 'react';

export default function Order(props: any) {
  const { branch_id, tablenumber, ordertime } = props;
  let ordercomplete = false;
}


// // PANN: TODO, update this to match w DBeaver
// export interface IOrder {
//     branch_id: string;
//     tablenumber: number;
//     ordertime: string;
//     ordercomplete: boolean;
//   }
  
//   // PANN: TODO, update this to match w DBeaver
//   export interface IOrderItem {
//     branch_id: string;
//     menuitem_id: string;
//     quantity: number;
//     delivered: boolean;
//     customizabletext: string;
//   }