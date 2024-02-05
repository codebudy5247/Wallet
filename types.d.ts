type User = {
  id: string;
  email: string;
  username: string;
  password: string;
  accountNumber: string;
  accountBalance: number;
  createdAt: Date;
  updatedAt: Date;
};

type createTx = {
  type: string;
  message: string;
  amount:number;
  recieverAccountNumber:string;
  senderId:string;
  recieverId:string
}
