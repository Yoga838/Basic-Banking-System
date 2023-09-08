class BankAccount {
  constructor(Saldo = 0) {
    this.Saldo = Saldo;
  }


  Deposit(Jumlah) {
    setTimeout(() => {
      if (Jumlah > 0) {
        this.Saldo += Jumlah;
        console.log(`Deposit sebesar ${Jumlah} berhasil. Saldo saat ini: Rp. ${this.Saldo}`);
      } else {
        console.log("Jumlah deposit harus lebih dari Rp.0.");
      }
    }, 5000); 
  }

  
  Withdraw(Jumlah) {
    setTimeout(() => {
      if (Jumlah > 0 && Jumlah <= this.Saldo) {
        this.Saldo -= Jumlah;
        console.log(`Penarikan sebesar ${Jumlah} berhasil. Saldo saat ini: Rp. ${this.Saldo}`);
      } else if (Jumlah <= 0) {
        console.log("Jumlah penarikan harus lebih dari Rp.0.");
      } else {
        console.log("Saldo tidak mencukupi untuk melakukan penarikan.");
      }
    }, 5000); 
  }

  CheckSaldo(){
    setTimeout(() => {
        console.log(`jumlah saldo anda saat ini sebesar Rp. ${this.Saldo}`)
    }, 5000);
  }
}


const NewAccount = new BankAccount(1000);

NewAccount.CheckSaldo();
NewAccount.Deposit(500); 
NewAccount.Withdraw(200); 
NewAccount.CheckSaldo();
