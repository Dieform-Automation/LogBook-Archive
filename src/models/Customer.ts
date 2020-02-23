export default interface Customer {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
  };
  phone: string;
}
