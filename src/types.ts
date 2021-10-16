export interface Item {
  event_id: number;
  event_name: string;
  publisher: string;
  event_date: string;
  event_time: string;
  price: number;
  city: string;
  venue: string;
  tickets_total: number;
  tickets_available: number;
}

export interface AddedItem extends Item {
  quantity: number;
}
